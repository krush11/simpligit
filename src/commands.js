const execute = require('./execution');
const process = require('process');
export function initiate_command(input) {
    if (input == 1)
        execute.init();
    else if (input == 2)
        execute.add_origin();
    else if (input == 3)
        execute.add_all();
    else if (input == 4)
        execute.add_specifics();
    else if (input == 5)
        execute.commit();
    else if (input == 6)
        execute.push_code();
    else if (input == 7)
        execute.pull_code();
    else if (input == 10)
        process.exit(0);

    process.exit(0);
};
