//To require the nececssary electron module
const electron = require('electron');

const {app, BrowserWindow, Menu} = electron;

let mainWindow

function createWindow() {
	//Create new window
	mainWindow = new BrowserWindow({width:600,height:600});

	//Load HTML into window
	mainWindow.loadFile('mainWindow.html');


   // Build menu from template
   const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
   //Insert Menu
   Menu.setApplicationMenu(mainMenu);    
}


//Listen for the app to be ready
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready',createWindow);


//Create menu template
const mainMenuTemplate = [
 {
   label:'File',	
   submenu:[
   {
   	label:'Character'
   },
   {
   	label:'Dialog'
   }
   ]
 }
];

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.