import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {

  constructor(private activateroute:ActivatedRoute) {

    console.log(this.activateroute.snapshot.params.id)
   }

  ngOnInit() {
  }

}
