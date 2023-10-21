import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ImageSelectorComponent } from './components/home/image-selector/image-selector.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResultPageComponent } from './components/home/result-page/result-page.component';

// AoT requires an exported function for factories
// export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
// 	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

@NgModule({
	declarations: [AppComponent, HomeComponent, ImageSelectorComponent, NavbarComponent, ResultPageComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		// TranslateModule.forRoot({
		// 	defaultLanguage: 'en',
		// 	loader: {
		// 		provide: TranslateLoader,
		// 		useFactory: HttpLoaderFactory,
		// 		deps: [HttpClient],
		// 	},
		// }),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
