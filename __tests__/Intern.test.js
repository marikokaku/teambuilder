const Intern = require('../lib/Intern')


test('creates intern school', () => {
    const school = 'ucdavis'
    const intern = new Intern('Claire', 'claire@email.com', 2, school);

    expect(intern.school).toBe(school);
});

// get intern school with getSchool()
test('get intern school', () => {
    const school = 'ucdavis'
    const intern = new Intern('Claire', 'claire@email.com', 2, school);

    expect(intern.getSchool()).toBe(school);
});

// get role with getRole()
test('get intern role', () => {
    const intern = new Intern('Claire', 'claire@email.com', 2, 'ucdavis');;

    expect(intern.getRole()).toBe("Intern");
});