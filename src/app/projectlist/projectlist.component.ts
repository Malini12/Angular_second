import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {
  @Input() price;
  @Input() productno;
  @Input() name;
 

  constructor() { }

  ngOnInit() {
  }

    values=[
      {
        productno:"909",
        name:"screwdriver",
        price:"100"
      },
      {
        productno:"901",
        name:"screwdriver",
        price:"100"
      },
      {
        productno:"909",
        name:"screwdriver",
        price:"100"
      },
      {
        productno:"909",
        name:"screwdriver",
        price:"100"
      },
      {
        productno:"909",
        name:"screwdriver",
        price:"100"
      }, 
      {
        productno:"909",
        name:"screwdriver",
        price:"100"
      },
      {
        productno:"909",
        name:"screwdriver",
        price:"100"
      },
      {
        productno:"909",
        name:"screwdriver",
        price:"100"
      },
      {
        productno:"909",
        name:"screwdriver",
        price:"100"
      },
      {
        productno:"909",
        name:"screwdriver",
        price:"100"
      },
      {
        productno:"909",
        name:"screwdriver",
        price:"100"
      }

    ]
}
