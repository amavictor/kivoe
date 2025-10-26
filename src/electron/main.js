

import { app, BrowserWindow } from "electron";
import path from "path";
import { isDev, getPreloadPath } from "./utils/index.js";

app.on("ready", () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: "Kivoe",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: getPreloadPath(),
        },
    });

    if (isDev()) {
        mainWindow.loadURL('http://localhost:5123');
    } else {
        mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'));
    }

});
