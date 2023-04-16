from stat11.models import BatterScoreboard
from stat11.serializers import BatterScoreboardNestedSerializer

def get_team_batter_data(team_id):
    team_batter_data = []
    teams_batters = BatterScoreboard.objects.filter(team__id=team_id)
    for index,batters in enumerate(teams_batters):
        serializer = BatterScoreboardNestedSerializer(batters)
        data =serializer.data
        team_batter_data.append(data)
    return (team_batter_data)
        