import os
import sys
import flask

sys.path.insert(0, os.path.realpath(os.path.join(os.path.dirname(__file__), '../../')))

#from flask_debugtoolbar import DebugToolbarExtension

app = flask.Flask(__name__)
app.config.from_object(__name__)
app.config['MONGODB_SETTINGS'] = {
    'db': 'canvip',
    'host': 'mongodb://canvip:canvip@ds043200.mlab.com:43200/canvip',
    'port': 43200
}
app.debug = True

app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

from models import db
db.init_app(app)

#DebugToolbarExtension(app)

from views import index, pagination
app.add_url_rule('/', view_func=index)
app.add_url_rule('/pagination', view_func=pagination)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=4000)
