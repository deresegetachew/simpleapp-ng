import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html'
})
export class CoursesComponent {

    logoColVisible: string = "table-cell";
    trainee: string = "jackie";
    coursesTaken: { [k: string]: string | boolean }[] = [
        {
            title: 'mongodb',
            url: 'https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png',
            completed: true,

        },
        {
            title: 'Angular',
            url: 'https://angular.io/assets/images/logos/angular/angular.svg',
            completed: true,
        },
        {
            title: 'NodeJS',
            url: 'https://nodejs.org/static/images/logo.svg',
            completed: true,
        }
    ];
    viewMode: string = "grid"; //possible values grid | list

    toggleLogoColVisibility() {
        if (this.logoColVisible == 'table-cell')
            this.logoColVisible = 'none';
        else
            this.logoColVisible = 'table-cell'

    }

}