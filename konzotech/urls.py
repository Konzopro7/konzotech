from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from django.contrib.sitemaps.views import sitemap

from core import views
from core.sitemaps import StaticViewSitemap

sitemaps = {
    "static": StaticViewSitemap,
}

urlpatterns = [
    path('admin/', admin.site.urls),

    # Pages principales
    path('', views.home, name='home'),
    path('services/', views.services, name='services'),
    path('projets/', views.projects, name='projects'),
    path('contact/', views.contact, name='contact'),
    path('about/', views.about, name='about'),
    path('contact/success/', views.contact_success, name='contact_success'),
    path('portfolio/', views.portfolio, name='portfolio'),
    path("politique-cookies/", views.politique_cookies, name="politique_cookies"),
    path("politique-confidentialite/", views.politique_confidentialite, name="politique_confidentialite"),


    # Sitemap SEO
    path(
        "sitemap.xml",
        sitemap,
        {"sitemaps": sitemaps},
        name="django.contrib.sitemaps.views.sitemap",
    ),

    # robots.txt
    path(
        "robots.txt",
        TemplateView.as_view(
            template_name="robots.txt",
            content_type="text/plain"
        ),
    ),
]
