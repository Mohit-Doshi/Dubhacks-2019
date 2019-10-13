from flask import request
from flask_restful import Resource
#from FullStack import db
#from firebase_admin import firestore

class incidentAPI(Resource):
    def post(self):
        try:
            #Load json
            incidentData = requent.json['body']
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

            EMERGENCY: There is a potential gun violence incident!
            Here are the details:
            Location of Incident:
            %s

            Time of Incident:
            %s

            Firearm Type(s):
            %s

            Video Footage:
            %s

            Video Footage Start:
            %s

            Video Footage End:
            %s

            Primary Owner:
            %s

            Primary Owner Contact:
            %s
            """ % (location,time ,types, firearm, link, start, end, username, contact)
            mail.send(msg)

            return f"Success"

        except Exception as e:
            return f"An Error Occured: {e}"
