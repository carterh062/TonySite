from django.template.base import Library
from django.db.models import Q
from django.shortcuts import get_object_or_404
from TonySite.mainApp.models import Person, Portfolio
register = Library()

