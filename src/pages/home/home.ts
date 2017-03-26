import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { ConfigurationViewerModalManager, ConfigurationViewerTranslation } from "ionic-configuration-viewer";
import { ConfigurationPage } from "../configuration/configuration";

/**
 * Home page.
 */
@Component({
	templateUrl: "home.html",
})
export class HomePage {

	/**
	 * Available languages for ConfigurationViewerModalManager.
	 */
	public languages: string[];

	/**
	 * Selected language.
	 */
	public selectedLanguage: string;

	/**
	 * Custom translation, used if selectedLanguage === "custom"
	 */
	public translation: ConfigurationViewerTranslation;

	constructor(
		private navController: NavController,
		private configurationViewerModalManager: ConfigurationViewerModalManager) {

		this.languages = ["en", "de", "custom"];
		this.selectedLanguage = "en";
		this.translation = { title: "myTitle", cancel: "myCancel" };
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
		if (this.selectedLanguage === "custom") {
			this.configurationViewerModalManager.openModal(undefined, this.translation);
		} else {
			this.configurationViewerModalManager.openModal(this.selectedLanguage);
		}
	}

	/**
	 * Change the language for the configuration modal.
	 */
	public changeLanguage(language: string): void {
		this.selectedLanguage = language;
	}
}
