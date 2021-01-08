from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .constants import *
from rest_framework import status
from .serializers import MarksSerializer
from .models import MarksModel
import json
# Create your views here.

class Marks(APIView):
    def post(self,request):
        try:
            request_data = request.data
            serializer = MarksSerializer(data=request.data)
            if not serializer.is_valid():
                data = serializer.errors
                return Response(data, status=status.HTTP_400_BAD_REQUEST)
            MarksModel.objects.create(rollno = request_data["rollno"],name = request_data["name"],marks_maths = request_data["marks_maths"],
                                        marks_physics = request_data["marks_physics"],
                                        marks_chemistry = request_data["marks_chemistry"],
                                        total_marks = request_data["total_marks"],
                                        percentage = request_data["percentage"])
        except Exception as e:
            Response(EXCEPTION_RESPONSE,status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(SUCCESS_RESPONSE,status=status.HTTP_200_OK)



class LeaderBoard(APIView):
    def get(self,request):
        try:
            students = MarksModel.objects.values().all()
            lead_board = sorted(students, key=lambda x: x['percentage'])[::-1]
            return Response(lead_board,status=status.HTTP_200_OK)
        except Exception as e:
            Response(EXCEPTION_RESPONSE, status=status.HTTP_500_INTERNAL_SERVER_ERROR)




