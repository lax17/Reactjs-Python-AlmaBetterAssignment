from django.conf.urls import url
from . import views

urlpatterns = [
url(r"^marks/$", views.Marks.as_view(), name="marks"),
url(r"^leaderboard/$", views.LeaderBoard.as_view(),name="leaderboard")

]