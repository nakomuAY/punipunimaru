import os
BASE_DIR = os.path.dirname(os.path.dirname(__file__))

# mysqlを指定
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME':  'user_table',
        'USER': 'root',
        'PASSWORD': 'kcsf',
    }
}

ALLOWED_HOSTS = []

DEBUG = True