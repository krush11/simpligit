const shell = require('shelljs');
import readline from 'readline-promise';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

export function init() {
    var command = "git init";
    console.log(`Command Executed: ${command}`.brightBlue);
    shell.exec(`${command}`, (code, stdout, stderr) => {
        if (code == 0)
            process.exit(0);
        else if (stderr) {
            console.log(`Error: ${stderr}`);
        }
    });
};

export function add_origin() {
    rl.questionAsync('Enter remote url: ').then(name => {
        var command = `git remote add origin ${name}`;
        console.log(`Command Executed: ${command}`.brightBlue);
        shell.exec(`${command}`, (code, stdout, stderr) => {
            if (code == 0)
                process.exit(0);
            else if (stderr) {
                console.log(`Error: ${stderr}`);
            }
        });
    });
};

export function add_all() {
    var command = "git add .";
    console.log(`Command Executed: ${command}`.brightBlue);
    shell.exec(`${command}`, (code, stdout, stderr) => {
        if (code == 0)
            process.exit(0);
        else if (stderr) {
            console.log(`Error: ${stderr}`);
        }
    });
};

export function add_specifics() {
    rl.questionAsync('List all the files w.r.t to package: ').then(name => {
        var command = `git add ${name}`;
        console.log(`Command Executed: ${command}`.brightBlue);
        shell.exec(`${command}`, (code, stdout, stderr) => {
            if (code == 0)
                process.exit(0);
            else if (stderr) {
                console.log(`Error: ${stderr}`);
            }
        });
    });
};

export function commit() {
    rl.questionAsync('Enter commit message: ').then(name => {
        var command = `git commit -m ${name}`;
        console.log(`Command Executed: ${command}`.brightBlue);
        shell.exec(`${command}`, (code, stdout, stderr) => {
            if (code == 0)
                process.exit(0);
            else if (stderr) {
                console.log(`Error: ${stderr}`);
            }
        });
    });
};

export function push_code() {
    rl.questionAsync('Enter remote branch: ').then(name => {
        var command = `git push origin ${name}`;
        console.log(`Command Executed: ${command}`.brightBlue);
        shell.exec(`${command}`, (code, stdout, stderr) => {
            if (code == 0)
                process.exit(0);
            else if (stderr) {
                console.log(`Error: ${stderr}`);
            }
        });
    });
};

export function pull_code() {
    rl.question('Enter remote branch', (name) => {
        var command = `git pull origin ${name}`;
        console.log(`Command Executed: ${command}`.brightBlue);
        shell.exec(`${command}`, (code, stdout, stderr) => {
            if (code == 0)
                process.exit(0);
            else if (stderr) {
                console.log(`Error: ${stderr}`);
            }
        });
    });
};

export function status() {
    var command = `git status`;
    console.log(`Command Executed: ${command}`.brightBlue);
    shell.exec(`${command}`, (code, stdout, stderr) => {
        if (code == 0)
            process.exit(0);
        else if (stderr) {
            console.log(`Error: ${stderr}`);
        }
    });
};

// ****************************************
// A SKELETON FUNCTION TO ADD MORE COMMANDS
// ****************************************
// export function function_name(params) {
//     rl.question('{question}', (name) => {
//         var command = `{command}`;
//         console.log(`Command Executed: ${command}`.brightBlue);
//         shell.exec(`${command}`, (code, stdout, stderr) => {
//             if (stderr) {
//                 console.log(`Error: ${stderr}`);
//             }
//         });
//     });
// }
