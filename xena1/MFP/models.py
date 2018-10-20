# -*- coding: utf-8 -*-
from __future__ import unicode_literals


# Create your models here.
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.

class Auth(models.Model):
    user = models.OneToOneField(User,on_delete=models.DO_NOTHING)
    ex_officio = models.CharField(max_length=256)
    create_date = models.DateTimeField(default = timezone.now)

    def __str__(self):
        return self.user.username
