class User(object):
    def __init__(self, username, password):
        self.username = username
        self.password = password
        self.incidents = []

    @staticmethod
    def from_dict(source):
        user = User(source[u'username'], source[u'password'])

        if u'incidents' in source:
            user.incidents = source[u'incidents']

        return user

    def to_dict(self):
        user = {
            u'username': self.username,
            u'password': self.password,
        }

        if self.incidents:
            user[u'incidents'] = self.incidents

        return user
