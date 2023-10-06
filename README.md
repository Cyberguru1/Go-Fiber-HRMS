# Fiber HRMS

Fiber HRMS (Human Resource Management System) is a simple RESTful API built with Go and MongoDB for managing employee records. This API allows you to perform basic CRUD (Create, Read, Update, Delete) operations on employee data.

## Pre-requisites

To run this application, you need to have Go and MongoDB installed on your system.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/fiber-hrms.git
   ```
2. Navigate to the project directory:

   ```bash
   cd fiber-hrms
   ```
3. Install the required dependencies using:

   ```bash
   go mod tidy
   ```
4. Start the server:

   ```bash
   go run main.go
   ```

   The server will start on port 3000 by default. You can change the port in the `main.go` file if needed.

## API Endpoints

The API provides the following endpoints for managing employee records:

### Get All Employees

- **GET** `/employee`

  Retrieve a list of all employees.

### Create a New Employee

- **POST** `/employee`

  Create a new employee record. Provide the employee data in the request body.
- Mock Up FrontEnd:

  ![](https://imgur.com/p9ZUWJB.png)

### Update an Employee

- **PUT** `/employee/:id`

  Update an existing employee record by ID. Provide the updated employee data in the request body.
- Mock Up FrontEnd:
- ![](https://imgur.com/PEfEAE5.png)

### Delete an Employee

- **DELETE** `/employee/:id`

  Delete an employee record by ID.
- Mock Up FrontEnd

  ![](https://imgur.com/LjsZaPZ.png)

## Employee Data Format

The API accepts and returns JSON data in the following format:

```json
{
  "id": "60f18ebf5c750e5e76f0e99b",
  "name": "John Doe",
  "salary": 50000,
  "age": 30
}
```

## Contributing

Feel free to contribute to this project by creating issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
