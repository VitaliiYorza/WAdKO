import { WindowApiConst } from "shared-lib/apis/window-api-consts";
import { AbstractService } from "./abstract-service";
import { BrowserWindow, app, dialog, nativeImage } from "electron";
import * as fs from "fs";

export class ImageSelectService extends AbstractService<string, string> {

    constructor(private _electronWindow: BrowserWindow) {
        super();
    }

    receptionChannel(): string {
        return WindowApiConst.IMG_SELECT_INPUT;
    }

    sendingChannel(): string {
        return WindowApiConst.IMG_SELECT_OUTPUT;
    }

    process(_input: string): string {
        let out: string = '';
        dialog.showOpenDialog(this._electronWindow, {
            buttonLabel:'Select image',
            defaultPath: app.getPath('desktop'),
            properties: ['openFile'],
        }).then(result => {
            out = nativeImage.createFromPath(result.filePaths[0]).toDataURL();
        }).catch(err => {
            console.log(err);
        })
        return out;
    }

    async processAsync(_input: string): Promise<string> {
        let out: string = '';
        await dialog.showOpenDialog(this._electronWindow, {
            buttonLabel:'Select image',
            defaultPath: app.getPath('desktop'),
            properties: ['openFile'],
        }).then(result => {
            out = nativeImage.createFromPath(result.filePaths[0]).toDataURL();
        }).catch(err => {
            console.log(err);
        })
        return out;
    }
}