import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productDetail;

  constructor(private http:HttpClient) { 
    this.http.get('https://5cdd0a92b22718001417c19d.mockapi.io/api/products')
    .subscribe((data)=>{
      this.productDetail = data;

    })
    
    
  }

  ngOnInit() {
  }

}
