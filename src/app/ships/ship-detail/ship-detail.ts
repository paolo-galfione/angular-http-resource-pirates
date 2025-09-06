import { Component, computed, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ShipService } from '../ship.service';
import { FilmService } from '../../films/film.service';

@Component({
  selector: 'sw-ship-detail',
  imports: [DecimalPipe],
  templateUrl: './ship-detail.html',
  styleUrls: ['./ship-detail.css']
})
export class ShipDetail {
  private shipService = inject(ShipService);
  private filmService = inject(FilmService);

  // Signals used in the template
  ship = this.shipService.selectedShip;
  pageTitle = computed(() => this.ship() ? `Detail for: ${this.ship()?.name}` : '');

  shipFilms = this.filmService.shipFilmsResource.value;
  error = this.filmService.shipFilmsResource.error;
  errorMessage = computed(() => this.error() ? this.error()?.message : '');
}
