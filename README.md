
# Person API
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

![Node.js](https://img.shields.io/badge/Node.js-339933.svg)

![MongoDB](https://img.shields.io/badge/MongoDB-47A248.svg)

![Render](https://img.shields.io/badge/Hosted_on-Render-09B5A5.svg)



Welcome to the Person API that allows you to **CREATE**, **READ**, **UPDATE** and **DELETE** a person from the database.
This repo was created in line with the HNGX Internships tasks.


## Table Of Contents
- UML and ER Diagramns for resources.
- Standard formats for requests and response.
- Sample usage of the API.
- Security Measures Taken.
- Local setup and deployment.
## UML and ER Diagrams
| Person   | 
| -------- | 
| ID -Pk   |
| Name - String |
|_________________
| Create()  |
| Read() |
| Update() |
| Delete()  |
 

## Standard formats for requests and response.
For additional information regarding the standardized formats for requests and responses, please refer to the documentation available at this
[link](https://documenter.getpostman.com/view/24111452/2s9YC2yYe3)

## Sample usage of the API.
## Getting Started
Base URL: `https://hng-test-one.onrender.com`

If you are using a local server, the base url will be `http://localhost:2323`.

## API Endpoints
| Endpoint | Functionality | Description | HTTP method |
| --- | --- | --- | --- |
| `/api/` | Create | Create a new person | `POST` |
| `/api/:id` | Read | Get a single person | `GET` |
| `/api/:id` | Update | Update a single person | `PUT` |
| `/api/:id` | Delete | Delete a single person | `DELETE` |

### Create a new person
- Endpoint: `/api`
- HTTP method: `POST`

```json
{
    "name":"Jack Essien",
}
```
- Example Response(success):
```json
{
    "status": "success",
    "data": {
        "response": {
            "id": "6500ce2759912b3da80af70b",
            "name": "Jack Essien"
        }
    }
}
```
- Example Response(error): - This can occur if an empty or null string is passed 
Returns the errors as an array
```json
{
    "errors": [
        {
            "type": "field",
            "value": "",
            "msg": "Email must be a string and must not be empty",
            "path": "name",
            "location": "body"
        }
    ]
}
```


## Retrieve a User by ID
- Endpoint: `/api/:id`
- HTTP method: `GET`
- Description: Get a single person by id
- Example Response(success):
```json
{
    "status": "success",
    "data": {
        "response": {
            "id": "6500cea259912b3da80af70f",
            "name": "Jack Essien"
        }
    }
}
```
- Example Response(error): -Incase the person is not found
```json
{
    "status": "failed",
    "message": "person not found"
}
```

## Update a User by ID
- Endpoint: `/api/:id`
- HTTP method: `PUT`
- Description: Update a single person by id
- Path Parameter: `id` (type.objectID, required)
- Request body: `name` (string, required)
- Request body example:
```json
{
    "name":"Silas Manner"
}
```
- Example Response(success):
```json
{
    "status": "success",
    "data": {
        "response": {
            "id": "6500cea259912b3da80af70f",
            "name": "Silas Manner"
        }
    }
}
```
- Example Response(error): -Incase the person is not found
```json
{
    "status": "failed",
    "message": "person not found"
}
```
```
## Delete a User by ID
- Endpoint: `/api/:id`
- HTTP method: `DELETE`
- Description: Delete a single person by id
- Path Parameter: `id` (types.objectID, required)
```
- Example Response(error): -Incase the person is not found
```json
{
    "status": "failed",
    "message": "person not found"
}
```
- For additional information regarding the sample usage of this API, please refer to the documentation available at this [link](https://documenter.getpostman.com/view/24111452/2s9YC2yYe3)

##  Security Measures Taken
### Preventing NoSQL Injection?
In the development of the Person API, I prioritize security as a fundamental aspect of my design and implementation. I understand the potential threats that can target web applications, and one of the critical security measures I've implemented is the use of express-mongo-sanitize. This library plays a pivotal role in safeguarding the API against NoSQL injection attacks.

### Why is NoSQL Injection a Concern?

NoSQL injection is a prevalent security issue in applications that interact with NoSQL databases like MongoDB. Attackers can inject malicious code into database queries, potentially leading to unauthorized access, data breaches, and other malicious activities. It's crucial to protect our API against these threats.

```
const mongoSanitize = require('express-mongo-sanitize');

// Data sanitization against NOSQL query Injection
app.use(mongoSanitize());

```

### Guarding Against XSS Attacks with xss-clean

XSS attacks pose a significant threat by allowing attackers to inject malicious scripts into web applications, which can then affect users' browsers. To protect against such attacks, I've integrated the xss-clean package:


```
const xss = require('xss-clean');

// Data sanitization against XSS
app.use(xss());


```
## Local setup and deployment
## Project Setup
You can set up this repository by following this manual

1. Clone the repository
    ```{shell}
   git clone https://github.com/Bootspace/HNG.git
   ```
2. Navigate to the project directory
    ```{shell}
   cd HNG
   ```
3. Ensure the npm packages are installed locally
    ```{shell}
   npm install
   ```
4. Ensure you have mongo running on your system to run mongo locally, or you can as well connect to a cluster on mongoAtlas cloud.
5. Create a .env file containing the following environmental variables.
```{code}
DATABASE_URL = yourmongoconnectionstringggoeshere
```
6. Finally to run the server. In production mode:

```{shell}
    "start": "NODE_ENV=production nodemon server.js"
```
In development mode:
```{shell}
    "dev": "nodemon server.js"
```
