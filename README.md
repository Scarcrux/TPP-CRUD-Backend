## TPP-CRUD-Backend ##

API Deployment: 

- https://tpp-crud-backend.herokuapp.com/api/campuses
- https://tpp-crud-backend.herokuapp.com/api/students

## Backend (Sequelize)

- [ ] Write a `campuses` model with the following information:
  - [ ] name - not empty or null
  - [ ] imageUrl - with a default value
  - [ ] address - not empty or null
  - [ ] description - extremely large text

- [ ] Write a `students` model with the following information:
  - [ ] firstName - not empty or null
  - [ ] lastName - not empty or null
  - [ ] email - not empty or null; must be a valid email
  - [ ] imageUrl - with a default value
  - [ ] gpa - decimal between 0.0 and 4.0

- [ ] Students may be associated with at most one campus. Likewise, campuses may be associated with many students


## All Students and Campuses

- [ ] Write a route to serve up all students
- [ ] Write a route to serve up all campuses

## Single Student and Single Campus (14/57)

- [ ] Write a route to serve up a single campus (based on its id), _including that campuses' students_
- [ ] Write a route to serve up a single student (based on their id), _including that student's campus_

## Adding a Campus and Adding a Student (12/57)

- [ ] Write a route to add a new campus
- [ ] Write a route to add a new student


## Removing a Campus and Removing a Student (10/57)

- [ ] Write a route to remove a campus (based on its id)
- [ ] Write a route to remove a student (based on their id)
