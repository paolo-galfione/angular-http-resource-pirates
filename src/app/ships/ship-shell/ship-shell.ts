import { Component } from '@angular/core';
import { ShipList } from "../ship-list/ship-list";
import { ShipDetail } from "../ship-detail/ship-detail";
import { CartTotal } from '../../cart/cart-total/cart-total';

@Component({
    selector: 'sw-ship-shell',
    template: `
    <div class='row'>
      <div class='col-md-6'>
        <sw-ship-list/>
      </div>
    </div>
    <div class='row'>
      <div class='col-md-6'>
        <sw-ship-detail/>
      </div>
      <div class='col-md-6'>
        <sw-cart-total/>
      </div>
    </div>
  `,
    imports: [ShipList, ShipDetail, CartTotal]
})
export class ShipShell {

}
