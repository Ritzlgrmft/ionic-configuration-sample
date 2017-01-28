import { Component } from "@angular/core";
import { Platform } from "ionic-angular";

import { HomePage } from "../pages/home/home";

/**
 * Root component of the app.
 */
@Component({
	templateUrl: "app.html"
})
export class AppComponent {

	/**
	 * Root page of the app.
	 */
	public rootPage = HomePage;

	constructor(platform: Platform) {
		platform.ready().then(() => {
			// StatusBar.styleDefault();
			// Splashscreen.hide();
		});
	}
}
