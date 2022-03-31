const Intern = require('../lib/Intern')

test('creates intern object', () => {
    const intern = new Intern('Claire', 'claire@email.com', 2, 'ucdavis');

    expect(intern.name).toBe('Claire');
    expect(intern.email).toBe('claire@email.com');
    expect(intern.id).toEqual(2);
    expect(intern.school).toBe('ucdavis');
});