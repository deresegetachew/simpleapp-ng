import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor() { }


  difficultyOptions = ["Beginner", "Medium", "Advanced"];

  ngOnInit(): void {
  }

  submit(form) {
    console.log(form);
  }

}
