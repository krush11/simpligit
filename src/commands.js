const execute = require('./execution');

export function initiate_command(input) {
    if (input == 1)
        execute.init();
    else if (input == 2)
        execute.add_all();
    else if (input == 3)
        execute.add_specifics();
    else if (input == 4)
        execute.commit();
    else if (input == 5)
        execute.push_code();
    // else if (input == 6)
    else if (input == 7)
        process.exit(0);
};
