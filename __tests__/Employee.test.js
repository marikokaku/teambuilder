const Employee = require('../lib/Employee')

test('creates employee object', () => {
const employee = new Employee('Dave', 'dave@email.com', 1);

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
});

// get name using getName()
test('get employee name', () => {
  const employee = new Employee('Dave', 'dave@email.com', 1);

  expect(employee.getName()).toEqual(expect.any(String));
});


// get name using getEmail()
test('get employee email', ()=> {
  const employee = new Employee('Dave', 'dave@email.com', 1);

  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})

// get name using getId()
test('get employee id', () => {
  const employee = new Employee('Dave', 'dave@email.com', 1);

  expect(employee.getId()).toEqual(expect.any(Number));
})

// get role using getRole()
test('get employee role', () => {
  const employee = new Employee('Dave', 'dave@email.com', 1);

  expect(employee.getRole()).toBe("Employee");
})