const colors = require('colors');
const readline = require('readline');
const Commands = require('./commands');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
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

export async function commands_list() {
    handle_user_input();
    await rl.question("\nSelect an option: ", (input) => {
        rl.close();
        Commands.initiate_command(input);
    });
};

const main_menu = [
    "git init                           - Initialize empty git repository",
    "git add .                          - Stage all changes",
    "git add <file>                     - Stage selected changes",
    "git commit -m <commit message>     - Commit changes",
    "git push origin <branch>           - Push changes to a branch",
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