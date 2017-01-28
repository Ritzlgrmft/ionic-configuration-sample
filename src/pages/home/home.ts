import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { ConfigurationPage } from "../configuration/configuration";
import { ConfigurationViewerModalManager } from "ionic-configuration-viewer";

/**
 * Home page.
 */
@Component({
	templateUrl: "home.html"
})
export class HomePage {

	/**
	 * Available languages for ConfigurationViewerModalManager.
	 */
	public languages: string[];

	/**
	 * Current selected language.
	 */
	public currentLanguage: string;

	constructor(
		private navController: NavController,
		private configurationViewerModalManager: ConfigurationViewerModalManager) {

		this.languages = ["en", "de"];
		this.currentLanguage = "en";
	}

	/**
	 * Go to configuration page.
	 */
	public goToConfigurationPage(): void {
		this.navController.push(ConfigurationPage);
	}

	/**
	 * Open configuration modal.
	 */
	public openModal(): void {
		this.configurationViewerModalManager.openModal(this.currentLanguage);
	}

	/**
	 * Change the language for the configuration modal.
	 */
	public changeLanguage(language: string): void {
		this.currentLanguage = language;
	}
}
