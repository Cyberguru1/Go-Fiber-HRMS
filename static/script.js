$(document).ready(function () {
    // Function to fetch and display the list of employees
    function getEmployees() {
        $.ajax({
            url: '/employee', // Replace with your server endpoint
            type: 'GET',
            success: function (data) {
                displayEmployees(data);
            },
            error: function (error) {
                alert('Error:', error);
            }
        });
    }

    // Function to display the list of employees
    function displayEmployees(employees) {
        $('#list-container').empty();
        employees.forEach(function (employee) {
        $("#list-container").append(
            `<li>TITLE:  ${employee.name} </li>
            <ul>
                <li> Id: ${employee.id} </li>
                <li> Salary: $ ${employee.salary} </li>
                <li> Age: ${employee.age} </li>
            </ul>
            <p></p`);
        });
    }

    // Initial fetch of employees
    getEmployees();

    // Function to create a new employee

    $('#employeeForm').submit(function (event) {
        event.preventDefault();
        var name = $('#name').val();
        var salary = $('#salary').val();
        var age = $('#age').val();

        $.ajax({
            url: '/employee',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ name: name, salary: salary, age: age }),
            success: function () {
                alert("Employee created successfully");
                getEmployees();
                $('#name').val('');
                $('#salary').val('');
                $('#age').val('');
            },
            error: function (error) {
                alert('Error:', error);
            }
        });
    });

    // function to update employees

    $('#updateForm').submit(function (event) {
        event.preventDefault();
        var name = $('#uname').val();
        var salary = $('#usalary').val();
        var age = $('#uage').val();
        var id = $('#uid').val();

        $.ajax({
            url: `/employee/${id}`,
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({ name: name, salary: salary, age: age, id: id }),
            success: function () {
                alert("Employee updated successfully");
                getEmployees();
                $('#uname').val('');
                $('#usalary').val('');
                $('#uage').val('');
                $('#uid').val('');
            },
            error: function (error) {
                alert('Error:', error);
            }
        });
    });

    // function to delete employee

    $('#deleteButton').click(function (event) {
        event.preventDefault();
        var id = $('#deleteEmployeeId').val();
         $.ajax({
            url: `/employee/${id}`,
            type: 'DELETE',
            contentType: 'text/html',
            success: function () {
                $('#deleteEmployeeId').val('')
                alert("Employee deleted successfully");
                getEmployees();

            },
            error: function (error) {
                alert('Error:', error);
            }
        });
    });
});
