import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonFormComponent } from './components/pokemon-form/pokemon-form.component';
import { PokemonDatatableComponent } from './components/pokemon-datatable/pokemon-datatable.component';
import { PokemonButtonComponent } from './components/pokemon-button/pokemon-button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonService } from './services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PokemonFormComponent,
    PokemonDatatableComponent,
    PokemonButtonComponent,
  ],
  imports: [BrowserModule, CommonModule, FormsModule, HttpClientModule],
  providers: [PokemonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
