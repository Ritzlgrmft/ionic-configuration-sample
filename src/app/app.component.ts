import { Component } from "@angular/core";
import { Platform } from "ionic-angular";

import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";

/**
 * Root component of the app.
 */
@Component({
	templateUrl: "app.html",
})
export class AppComponent {

	/**
	 * Root page of the app.
	 */
	public rootPage = HomePage;

	constructor(
		platform: Platform,
		splashScreen: SplashScreen) {

		platform.ready().then(() => {
			splashScreen.hide();
		});
	}
}
