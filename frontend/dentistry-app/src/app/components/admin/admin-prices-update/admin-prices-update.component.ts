import { Component, OnInit } from '@angular/core';
import { Price } from 'src/app/models/price';
import { PriceService } from 'src/app/services/price.service';
import { Router } from '@angular/router';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-prices-update',
  templateUrl: './admin-prices-update.component.html',
  styleUrls: ['./admin-prices-update.component.css']
})
export class AdminPricesUpdateComponent implements OnInit {
  price = <Price>{};
  id: number = 0;

  constructor(private priceService: PriceService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.priceService.getPriceById(this.id).subscribe(data => {
      this.price = data;
    })
  }

  updatePrice() {
    this.priceService.updatePrice(this.price, this.id).subscribe(data => {
      this.goToListPrices();
    })
  }

  deletePrice() {
    this.priceService.deletePrice(this.id).subscribe(data => {
      this.goToListPrices();
    })
  }

  goToListPrices() {
    this.router.navigate(['admin-prices']);
  }
}
