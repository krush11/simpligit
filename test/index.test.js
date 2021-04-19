const exec = require('../src/execution');
const shell = require('shelljs');
beforeEach(() => {
shell.exec('cd ~ && mkdir temp_folder && cd temp_folder');
});

test('Repository initialization', () => {
    expect(exec.init()).toEqual(expect.stringMatching(/^[a-z0-9]{0,80}$/));
});

afterEach(() => {
    shell.exec(`cd ~ && rm -rf temp_folder`);
})