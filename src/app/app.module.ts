import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    BrowserModule,
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})

export class AppModule { }
