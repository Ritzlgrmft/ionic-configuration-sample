import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { ConfigurationPage } from "../configuration/configuration";
import { ConfigurationViewerModalManager } from "ionic-configuration-viewer";

@Component({
	templateUrl: "home.html"
})
export class HomePage {

	public languages: string[];
	public currentLanguage: string;

	constructor(
		private navController: NavController,
		private configurationViewerModalManager: ConfigurationViewerModalManager) {

		this.languages = ["en", "de"];
		this.currentLanguage = "en";
	}

	public goToConfigurationPage(): void {
		this.navController.push(ConfigurationPage);
	}

	public openModal(): void {
		this.configurationViewerModalManager.openModal(this.currentLanguage);
	}

	public changeLanguage(language: string): void {
		this.currentLanguage = language;
	}
}
