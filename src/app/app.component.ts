import { Component } from "@angular/core";
import { Platform } from "ionic-angular";

import { HomePage } from "../pages/home/home";

@Component({
	templateUrl: "app.html"
})
export class AppComponent {
	public rootPage = HomePage;

	constructor(platform: Platform) {
		platform.ready().then(() => {
			// StatusBar.styleDefault();
			// Splashscreen.hide();
		});
	}
}
