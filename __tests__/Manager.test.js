const Manager = require('../lib/Manager')

test('creates manager office number', () => {
    const officeNumber = 1;
    const manager = new Manager('Lisa', 'lisa@email.com', 4, officeNumber);

    expect(manager.officeNumber).toBe(officeNumber);
});

// get office number with getOfficeNumber()
test('creates manager office number', () => {
    const officeNumber = 1;
    const manager = new Manager('Lisa', 'lisa@email.com', 4, officeNumber);

    expect(manager.getofficeNumber()).toBe(officeNumber);
});

// get role with getRole()
test('get manager role', () => {
    const manager = new Manager('Lisa', 'lisa@email.com', 4, 1);

    expect(manager.getRole()).toBe("Manager");
});