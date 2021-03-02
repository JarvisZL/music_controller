from django.shortcuts import render
from rest_framework import generics
from .models import Room
from .serializers import RoomSeiralizer

# Create your views here.
class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSeiralizer
