import { Component, computed, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ShipService } from '../ship.service';

@Component({
  selector: 'sw-ship-detail',
  imports: [DecimalPipe],
  templateUrl: './ship-detail.html',
  styleUrls: ['./ship-detail.css']
})
export class ShipDetail {
  private shipService = inject(ShipService);

  // Signals used in the template
  ship = this.shipService.selectedShip;
  pageTitle = computed(() => this.ship() ? `Detail for: ${this.ship()?.name}` : '');

}
