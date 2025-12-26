import os
import sys

# Add project path
sys.path.insert(0, os.path.dirname(__file__))

# Set Django settings module
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "konzotech.settings")

# Load WSGI application
from konzotech.wsgi import application
