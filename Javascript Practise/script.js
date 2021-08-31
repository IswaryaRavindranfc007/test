var date=new Date();
document.body.innerHTML = "<h1>Date is " +date+ "</h1>";

class Employee
{
  constructor(name, age, state,country)
  {
    this.name = name;
    this.age = age;
    this.state = state;
    this.country = country;
  }
}


var emp1 = new Employee("Iswarya",15,"Surrey", "UK");
var emp2 = new Employee("Ram",15,"Surrey", "UK");
var emp3 = new Employee("Sarvesh",15,"Hants", "UK");
var emp4 = new Employee("Arjun",15,"Hants", "UK");
var emp5 = new Employee("Sita",15,"TN","India");
var emp6 = new Employee("Priya",15,"TN","India");

var employees = [];

employees.push(emp1,emp2,emp3,emp4,emp5,emp6);
// employees.push[emp2];
// employees.push[emp3];
// employees.push[emp4];
// employees.push[emp5];
// employees.push[emp6];
console.log(emp1);

console.log(employees);

