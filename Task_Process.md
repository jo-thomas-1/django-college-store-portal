# Task Process

- create a github repository and link to local project folder
- update the readme file with task requirements
- open django virtual environment
- execute `django-admin startproject school_store .` to start a new Django project in current folder
- execute `python manage.py runserver` to run current application
- open browser at `http://127.0.0.1:8000/` and verify that application is running

- create an app for the home page `python manage.py startapp home_page`
- add app name `home_page` in the `INSTALLED_APPS` list in `settings.py`
- create template, views and urls for sample home page

- all pages are required to have the same navbar
- create a base template to hold all common elements like navbar
- extend base template in app specific templates

- update static file codes to impliment custom css

```
STATIC_URL = 'static/'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static')
]
STATIC_ROOT = os.path.join(BASE_DIR, 'assets')
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
```

- create a new app `account` for login and register functions
- update `settings.py` to use mysql database
- create templates, views and urls for register, login and logout functions

- impliment messages system to provide alerts to user
- impliment js code to generate bootstrap alerts for all message elements