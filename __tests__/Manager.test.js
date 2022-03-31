const Manager = require('../lib/Manager')

test('creates manager object', () => {
    const manager = new Manager('Lisa', 'lisa@email.com', 4, 1);

    expect(manager.name).toBe('Lisa');
    expect(manager.email).toBe('lisa@email.com');
    expect(manager.id).toEqual(4);
    expect(manager.officeNumber).toEqual(1);
});