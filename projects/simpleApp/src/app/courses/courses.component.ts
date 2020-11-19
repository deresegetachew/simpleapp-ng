import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html'
    //templateUrl: './courses.component-ngfor.html'
})
export class CoursesComponent {

    logoColVisible: string = "table-cell";
    trainee: string = "jackie";
    coursesTaken: { [k: string]: string | boolean }[];
    viewMode: string = "grid"; //possible values grid | list


    loadCourses() {
        this.coursesTaken = [
            {
                _id: 'co-0001',
                title: 'mongodb',
                url: 'https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png',
                completed: true,
                favorite: false

            },
            {
                _id: 'co-0002',
                title: 'Angular',
                url: 'https://angular.io/assets/images/logos/angular/angular.svg',
                completed: true,
                favorite: true
            },
            {
                _id: 'co_0003',
                title: 'NodeJS',
                url: 'https://nodejs.org/static/images/logo.svg',
                completed: true,
                favorite: false
            }
        ];
    }


    trackCourse(index, course) {
        return course ? course.id : undefined;
    }

    toggleFavoriteForCourse(course) {
        console.log(course);
        course.favorite = !course.favorite;
    }

    toggleLogoColVisibility() {
        if (this.logoColVisible == 'table-cell')
            this.logoColVisible = 'none';
        else
            this.logoColVisible = 'table-cell'

    }

    ngOnInit() {
        this.loadCourses();
    }

}

