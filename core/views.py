from django.shortcuts import render, redirect
from .models import Service, Project
from django.core.mail import send_mail
from django.conf import settings

def home(request):
    services = Service.objects.filter(actif=True)
    return render(request, 'core/home.html', {'services': services})

def services(request):
    return render(request, 'core/services.html')

def projects(request):
    projets = Project.objects.all()
    return render(request, 'core/projects.html', {'projects': projets})

def about(request):
    return render(request, 'core/about.html')

def contact(request):
    if request.method == "POST":
        nom = request.POST.get("nom")
        email = request.POST.get("email")
        message = request.POST.get("message")

        contenu = f"Nom : {nom}\nEmail : {email}\n\nMessage :\n{message}"

        send_mail(
            subject="Nouveau message via le site KONZO TECH",
            message=contenu,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.EMAIL_HOST_USER],
        )

        return redirect("contact_success")

    return render(request, "core/contact.html")
def contact_success(request):
    return render(request, "core/contact_success.html")
def portfolio(request):
    return render(request, "core/portfolio.html")
def politique_cookies(request):
    return render(request, "core/politique-cookies.html")
def politique_confidentialite(request):
    return render(request, "core/politique-confidentialite.html")


