
var nodeConsole = require('console');
var myConsole = new nodeConsole.Console(process.stdout, process.stderr);
myConsole.log('Hello World!');

var quill = require('quill');
var editor = new quill('#editor',{
	theme:'snow',
	modules: {
		// toolbar : {container: '#toolbar'},
		// 'image-tooltip':true,
		// keyboard: {
  //     bindings: bindings
  //   }
	},
	placeholder: 'Compose an epic...'
	
});


editor.keyboard.addBinding({
  key: 'B'
  // shortKey: true
}, function(range, context) {
  myConsole.log("fkajlsdfadsljfajlsd");
  myConsole.log(range);
  myConsole.log(context);
  this.editor.formatText(range, 'bold', true);
});


// var fileSystem = require('fs');
// var remote = require('electron').remote;
// var dialog = remote.require('electron').dialog;

// var loadedFileSystem;

// function writeToFile(editor, fileName) {
// 	var html = editor.getHTML();
// 	fileSystem.writeFile(fileName,html,function err() {
// 		if (err) {
// 			return console.log(err);
// 		}
// 	});
// }

// function readFromFile(editor, fileName) {
// 	fileSystem.readFile(fileName,"utf-8",function(err,data) {
// 		if (err) {
// 			console.log(err);
// 		}
// 		editor.setHTML(data);
// 	});
// }