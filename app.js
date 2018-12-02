var quill = require('quill');
var editor = new quill('#editor',{
	modules: {
		// toolbar : {container: '#toolbar'},
		// 'image-tooltip':true,
	},
	placeholder: 'Compose an epic...',
	theme:'snow'
});


var fileSystem = require('fs');
var remote = require('electron').remote;
var dialog = remote.require('electron').dialog;

var loadedFileSystem;

function writeToFile(editor, fileName) {
	var html = editor.getHTML();
	fileSystem.writeFile(fileName,html,function err() {
		if (err) {
			return console.log(err);
		}
	});
}

function readFromFile(editor, fileName) {
	fileSystem.readFile(fileName,"utf-8",function(err,data) {
		if (err) {
			console.log(err);
		}
		editor.setHTML(data);
	});
}