const {app, BrowserWindow} = require("electron");


const createWindow = () =>{
    const window = new BrowserWindow({
        width: 1028,
        height: 1009,
        fullscreen:true

    });

   window.loadFile("index.html");
}

app.whenReady().then(() =>{
    createWindow();
})