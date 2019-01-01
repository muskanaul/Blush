from bs4 import BeautifulSoup
from urllib.request import urlopen, Request
import requests
import json
import math
import os
from models.Category import Category
from models.Product import Product


#global variables
headers = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11', 'Accept': 'application/json', 'referer': 'https://google.ca'}
base_url ='https://www.sephora.com/api/catalog/search?country_switch=ca&type=keyword&q=sale&icid2=meganav_sale_top_nav_link%3fpageSize=-1&currentPage=1&content=true&includeRegionsMap=true&page=60&currentPage=1'
totalProducts = 0
categories = []
pageSize = 60
responseObject = {}

#debug values
_DEBUG_= 0 #set to 1 for debug mode 
testValue = 6

def getSephoraProducts():
    getCategoryAndRecordInfo()
    if _DEBUG_:
        test()        
    else:
        for c in categories:
            c.products = getCategorySpecificRecords(c.node, c.name, c.recordCount)

    responseObject = [c.convertToJson() for c in categories]
    return responseObject

def getCategoryAndRecordInfo():
    #get data 
    req = Request(url=base_url, headers=headers) 
    res = urlopen(req).read().decode()
    categoryData = json.loads(res)
    
    #set record information to global variables from dictionary
    responseObject["totalProducts"] = categoryData["totalProducts"]
    totalProducts = categoryData["totalProducts"]

    #set categoriesInformation
    for x in categoryData["categories"]:
        c = Category(x["displayName"], x["node"], x["recordCount"])
        categories.append(c)
    
    #set node information for future category specific API calls
    if _DEBUG_:
        for c in categories:
            print(c.name + " : " + str(c.node) + " : " + str(c.recordCount) + " : " + str(totalProducts))

def getCategorySpecificRecords(node, name, recordCount):
    numCalls = int(math.ceil(float(recordCount)/pageSize))
    products = []

    #iterate through all pages and append the product data for specific category
    for currentPage in range(1,numCalls+1):
        curr_url ='https://www.sephora.com/api/catalog/search?country_switch=ca&type=keyword&q=sale&icid2=meganav_sale_top_nav_link%3fpageSize=-1&currentPage=' + str(currentPage) + '&content=true&includeRegionsMap=true&page=60&currentPage=' + str(currentPage)
        s_url = curr_url + "&node=" + str(node)
        req = Request(url=s_url, headers=headers) 
        res = urlopen(req).read().decode()
        productData = json.loads(res)

        for x in productData["products"]:
            salePriceExists = x["currentSku"]
            if "salePrice" in salePriceExists:
                p = Product(x["brandName"],x["productName"], x["heroImage"], x["productId"], x["rating"], 
                x["currentSku"]["listPrice"], x["currentSku"]["salePrice"], x["currentSku"]["isLimitedEdition"], x["currentSku"]["isLimitedTimeOffer"])
                products.append(p)
    return products

def test():
    categories[testValue].products = getCategorySpecificRecords(categories[testValue].node, categories[testValue].name, categories[testValue].recordCount)
    responseObject[categories[testValue].name] = categories[testValue].convertToJson()

if __name__ == "__main__":
    getSephoraProducts()

