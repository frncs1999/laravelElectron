module.exports = {
  prodwin: function() {
    

    let win
    const electron = require('electron')
    const BrowserWindow = electron.remote.BrowserWindow
    const path = require('path')
    const modalPath = path.join('file://', __dirname, 'prod.html')
    win = new BrowserWindow({
      webPreferences: {
        nodeIntegration: true
      },
      width: 1000, height: 900
    })
    win.on('close', function () { 
      win = null 
      window.show()
    })
    win.loadURL(modalPath)
    

    const { remote } = require('electron')
    var window = remote.getCurrentWindow()
    window.hide()

    win.webContents.openDevTools()
    win.show()

  }
}