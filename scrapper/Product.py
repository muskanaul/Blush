import os 

class Product:
    def __init__(self, brandName=None, productName=None, heroImage=None, productId=None, rating=None, listPrice=None, salePrice=None, isLimitedEdition=None, isLimitedTimeOffer=None):
        self.brandName = brandName
        self.productName = productName
        # get the bigger image
        self.image = 'http://www.sephora.com' + os.path.splitext(heroImage)[0] + '@2x.jpg'
        self.productId = productId
        self.rating = rating
        self.listPrice = listPrice
        self.salePrice = salePrice
        self.limitedEdition = isLimitedEdition
        self.limitedTimeOffer = isLimitedTimeOffer

    def convertToJson(self):
        return {
        "brandName": self.brandName,
        "productName": self.productName,
        "image": self.image,
        "productId": self.productId,
        "rating": self.rating,
        "listPrice": self.listPrice,
        "salePrice": self.salePrice,
        "limitedEdition": self.limitedEdition,
        "limitedTimeOffer": self.limitedTimeOffer
        }
