from ..models import *
from ..views import *

def get_match_info_teams(teamData,matchId,headerData):
    matchinfo=[]
    if teamData['match__id'] is not None:
        matchinfo = TeamModelViewSet.objects.filter(matchId=teamData['match__id'])
    return matchinfo

# def get_match_info_teams(teamData,matchId,headerData):
#     matchinfo=[]
#     if teamData['match__id'] is not None:
#         matchinfo = TeamModelViewSet.objects.filter(matchId=teamData['match__id'])
#     return matchinfo