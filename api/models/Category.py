class Category:
    def __init__(self, name, node, recordCount, products=None):
        self.name= name
        self.node = node
        self.recordCount = recordCount
        self.products = products

    def convertToJson(self):
        return {
        "categoryName": self.name,
        "recordCount": self.recordCount,
        "products": self.convertProductsToJson()
        }

    def convertProductsToJson(self):
        jsonList = []
        for x in self.products:
            jsonList.append(x.convertToJson())
        return jsonList