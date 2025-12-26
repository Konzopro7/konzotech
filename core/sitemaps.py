from django.contrib.sitemaps import Sitemap
from django.urls import reverse

class StaticViewSitemap(Sitemap):
    changefreq = "monthly"
    priority = 0.8

    def items(self):
        # Ce sont les noms de tes urls (name='...')
        return ["home", "services", "projects", "about", "contact", "portfolio"]

    def location(self, item):
        return reverse(item)
