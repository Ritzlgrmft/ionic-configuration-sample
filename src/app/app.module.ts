import { APP_INITIALIZER, ErrorHandler, NgModule } from "@angular/core";
import { Http } from "@angular/http";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { ConfigurationService } from "ionic-configuration-service";
import { LoggingService } from "ionic-logging-service";
import { ConfigurationViewerModule } from "ionic-configuration-viewer";
import { AppComponent } from "./app.component";
import { ConfigurationPage } from "../pages/configuration/configuration";
import { HomePage } from "../pages/home/home";

export function loadConfiguration(configurationService: ConfigurationService): () => Promise<void> {
	return () => configurationService.load("assets/settings.json");
}

@NgModule({
	declarations: [
		AppComponent,
		ConfigurationPage,
		HomePage
	],
	imports: [
		IonicModule.forRoot(AppComponent),
		ConfigurationViewerModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		AppComponent,
		ConfigurationPage,
		HomePage
	],
	providers: [
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		ConfigurationService,
		{
			provide: APP_INITIALIZER,
			useFactory: loadConfiguration,
			deps: [ConfigurationService],
			multi: true
		},
		LoggingService
		// {
		// 	provide: LoggingService,
		// 	useFactory: getLoggingService,
		// 	deps: [ConfigurationService]
		// }
	]
})
export class AppModule { }
