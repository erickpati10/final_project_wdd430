import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderList } from './providers/provider-list/provider-list';
import { ProviderDetail } from './providers/provider-detail/provider-detail';
import { ProviderForm } from './providers/provider-form/provider-form';

const routes: Routes = [
  { path: '', redirectTo: '/providers', pathMatch: 'full' },
  { path: 'providers', component: ProviderList },
  { path: 'providers/new', component: ProviderForm },
  { path: 'providers/:id', component: ProviderDetail },
  { path: 'providers/:id/edit', component: ProviderForm },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
