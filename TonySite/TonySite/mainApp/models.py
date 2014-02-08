from django.db import models

class Person(models.Model):
	name = models.CharField(max_length=50, verbose_name=('Name'))
	degrees = models.CharField(max_length=50,verbose_name=('Degree'))
	role = models.CharField(max_length=50,verbose_name=('Role'))
	info = models.TextField()

class Portfolio(models.Model):
	ptype = models.CharField(max_length=50,verbose_name=('Ptype'))
	stype = models.CharField(max_length=50,verbose_name=('Stype'))
	ttype = models.CharField(max_length=50,verbose_name=('Ttype'))
	header = models.CharField(max_length=50,verbose_name=('Header'))
	info = models.CharField(max_length=50,verbose_name=('Info'))
	location = models.CharField(max_length=50,verbose_name=('Location'))