class Employee {
    constructor(firstName, lastName, yearsWorked) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearsWorked = yearsWorked;
    }
}

const employees = [
    new Employee("John", "Doe", 5),
    new Employee("Jane", "Smith", 3),
    new Employee("Alice", "Johnson", 8)
];

Employee.prototype.employeeDetails = function() {
    return `${this.firstName} ${this.lastName} has worked at the company for ${this.yearsWorked} years.`;
};

employees.forEach(employee => {
    console.log(employee.employeeDetails());
});
