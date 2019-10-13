from flask import Flask, render_template,Blueprint

core = Blueprint('core',__name__)

@core.route("/")
def index():
    return render_template('public/index.html')
