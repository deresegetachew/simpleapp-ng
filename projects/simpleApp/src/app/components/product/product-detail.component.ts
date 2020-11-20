import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            console.log(params);
            console.log(params.get('id'));
            //params.keys //all the keys in our params
            //params.getAll(); // the value of all route parameters
            //params.get(); //get value a given route parameters
            //params.has(); //check to see if we have a parameter with the given name
        })
    }

    goToList() {
        // navigate with route params
        //this.router.navigate(['/product',1,2,3])
        //navigate with query params
        this.router.navigate(['/product'],
            { queryParams: { page: 2, order: 'newest' } }
        )
    }
}