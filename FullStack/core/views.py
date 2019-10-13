from flask import Flask, render_template,Blueprint

core = Blueprint('core',__name__)

@core.route("/")
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run()
