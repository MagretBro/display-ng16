import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';

const routes: Routes = [
  { path: 'carousel', component: CarouselComponent } // Страница с каруселью
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
