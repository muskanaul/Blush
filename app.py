# app.py
from flask import Flask, jsonify
from sephora import getSephoraProducts
app = Flask(__name__)

@app.route('/api/sephora')
def index():
    return jsonify(getSephoraProducts())

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)