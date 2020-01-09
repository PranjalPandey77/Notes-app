//console.log('notes.js file executing here.');
const fs = require("fs");
const chalk = require("chalk");



const addNote = function(title, body) {
    const notes = loadNotes();
    const dupNotes = notes.filter(function(note) {
        return note.title === title;
    });

    debugger

    if (dupNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        //console.log(notes);
        saveNotes(notes);
        console.log("New Note Added !!!");
    } else {
        console.log("Note title already taken !!!");
    }
}



const saveNotes = function(notes) {
    const data = JSON.stringify(notes);
    fs.writeFileSync("Notes.json",data);
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync("Notes.json");
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch(e) {
        return [];
    }
}

const readNotes = function(title) {
    const data = loadNotes();
    const ifFound = data.find((tuple) => title === tuple.title);
    if(ifFound)
    {
        console.log(chalk.bold.inverse.red(ifFound.title));
        console.log(chalk.bold.inverse.green(ifFound.body));   
    }
    else
    {
        console.log(chalk.bold.inverse.red("No Such Note Found"));
    }
}

const removeNote = function(title) {
    const notes = loadNotes();
    flag = false;
    const uniqueNotes = notes.filter(function(note) {
        if(note.title === title) {
            flag = true;
            return false;
        }
        else {
            return true;
        }
    });
    if(flag === true) {
        //console.log("Note having title " + title + " Removed");
        saveNotes(uniqueNotes);
        console.log(chalk.bold.bgGreen("Note Removed"));
    }
    else {
        console.log(chalk.bold.bgRed("No Note Found"));
    }
}

const listNotes = function() {
    const data = loadNotes();
    // data.forEach(tt => {
    //     console.log(tt);
    // });
    return data;
}

module.exports = {
    readNotes: readNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}