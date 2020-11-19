import { Component } from '@angular/core';

@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {
    title = 'Hp Laptop';
    birthDate = new Date();
    kebede = "asdasd"
}