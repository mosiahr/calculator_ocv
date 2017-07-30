#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from flask import Flask, render_template, json, jsonify
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
app = Flask(__name__)


@app.route('/index', methods=['GET', 'POST'])
def index():
    json_url = os.path.join(BASE_DIR, 'data', 'osago.json')
    data = json.load(open(json_url, encoding="utf-8"))
    data = json.dumps(data, ensure_ascii=False)
    return render_template('index.html', data=data, title='Калькулятор ОСАГО')

if __name__ == '__main__':
    app.run(debug=True)