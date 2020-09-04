// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const axios = require('axios')
const {remote,app,BrowserWindow} = require('electron')

formSub.addEventListener('click', function() { 

    var user = document.getElementById('user');
    var password = document.getElementById('pass')

    var bodyFormData = new FormData();

    bodyFormData.append('username', user.value);
    bodyFormData.append('password', pass.value);

    console.log(user.value)
    console.log(pass.value)

    axios({
        method: 'post',
        url: 'http://localhost:8000/api/login',
        data: bodyFormData,
        // dataType: "json",
        headers: {'Content-Type': 'multipart/form-data' }
        })

        .then(function (response) {
      
  // Create the browser window.

  const mainWindow = new BrowserWindow({
    width:1920,
    height:1080,
    // frame:false,
    resizable:false,

    // transparent: true,

    webPreferences: {
  
        nodeIntegration: true
    
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
  mainWindow.show();


// This method will be called when Electron has finished
// initialization and is ready to create browser windows
        })
        .catch(function (error) {

            console.log(error);
        });

});