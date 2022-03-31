const Engineer = require('../lib/Engineer')

test('creates engineer object', () => {
    const engineer = new Engineer('Greg', 'greg@email.com', 2, 'gregwilliams');

    expect(engineer.name).toBe('Greg');
    expect(engineer.email).toBe('greg@email.com');
    expect(engineer.id).toEqual(2);
    expect(engineer.github).toBe('gregwilliams');
});

// get role using getRole()
test('get employee id', () => {
  const employee = new Employee('Dave', 'dave@email.com', 1);

  expect(employee.getRole()).toBe("Employee");
})