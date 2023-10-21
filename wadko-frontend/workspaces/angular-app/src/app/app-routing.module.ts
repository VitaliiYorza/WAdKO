import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import { ImageSelectorComponent } from './components/home/image-selector/image-selector.component';
import { ResultPageComponent } from './components/home/result-page/result-page.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: 'home',
		component: HomeComponent,
	},
	{
		path: 'image-selector',
		component: ImageSelectorComponent,
	},
	{
		path: 'result',
		component: ResultPageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
