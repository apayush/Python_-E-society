from django.shortcuts import render

# Create your views here.
def js1(request):
	context = {}
	return render(request,'js/js1.html', context)

def js2(request):
	context = {}
	return render(request,'js/js2.html', context)