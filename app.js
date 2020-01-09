// const fs = require('fs');
// const add = require("./utils.js");
// //fs.appendFileSync('notes.txt','\fI live in varanasi');
// const sum = add(10,12);
// console.log(sum);
const validator = require("validator");
const chalk = require("chalk");
const notes = require('./notes.js');
const yargs = require("yargs");

//const notees = note();

// console.log(notees);
// console.log(chalk.green.inverse.bold.bgRed("Pranjal Pandey"));
// console.log(chalk.green.bold.inverse("Pranjal Pandey"));
// console.log(chalk.inverse.green.bold("Pranjal Pandey"));
// console.log(validator.isEmail("pranjalpandey77@gmail.com"));
//console.log(process.argv);
//yargs.version('1.1.1');
yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        //console.log("Adding a new note", argv);
        // console.log("Title: " + argv.title + "Hello");
        // console.log("Body: " + argv.body + "world");
        notes.addNote(argv.title, argv.body);
    }
});


yargs.command({
    command: "remove",
    describe: "removing a note from notes",
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        //console.log("removing a given note from notes file.");
        notes.removeNote(argv.title);
    }
});



yargs.command({
    command: 'list',
    describe: 'Listing all notes.',
    handler: function () {
        //console.log("All notes Listed.");
        const mynotes = notes.listNotes();
        console.log(chalk.green.inverse.bold("My Notes"));
        mynotes.forEach(element => {
            console.log(element);
        });
    }
});


yargs.command({
    command: "read",
    describe: "reading a note",
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        //console.log("Reading a note.");
        notes.readNotes(argv.title);
    }
});

yargs.parse();
//console.log("Hello app.js");
//console.log(yargs.argv);
//console.log(yargs.argv);