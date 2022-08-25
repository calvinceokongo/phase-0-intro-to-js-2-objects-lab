// Write your solution in this file!
let employee = {}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let allEmployee = {...employee}
    allEmployee[key] = value
    return allEmployee
}
updateEmployeeWithKeyAndValue(allEmployee)

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.streetAddress = "12 Broadway"
    return employee
}
destructivelyUpdateEmployeeWithKeyAndValue(employee)

function deleteFromEmployeeByKey(employee, key, value) {
    const deleteEmployee = {...employee};
    delete deleteEmployee.name;
    return deleteEmployee;
}
deleteFromEmployeeByKey(deleteEmployee)

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee.name;
    return employee;
} 
destructivelyDeleteFromEmployeeByKey(employee)

