const shell = require('shelljs');
const readline = require('readline-promise').default;
const process = require('process');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

function init() {
    var command = "git init";
    console.log(`Command Executed: ${command}\n`.brightBlue);
    shell.exec(`${command}`, (code, stdout, stderr) => {
        if (stderr) {
            console.log(`Error: ${stderr}`);
        }
        return stdout;
    });
};

function add_origin() {
    rl.questionAsync('Enter remote url: ').then(name => {
        var command = `git remote add origin ${name}`;
        console.log(`Command Executed: ${command}\n`.brightBlue);
        shell.exec(`${command}`, (code, stdout, stderr) => {
            if (stderr) {
                console.log(`Error: ${stderr}`);
            }
            return stdout;
        });
    });
};

function add_all() {
    var command = "git add .";
    console.log(`Command Executed: ${command}\n`.brightBlue);
    shell.exec(`${command}`, (code, stdout, stderr) => {
        if (stderr) {
            console.log(`Error: ${stderr}`);
        }
        return stdout;
    });
};

function add_specifics() {
    rl.questionAsync('List all the files w.r.t to package: ').then(name => {
        var command = `git add ${name}`;
        console.log(`Command Executed: ${command}\n`.brightBlue);
        shell.exec(`${command}`, (code, stdout, stderr) => {
            if (stderr) {
                console.log(`Error: ${stderr}`);
            }
            return stdout;
        });
    });
};

function commit() {
    rl.questionAsync('Enter commit message: ').then(name => {
        var command = `git commit -m ${name}`;
        console.log(`Command Executed: ${command}\n`.brightBlue);
        shell.exec(`${command}`, (code, stdout, stderr) => {
            if (stderr) {
                console.log(`Error: ${stderr}`);
            }
            return stdout;
        });
    });
};

function push_code() {
    rl.questionAsync('Enter remote branch: ').then(name => {
        var command = `git push origin ${name}`;
        console.log(`Command Executed: ${command}\n`.brightBlue);
        shell.exec(`${command}`, (code, stdout, stderr) => {
            if (stderr) {
                console.log(`Error: ${stderr}`);
            }
            return stdout;
        });
    });
};

function pull_code() {
    rl.question('Enter remote branch', (name) => {
        var command = `git pull origin ${name}`;
        console.log(`Command Executed: ${command}\n`.brightBlue);
        shell.exec(`${command}`, (code, stdout, stderr) => {
            if (stderr) {
                console.log(`Error: ${stderr}`);
            }
            return stdout;
        });
    });
};

function status() {
    var command = `git status`;
    console.log(`Command Executed: ${command}\n`.brightBlue);
    shell.exec(`${command}`, (code, stdout, stderr) => {
        if (stderr) {
            console.log(`Error: ${stderr}`);
        }
        return stdout;
    });
};

module.exports = {
    add_all,
    add_origin,
    add_specifics,
    commit,
    init,
    pull_code,
    push_code,
    status,
};
