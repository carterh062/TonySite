#from TonySite.mainApp.models import PortfolioObject
from django.shortcuts import render
def homeView(request):
	return render(request,'base.html')