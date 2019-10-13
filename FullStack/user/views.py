from flask import Flask, render_template,Blueprint
from FullStack import db

user = Blueprint('user',__name__)
users_ref = db.collection(u'users')

@users.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('core.index'))

@user.route('/register',methods=['GET','POST'])
def register():
    if request.method == 'POST':
        username = request.json['username']
        password = request.json['password']
        data = {
            u'username':username,
            u'password':password,
            u'incidents':[]
        }
        users_ref.document(username).set(data)
        return f"Success"

@users.route('/login',methods=['GET','POST'])
def login():
    if request.method == 'POST':
        username = request.json['username']
        password = request.json['password']

        users_ref.document(username).

        if user is not None and password ==  :
            login_user(user)

            return f"Success"
        else:
            return f"Success"

    return render_template('login.html',form=form)

@users.route('/account',methods=['GET','METHOD'])
@login_required
def account():

    return render_template('account.html',profile_image = profile_image,form=form)
