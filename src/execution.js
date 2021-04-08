const shell = require('shelljs');
const _init = require('./init');

const rl = require('readline');

export function init() {
    var command = "git init";
    console.log(`Command Executed: ${command}`.red);
    shell.exec(`${command}`, (code, stdout, stderr) => {
        if (stderr) {
            console.log(`Error: ${stderr}`);
        }
    });
};

export function add_all() {
    var command = "git add .";
    console.log(`Command Executed: ${command}`.red);
    shell.exec(`${command}`, (code, stdout, stderr) => {
        if (stderr) {
            console.log(`Error: ${stderr}`);
        }
    });
};

export function add_specifics() {
    rl.question('List all the files you need to stage differentiated by space(w.r.t the .git parent directory):', (name) => {
        var command = `git add ${name}`;
        console.log(`Command Executed: ${command}`.red);
        shell.exec(`git add ${name}`, (code, stdout, stderr) => {
            if (stderr) {
                console.log(`Error: ${stderr}`);
            }
        });
        rl.close();
    });
};

export function commit() {

};

export function push_code() {

};
