const colors = require('colors');
import readline from 'readline-promise';
const Commands = require('./commands');
const process = require('process');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

export function intro() {

    console.log(`
            ___ _            _ _  ___ _ _   
           / __(_)_ __  _ __| (_)/ __(_) |_ 
           \\__ \\ | '  \\| '_ \\ | | (_ | |  _|
           |___/_|_|_|_| .__/_|_|\\___|_|\\__|
                       |_|                  
`.cyan);

    console.log("This is SimpliGit!! A guided CLI for git.\nA tool to aid new developers to use git till they are familiar with git.");
};

export function commands_list() {
    handle_user_input();
    rl.questionAsync('Select an option: ').then(answer => {
        rl.close();
        Commands.initiate_command(answer);
    });
};

const main_menu = [
    "git init                           - Initialize empty git repository",
    "git remote add origin <url>        - Add origin url",
    "git add .                          - Stage all changes",
    "git add <file>                     - Stage selected changes",
    "git commit -m <commit message>     - Commit changes",
    "git push origin <branch>           - Push changes to a branch",
    "git pusll origin <branch>          - Pull code from a branch",
    "Exit                               - Exit CLI"
];

const handle_user_input = () => {
    console.log(`
__________________________________________________________________________

                            Commands Supported                            
__________________________________________________________________________
`.cyan);

    main_menu.forEach((feature, index) => console.log(`  ${index + 1}. ${feature}`.green));
}
