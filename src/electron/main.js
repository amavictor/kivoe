import { app, BrowserWindow } from "electron";
import path from "path";
import SuperBrowserWindowKit, {
    AutoresizingMask,
    GlassMaterialVariant,
    SystemColor,
} from "super-browser-window-kit";
import { LICENSE_CODE } from "../../constants.js";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.whenReady().then(() => {
    SuperBrowserWindowKit.setLicense(LICENSE_CODE);


    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        frame: false,
        transparent: true,
        titleBarStyle: "hiddenInset",
        trafficLightPosition: { x: 20, y: 20 },
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            webviewTag: true,
        },
        show: false,
    });

    if (process.env.NODE_ENV === "development") {
        mainWindow.loadURL("http://localhost:5123");
    } else {
        mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
    }
    SuperBrowserWindowKit.enableWindowCornerCustomization();
    SuperBrowserWindowKit.setWindowCornerRadius(
        mainWindow.getNativeWindowHandle(),
        26
    );

    mainWindow.webContents.once("did-finish-load", () => {
        try {
            if (!SuperBrowserWindowKit) {
                console.error("SuperBrowserWindowKit is not loaded");
                return;
            }

            const glassId = SuperBrowserWindowKit.addGlassEffectView(mainWindow.getNativeWindowHandle(), {
                cornerRadius: 18,
            });
            SuperBrowserWindowKit.setWindowBackgroundColor(mainWindow.getNativeWindowHandle(), SystemColor.WindowBackground);
            const [_, winHeight] = mainWindow.getSize();
            SuperBrowserWindowKit.setViewFrame(mainWindow.getNativeWindowHandle(), glassId, {
                width: 207,
                x: 10,
                y: 8,
                height: winHeight - 18,
            });
            SuperBrowserWindowKit.setGlassVariant(mainWindow.getNativeWindowHandle(), glassId, GlassMaterialVariant.sidebar);
            SuperBrowserWindowKit.setViewAutoresizingMask(
                mainWindow.getNativeWindowHandle(),
                glassId,
                AutoresizingMask.FlexibleHeight
            );

            mainWindow.show();
        } catch (err) {
            console.error("Glass effect setup failed:", err);
        }
    });
});

app.on("window-all-closed", () => {
    app.quit();
});
