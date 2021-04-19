const _init = require('./init');
const execution = require('./execution');
const pjson = require('../package.json');
const process = require('process');

function help() {
    console.log(`
SimpliGit

Options:
    --version  Show version number                 [boolean]
    --help     Show help                           [boolean]
    `);
    process.exit(0);
}

function version() {
    console.log(`SimpliGit v${pjson.version}`);
    process.exit(0);
}

export function cli(args) {
    if (args.length == 0) {
        _init.intro();
        _init.commands_list();
    }
    else if (args.length == 1) {
        if (args[0] == 'help' || args[0] == '-h' || args[0] == '--help')
            help();
        else if (args[0] == '--version' || args[0] == '-v')
            version();
        else if (args[0] == 'init' || args[0] == '-i')
            execution.init();
        else if (args[0] == 'add_origin' || args[0] == '-ao')
            execution.add_origin();
        else if (args[0] == 'add_all' || args[0] == '-aa')
            execution.add_all();
        else if (args[0] == 'add_specific' || args[0] == '-as')
            execution.add_specifics();
        else if (args[0] == 'commit' || args[0] == '-c')
            execution.commit();
        else if (args[0] == 'push_code' || args[0] == '-ps')
            execution.push_code();
        else if (args[0] == 'pull_code' || args[0] == '-pl')
            execution.pull_code();
        else if (args[0] == 'status' || args[0] == '-s')
            execution.status();
    }
};
