from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from stat11.models import Match
from stat11.serializers import MatchSerializer, MatchNestedSerializer
from stat11.utils import get_match_team_data

class MatchModelViewSet(viewsets.ModelViewSet):
    queryset = Match.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['tournament__id', 'date', 'time', 'overs_no']
    ordering_fields = ['date', 'time']

    def get_serializer_class(self):
        if self.action == 'list' or self.action == 'retrieve':
            return MatchNestedSerializer
        return MatchSerializer
    
    @action(detail=False, methods=['get'])
    def all_match_and_teams(self, request):

        all_match_list = self.get_queryset()
        # for match in all_match_list:
        #     print("meow",match)
        # print(all_match_list)
         
        # for i in all_match_list:
        #     first_match = i
        #     print(vars(first_match))

        # get_match_team_data(first_match.id)
        first_match = all_match_list[0]
        print("meow",first_match.id)
        res = get_match_team_data(first_match.id)
        return Response(res)