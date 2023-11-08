import { Injectable, NgZone } from '@angular/core';
import { WindowApi } from 'shared-lib';

@Injectable({
	providedIn: 'root',
})
export class ElectronIpcService {
	private _api!: WindowApi;

	constructor(private zone: NgZone) {
		if (window && (window as Window).api) {
			this._api = (window as Window).api;
			console.log('Preloader API has been loaded successfully');
		} else {
			console.warn('Preloader API is not loaded');
		}
	}

	public receive<Out>(channel: string, callback: (output: Out) => void): void {
		if (this._api) {
			this._api.receive<Out>(channel, (output) => {
				console.log(`Received from main process channel [${channel}]`, output);
				
				this.zone.run(() => {
					callback(output);
				});
			});
		}
	}

	public send<In>(channel: string, input: In): void {
		if (this._api) {
			console.log(`Sending to main process channel [${channel}]`, input);
			this._api.send<In>(channel, input);
		}
	}

	public async invoke<In, Out>(channel: string, input: In): Promise<Out> {
		if (this._api) {
			console.log(`Sending async to main process channel [${channel}]`, input);
			return this._api.invoke<In, Out>(channel, input);
		}

		return await new Promise<Out>((resolve, reject) => {
			reject();
		});
	}
}
