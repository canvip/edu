# -*- coding: utf-8 -*-

# Copyright 2014 flask-mongoalchemy authors. All rights reserved.
# Use of this source code is governed by a BSD-style
# license that can be found in the LICENSE file.
import warnings
from flask.exthook import ExtDeprecationWarning
warnings.simplefilter('ignore', ExtDeprecationWarning)
from flask import Flask, request
from flask.ext.mongoalchemy import MongoAlchemy
#from flask_mongoengine import MongoEngine
app = Flask(__name__)

app.config['DEBUG'] = True

app.config['MONGOALCHEMY_DATABASE'] = 'canvip' #dbname //n   #dbusaer:dbapss@url
app.config ['MONGOALCHEMY_CONNECTION_STRING'] = 'mongodb://canvip:canvip@ds043200.mlab.com:43200/canvip'

db = MongoAlchemy(app)


#scami
class User(db.Document):
    name = db.StringField()
    password = db.StringField()