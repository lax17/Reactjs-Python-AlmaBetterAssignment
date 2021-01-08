from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import MarksModel


class MarksSerializer(serializers.Serializer):
    rollno = serializers.IntegerField(required=True, allow_null=False,validators=[UniqueValidator(queryset=MarksModel.objects.all())])
    name = serializers.CharField(required=True, allow_null=False, max_length=125)
    marks_maths = serializers.IntegerField(required=True, allow_null=False,min_value=0, max_value=100)
    marks_physics = serializers.IntegerField(required=True, allow_null=False,min_value=0, max_value=100)
    marks_chemistry = serializers.IntegerField(required=True, allow_null=False, min_value=0, max_value=100)
    total_marks = serializers.IntegerField(required=True, allow_null=False, min_value=0, max_value=300)
    percentage = serializers.FloatField(required=True, allow_null=False, min_value=0, max_value=100)

