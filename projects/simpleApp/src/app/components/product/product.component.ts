import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {
    title = 'Hp Laptop';
    birthDate = new Date();
    kebede = "asdasd"

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.queryParamMap.subscribe((params) => {
            console.log(params)
            console.log(params.get('name'))
        })
    }
}