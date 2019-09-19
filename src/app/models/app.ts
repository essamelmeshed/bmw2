import { Settings } from './settings';

/**
 * Venti singleton design pattern of the required settings and user connection.
 */
export class App {
    /**
     * Singleton instance.
     * didn't understand it ? Oh come on!.
     */
    private static instance: App;

    /**
     * private variables for set and get.
     */
    private settings: Settings;

    constructor() { }


    static get Instance() {
        if (!this.instance) {
            this.instance = new App();
        }
        return this.instance;
    }


    static get Settings(): Settings {
        if (!this.Instance.settings) {
            throw "Application settings are not set.";
        }
        return this.Instance.settings;
    }

    static set Settings(newSettings: Settings) {
        this.Instance.settings = newSettings;
    }

    static get backEndUrl(): string {
        const settings = this.Settings;
        const url = settings.apiProtocol + '://' + settings.apiHost;
        return settings.apiPort ? url + ':' + settings.apiPort : url;
    }

    static get baseUrl(): string {
        return this.backEndUrl;
    }
}
