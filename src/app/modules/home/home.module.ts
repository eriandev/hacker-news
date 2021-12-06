import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NewsService } from './services/news.service';
import { FavoritesService } from './services/favorites.service';
import { LayoutComponent } from './pages/layout/layout.component';
import { CardComponent } from './components/card/card.component';
import { SelectComponent } from './components/select/select.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [LayoutComponent, CardComponent, SelectComponent, ToggleComponent, CardsComponent],
  providers: [NewsService, FavoritesService],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
