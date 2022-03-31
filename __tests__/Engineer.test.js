const Engineer = require('../lib/Engineer')

test('creates engineer github', () => {
    const github = 'gregwilliams';
    const engineer = new Engineer('Greg', 'greg@email.com', 2, github);

    expect(engineer.github).toBe(github);
});

// get github username with getGithub()
test('get github username', () => {
    const github = 'gregwilliams';
    const engineer = new Engineer('Greg', 'greg@email.com', 2, github);

    expect(engineer.getGithub()).toBe(github);
});


// get role with getRole()
test('get engineer role', () => {
    const engineer = new Engineer('Greg', 'greg@email.com', 2, 'gregwilliams');

    expect(engineer.getRole()).toBe("Engineer");
});