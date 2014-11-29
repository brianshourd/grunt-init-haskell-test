'use strict';

var exec = require("child_process").exec;

// Basic template description.
exports.description = 'Create a haskell unit testable library';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = 'OK';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

    init.process({}, [
        // Prompt for these values.
        init.prompt('name')
    ], function(err, props) {
        props.keywords = [];

        props.name = capitaliseFirstLetter(props.name);

        props.devDependencies = {
            'grunt-exec': "0.4"
        };

        // Files to copy (and process).
        var files = init.filesToCopy(props);

        // Actually copy (and process) files.
        init.copyAndProcess(files, props);

        // We've got to
        // 1. cabal sandbox init
        // 2. cabal install --only-dependencies --enable-tests
        // 3. cabal configure --enable-tests
        // And then we can run
        // 4. cabal build
        // 5. cabal test
        var commands = [
            "cabal sandbox init",
            "cabal install --only-dependencies --enable-tests",
            "cabal configure --enable-tests"];
        var finalCallback = function(err, stdout, stderr) {
            if (err !== null) {
                console.log("Error: " + err);
            }
            process.stderr.write(stderr);
            process.stdout.write(stdout);

            console.log("Project set up completed. Just FYI, `cabal build` will build it, `cabal test` will run tests, `cabal run` will run the executable, and `cabal repl` will enter ghci with loaded modules.");
            done();
        };
        executeAll(commands, finalCallback);
    });
};

function capitaliseFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function executeAll(commands, finalCallback) {
    var len = commands.length;
    var i = -1;
    var dumbObj = {
        callback: function(err, stdout, stderr) {
            i += 1;
            if (err !== null) {
                console.log("Error: " + err);
            }
            process.stderr.write(stderr);
            process.stdout.write(stdout);

            console.log("Running `" + commands[i] + "`");

            if (i < len) {
                exec(commands[i], dumbObj.callback);
            } else {
                finalCallback(err, stdout, stderr);
            }
        }
    };
    dumbObj.callback(null, '', '');
}

