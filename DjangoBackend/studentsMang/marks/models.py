from django.db import models

# https://stackoverflow.com/questions/1645269/concurrency-control-in-django-model

# Create your models here.

class MarksModel(models.Model):
    id = models.AutoField(primary_key=True)
    rollno = models.IntegerField(null=False,unique=True)
    name = models.CharField(null=False,max_length=125)
    marks_maths = models.IntegerField(null=False)
    marks_physics = models.IntegerField(null=False)
    marks_chemistry = models.IntegerField(null=False)
    total_marks = models.IntegerField(null=False)
    percentage = models.FloatField(null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        cls = self.__class__
        if self.pk:
            rows = cls.objects.filter(
                pk=self.pk, _change=self._change).update(
                _change=self._change + 1)
            if not rows:
                 print("ConcurrentModificationError")
            self._change += 1
        super(MarksModel, self).save(*args, **kwargs)

