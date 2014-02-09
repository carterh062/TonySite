#from TonySite.mainApp.models import PortfolioObject
from django.shortcuts import render
from TonySite.mainApp.models import Person, Portfolio
def homeView(request):
	portfolios = Portfolio.objects.all()
	ptypes = []
	for portfolio in portfolios:
		if not ((portfolio.ptype in ptypes)):
			ptypes.append(portfolio.ptype)
	print ptypes
	return render(request,'base.html',{'ptypes': ptypes})