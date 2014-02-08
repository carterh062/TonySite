from django.contrib import admin
from django.contrib.admin.options import ModelAdmin
from TonySite.mainApp.models import Person, Portfolio

class PersonAdmin(ModelAdmin):
	list_display = ('name', 'degrees', 'role', 'info')

class PortfolioAdmin(ModelAdmin):
	list_display = ('ptype', 'stype', 'ttype', 'header', 'info', 'location')

admin.site.register(Person, PersonAdmin)
admin.site.register(Portfolio, PortfolioAdmin)