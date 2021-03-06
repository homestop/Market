from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Order
from .serializer import OrderSerializer

@api_view(['GET', 'POST'])
def order_list(request):
    if request.method == 'GET':
        out = Order.objects.all()
        serializer = OrderSerializer(out, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)