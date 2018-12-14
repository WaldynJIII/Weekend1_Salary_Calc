$(document).ready(readyNow);
class Employee{
    constructor(firstNameIn, lastNameIn, idIn, titleIn, aSalaryIn){
    this.fname = firstNameIn
    this.lname = lastNameIn
    this.id = idIn
    this.title = titleIn
    this.asalary = aSalaryIn
}
}

function readyNow(){
    
    // append
    // Add an input field that allows users to add new pets from the index page.
    // 3 input fields with id
    $('h1').after('<input type="text" id="firstName" placeholder="First Name">');
    $('#firstName').after('<input type="text" id="lastName" placeholder="Last Name">');
    $('#lastName').after('<input type="number" id="empId" placeholder="Emloyee Id">');
    $('#empId').after('<input type="text" id="empTitle" placeholder="Emloyee Title">');
    $('#empTitle').after('<input type="number" id="aSalary" placeholder="Annual Salary">');
    
    
    $('#aSalary').after('<button id="addEmployee"> Add Employee </button>');
    $('#addEmployee').on('click', function () {
        let firstN = $('#firstName').val();
        let lastN = $('#lastName').val()
        let employeeId = $('#empId').val()
        let
        pets.push(new Pet(title, breed, year))
        $('table').append('<tr><td>' + title + '</td><td>' + breed + '</td><td>' + year + '</td></tr>')
    });
}