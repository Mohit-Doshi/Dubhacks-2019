import os
from flask import Flask
#from flask_login import LoginManager
from flask_mail import Mail
#import firebase_admin
#from firebase_admin import credentials, firestore, initialize_app
from flask_restful import Api,Resource

##############################################################

                        #App Setup

##############################################################

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecretkey'

##############################################################

                        #Mail Setup

##############################################################

mail = Mail()
app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 465
app.config["MAIL_USE_SSL"] = True
app.config["MAIL_USERNAME"] = 'dubhacks.rs@gmail.com'
app.config["MAIL_PASSWORD"] = 'dubhacks-2019'
mail.init_app(app)

##############################################################

                        #Restful API Setup

##############################################################

api = Api(app)
from FullStack.core.api import incidentAPI
api.add_resource(incidentAPI, '/api/incident/')

##############################################################

                        #Blueprint Setup

##############################################################

from FullStack.core.views import core
app.register_blueprint(core)

'''
##################### ARCHIVE ################################

##############################################################

                        #Firestore Setup

##############################################################

cred = credentials.ApplicationDefault()
prodject_id =
firebase_admin.initialize_app(cred, {
  'projectId': "rapidsecurity-dubhacks2019",
})
db = firestore.client()

##############################################################

                        #Login Setup

##############################################################

login_manager = LoginManager()

login_manager.init_app(app)
login_manager.login_view = 'user.login'
'''
