import { APP_INITIALIZER, ErrorHandler, NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { ConfigurationService } from "ionic-configuration-service";
import { ConfigurationViewerModule } from "ionic-configuration-viewer";
import { LoggingService } from "ionic-logging-service";

import { ConfigurationPage } from "../pages/configuration/configuration";
import { HomePage } from "../pages/home/home";
import { AppComponent } from "./app.component";

/**
 * Helper function for loading the configuration data.
 * Must be defined in a separate function due to ngc restrictions.
 */
export function loadConfiguration(configurationService: ConfigurationService): () => Promise<void> {
	return () => configurationService.load("assets/settings.json");
}

/**
 * NgModule for the app.
 */
@NgModule({
	bootstrap: [IonicApp],
	declarations: [
		AppComponent,
		ConfigurationPage,
		HomePage,
	],
	entryComponents: [
		AppComponent,
		ConfigurationPage,
		HomePage,
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(AppComponent),
		HttpModule,
		ConfigurationViewerModule,
	],
	providers: [
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		ConfigurationService,
		{
			deps: [ConfigurationService],
			multi: true,
			provide: APP_INITIALIZER,
			useFactory: loadConfiguration,
		},
		LoggingService,
	],
})
export class AppModule { }
