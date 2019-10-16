from flask import Response
from flask import request
from flask_restful import Resource
from flask_mail import Message
from FullStack import mail
#from FullStack import db
#from firebase_admin import firestore

class incidentAPI(Resource):
    def post(self):
        #Load json
        incidentData = request.json
        location = incidentData['location']
        time = incidentData['time']
        types = incidentData['types']
        link = incidentData['link']
        start = incidentData['start']
        end = incidentData['end']
        username = incidentData['username']
        contact = incidentData['contact']

        #Enter incdent into database
        #user_ref = db.collection(u'users').document(username)
        #user_ref.update({u'incidents': firestore.ArrayUnion([incidentData])})

        #Contact Enformcement
        msg = Message(subject="EMERGENCY", sender='dubhacks.rs@gmail.com', recipients=['dubhacks.enforcement@gmail.com'])
        msg.body = """
        Hello Enforcement,

        There is a potential gun violence incident! Here are the details:

        Location of Incident: %s
        Time of Incident: %s utc
        Firearm Type(s): %s
        Video Footage: %s
        Video Footage Start: %s
        Video Footage End: %s
        Primary Owner: %s
        Primary Owner Contact: %s

        Sincerly,

        Rapid Security
        """ % (location, time ,types, link, start, end, username, contact)
        mail.send(msg)

        #resp = Response({"msg":msg})
        #resp.headers['Access-Control-Allow-Origin'] = '*'
        #return resp
