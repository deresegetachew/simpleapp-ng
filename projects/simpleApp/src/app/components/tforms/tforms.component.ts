import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tforms',
  templateUrl: './tforms.component.html',
  styleUrls: ['./tforms.component.css']
})
export class TformsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  log(data) {
    console.log(data);
  }

  submit(productForm) {
    console.log(productForm);

    // if(productForm.valid){ 
    // }
    //else{
    //}
  }

}
