import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'castle-ns-button', loadChildren: () => import('./plugin-demos/castle-ns-button.module').then((m) => m.CastleNsButtonModule) },
  { path: 'castle-ns-icon', loadChildren: () => import('./plugin-demos/castle-ns-icon.module').then((m) => m.CastleNsIconModule) },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
