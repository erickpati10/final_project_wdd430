import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Providers } from './providers/providers';
import { ProviderList } from './providers/provider-list/provider-list';
import { ProviderDetail } from './providers/provider-detail/provider-detail';
import { ProviderForm } from './providers/provider-form/provider-form';
import { Header } from './header';

@NgModule({
  declarations: [App, Providers, ProviderList, ProviderDetail, ProviderForm, Header],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, CommonModule],
  providers: [],
  bootstrap: [App],
})
export class AppModule {}
