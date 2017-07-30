#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from flask import Flask, render_template, json, jsonify
import os
import requests

# BASE_DIR = os.path.dirname(os.path.abspath(__file__))
app = Flask(__name__)


@app.route('/index', methods=['GET'])
def index():
    data = requests.get('http://127.0.0.1:5000/')

    print(data)
    return render_template('index.html', )

if __name__ == '__main__':
    app.run(port=5050, debug=True)