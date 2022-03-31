const Employee = require('../lib/Employee')

test('creates employee object', () => {
const employee = new Employee('Dave', 'dave@email.com', 1);

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
});

// get name using getName()
test('get employee name', () => {
  const name = 'Dave';
  const employee = new Employee(name);

  expect(employee.getName()).toBe(name);
});


// get name using getEmail()
test('get employee email', ()=> {
  const email = 'dave@email.com';
  const employee = new Employee('Dave', email);

  expect(employee.getEmail()).toBe(email);
});

// get name with getId()
test('get employee id', () => {
  const id = '1'
  const employee = new Employee('Dave', 'dave@email.com', id);

  expect(employee.getId()).toBe(id);
});

// get role with getRole()
test('get employee role', () => {
  const employee = new Employee('Dave', 'dave@email.com', 1);

  expect(employee.getRole()).toBe('Employee');
})