const _init = require('./init');

export function cli(args) {
    _init.intro();
    _init.commands_list();
}