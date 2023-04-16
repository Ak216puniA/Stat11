from ..models import *
from ..views import *
from ..serializers import *

def get_teams_info(match_id):
    match_teams_data = []
    match_teams = Team.objects.filter(match__id=match_id)
    for i,team in enumerate(match_teams):
        data=team.name
        match_teams_data.append(data)
        if(team.toss==True):
            tosswinner=team.name
            turn=team.turn
    match_teams_data.append(tosswinner,turn)
    return (match_teams_data)
#team1 team2 tosswinner turn
def get_match_info(match_id):
    match=Match.objects.filter(match__id=match_id)
    match_data=[match.location,match.overs_no]
    return (match_data)
#location overs_no