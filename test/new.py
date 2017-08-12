from mongoengine import connect
'''
# Regular connect
connect('dbname', replicaset='rs-name')
'''
# MongoDB URI-style connect

connect(host='mongodb://canvip:canvip@ds043200.mlab.com:43200/canvip')
class BlogPost(Document):
    title = StringField(required=True, max_length=200)
    posted = DateTimeField(default=datetime.datetime.utcnow)
    tags = ListField(StringField(max_length=50))
    meta = {'allow_inheritance': True}

class TextPost(BlogPost):
    content = StringField(required=True)

class LinkPost(BlogPost):
    url = StringField(required=True)