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

        console.log("Configuring cabal...");

        exec("cabal configure --enable-tests", function(err, stdout, stderr){
            if (err !== null) {
                console.log("Error: " + err);
            }
            done();
        });
    });
};

function capitaliseFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}