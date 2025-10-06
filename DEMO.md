# Demo Instructions

## Replace the ship.service.ts file with this:

import { Injectable, signal } from '@angular/core';
import { Ship } from './ship';

@Injectable({
  providedIn: 'root'
})
export class ShipService {
  private url = 'api/ships';

  // Expose signals from this service
  selectedShip = signal<Ship | undefined>(undefined);

}


## Replace this ship-list.ts file with this:

import { Component, computed, inject, signal } from '@angular/core';
import { ShipService } from '../ship.service';
import { FormsModule } from '@angular/forms';
import { Ship } from '../ship';

@Component({
  selector: 'sw-ship-list',
  imports: [FormsModule],
  templateUrl: './ship-list.html',
  styleUrls: ['./ship-list.css']
})
export class ShipList {
  pageTitle = 'Ships';
  private shipService = inject(ShipService);

  // Component signals
  selectedShip = this.shipService.selectedShip;

  ships = signal<Ship[]>([]);
  isLoading = signal(false);
  error = signal<Error|undefined>(undefined);
  errorMessage = computed(() => this.error() ? this.error()?.message : '');

}

## Start the application!

## Add code to create the resource (ship.service.ts)
  shipsResource = httpResource<Ship[]>(() => this.url, {defaultValue: []});

## Adjust the code in the template (ship-list.ts)
  ships = this.shipService.shipsResource.value;
  isLoading = this.shipService.shipsResource.isLoading;
  error = this.shipService.shipsResource.error;
