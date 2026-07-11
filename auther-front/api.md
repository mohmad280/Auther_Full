<h2> Auth Controller </h2>

POST : http://localhost:8080/api/auth/login

"email":"mohmadghanem18@gmail.com",
"password":"123456"
-------------------------------------------
POST : http://localhost:8080/api/auth/logout
--------------------------------------------
<h1>USER controller</h1>

<h3>1- Create User</h3>
POST : http://localhost:8080/api/users

"firstName": "Mohmad",
"middleName": "Ashraf",
"lastName": "Ghanem",
"firstNameArabic": "محمد",
"middleNameArabic": "اشرف",
"lastNameArabic": "غانم",
"nationality": "Jordanian",
"nationalNumber": "0785344074",
"nameOfUniversity": "Irbid National University",
"gender": "MALE",
"berthOfDate": "2005-05-20",
"specialization": "Computer Science",
"theAcademicYear": 2,
"phone": "0785344074",
"email": "mohmadgh@example.com",
"location": "Irbid, Jordan",
"imageUrl": "https://example.com/images/profile.jpg",
"videoUrl": "https://example.com/videos/intro.mp4"
-------------------------------------------------
<h3>3- Update User</h3>
PUT : http://localhost:8080/api/users/{id}

"firstName": "Mohmad",
"middleName": "Ashraf",
"lastName": "Ghanem",
"firstNameArabic": "محمد",
"middleNameArabic": "اشرف",
"lastNameArabic": "غانم",
"nationality": "Jordanian",
"nationalNumber": "0785344074",
"nameOfUniversity": "Irbid National University",
"gender": "MALE",
"berthOfDate": "2005-05-20",
"specialization": "Computer Science",
"theAcademicYear": 2,
"phone": "0785344074",
"email": "mohmadgh@example.com",
"location": "Irbid, Jordan",
"imageUrl": "https://example.com/images/profile.jpg",
"videoUrl": "https://example.com/videos/intro.mp4"
---------------------------------------------------
<h3>3- Get All User</h3>
GET : http://localhost:8080/api/users?page=0&size=10
---------------------------------------------------
<h3>4- Give me my</h3>
GET : http://localhost:8080/api/users/me
---------------------------------------------------
<h3>5- Update User Status </h3>
PATCH : http://localhost:8080/api/users/{id}/status

"status": "PENDING"
----------------------------------------------------
<h3>6- Delete User </h3>
DELETE : http://localhost:8080/api/users/{id}