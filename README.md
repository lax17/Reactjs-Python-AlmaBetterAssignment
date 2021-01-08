# Reactjs-Python-AlmaBetterAssignment
Assignment
Design a 3 page portal that captures marks of students in one page and displays the leaderboard in another page

Frontend:
- Homepage having 2 choices: 
	- Enter marks
	- View Leaderboard
  
  <b> Result</b>
  <img alt="LeadershipBoard" src="https://user-images.githubusercontent.com/41922928/104048772-d2d09380-5209-11eb-8a65-928ea5ad726a.PNG" width="850px">
  
- Enter marks page:
  - Following inputs should be taken from the frontend:
      - Roll No
      - Name
      - Marks in Maths (out of 100)
      - Marks in Physics (out of 100)
      - Marks in Chemistry (out of 100)
      - Total (Automatically calculated)
      - Percentage (Automatically calculated)
    
    <b>Result</b>
    <img alt="validation" src="https://user-images.githubusercontent.com/41922928/104049569-2ee7e780-520b-11eb-9e50-2e0215f21c09.PNG" width="850px">
    
    <b> Automatic Calculation is done on Frontend </b>
    
    <img alt="success_thumura" src="https://user-images.githubusercontent.com/41922928/104049824-99992300-520b-11eb-8f2b-71e458e32294.PNG" width="850px">
    
 Backend Api's Successful Request-Response:
 
 - Python (Flask/Django) CRUD APIs for POST marks and GET results for the leaderboard.
 
    <b>POST marks API</b>
    <img  alt="api1" src="https://user-images.githubusercontent.com/41922928/104050423-a0746580-520c-11eb-8d00-8b4491f73dd1.PNG" width="850px">
    
    <b>GET results for the leaderboard API</b>
   <img alt="api2" src="https://user-images.githubusercontent.com/41922928/104050478-b4b86280-520c-11eb-8e04-a00cb7dedada.PNG" width="850px">
 
  For handling of concurrent requests (Suppose the POST API for submitting marks is called concurrently by 2 users, then the last one should finally reflect on the backend) I have refer below link:
  
  https://stackoverflow.com/questions/1645269/concurrency-control-in-django-model
  
