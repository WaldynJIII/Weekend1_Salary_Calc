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
const employees = []
let finalSalary = 0
function readyNow(){
    appendDom()
   
    $('h1').after('<input type="text" id="firstName" placeholder="First Name">');
    $('#firstName').after('<input type="text" id="lastName" placeholder="Last Name">');
    $('#lastName').after('<input type="number" id="empId" placeholder="Emloyee Id">');
    $('#empId').after('<input type="text" id="empTitle" placeholder="Emloyee Title">');
    $('#empTitle').after('<input type="number" id="aSalary" placeholder="Annual Salary">');
    
    
    $('#aSalary').after('<button id="addEmployee"> Add Employee </button>');
    $('#addEmployee').on('click', function newEmp() {
        let firstN = $('#firstName').val();
        let lastN = $('#lastName').val()
        let employeeId = $('#empId').val()
        let employeeTitle = $('#empTitle').val()
        let annualSalary = $('#aSalary').val()
        employees.push(new Employee(firstN, lastN, employeeId, employeeTitle, annualSalary));
        $('table').append('<tr><td>' + firstN + '</td><td>' + lastN + '</td><td>' + employeeId + '</td><td>' + employeeTitle + '</td><td>' + annualSalary + '</td></tr>')
       
    });

}
function appendDom() {
    let $header = $('<h1>Challenge 170</h1>');
    $('.container').append($header);

    let $table = $('<table></table>');
    $table.append('<thead><tr><th>Name</th><th>Type</th><th>Age</th></thead>');

    let $tbody = $('<tbody id="tableBody"></tbody>');
    $table.append($tbody);

    $('.container').append($table);
}
function aCalc(){
    for (i = 0; i < employees.length; i++){
let monthlySalary = employees[i].asalary / 12
finalSalary += monthlySalary
console.log(finalSalary)

    }
}

