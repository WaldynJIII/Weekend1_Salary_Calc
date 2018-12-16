$(document).ready(readyNow);
class Employee {
    constructor(firstNameIn, lastNameIn, idIn, titleIn, aSalaryIn) {
        this.fname = firstNameIn
        this.lname = lastNameIn
        this.id = idIn
        this.title = titleIn
        this.asalary = aSalaryIn
    }
}
const employees = []
let finalSalary = 0

function removePar() {
    $('li').remove();
    console.log('delete')
}

function readyNow() {
    $('.deleteEmp').on('click', function removePar(){
        $(this).siblings().remove();
    console.log('delete')
}
    );
    
    

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
        $('ul').append('<li>' + firstN + " " + lastN + " " + employeeId + " " + employeeTitle + " " + annualSalary + '</li>' + '<button class="deleteEmp"> Delete </button>')
        $('.deleteEmp').on('click', function removePar() {
            $(this).siblings().remove();
            $(this).remove()
            let lessSal = 
            console.log('delete')
        }
        );
        aCalc();
        yeetSalary();
    });
    
}


function aCalc() {
    for (i = 0; i < employees.length; i++) {
        let monthlySalary = employees[i].asalary / 12
        finalSalary += monthlySalary
        console.log(finalSalary)
    }
    $('h2').remove()
    $('ul').after('<h2 id="yeetedS">' + finalSalary + '</h2>')
}




function yeetSalary() {
    if (finalSalary > 20000) {
        $('h2').css('color','red');// getter & setter
    }
}
