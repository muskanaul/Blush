# app.py
from flask import Flask, jsonify
from crawlers.sephora import getSephoraProducts
app = Flask(__name__)
port = int(os.environ.get('PORT', 5000)) 

@app.route('/api/sephora')
def index():
    return jsonify(getSephoraProducts())

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=port)