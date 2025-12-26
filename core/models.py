from django.db import models

class Service(models.Model):
    titre = models.CharField(max_length=100)
    description = models.TextField()
    prix_depart = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    actif = models.BooleanField(default=True)

    def __str__(self):
        return self.titre


class Project(models.Model):
    titre = models.CharField(max_length=150)
    client = models.CharField(max_length=100, blank=True)
    description = models.TextField(blank=True)
    lien = models.URLField(blank=True)
    date_realisation = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.titre
