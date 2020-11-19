import { Component } from "@angular/core";
import { ICourse } from 'src/app/interfaces/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
    selector: 'courses',
    //templateUrl: './courses.component.html'
    templateUrl: './courses.component-ngfor.html'
})
export class CoursesComponent {

    logoColVisible: string = "table-cell";
    trainee: string = "jackie";
    coursesTaken: ICourse[];
    viewMode: string = "grid"; //possible values grid | list
    toggleFavCol = false;

    constructor(private courseService: CourseService) { }

    loadCourses() {
        this.courseService.getCourses();
    }


    trackCourse(index, course: ICourse) {
        return course ? course._id : undefined;
    }

    toggleFavorite(course: ICourse) {
        //course.favorite = !course.favorite;
        this.courseService.toggleFavorite(course._id)
    }

    toggleLogoColVisibility() {
        if (this.logoColVisible == 'table-cell')
            this.logoColVisible = 'none';
        else
            this.logoColVisible = 'table-cell'
    }

    ngOnInit() {
        this.coursesTaken = this.courseService.getCourses();
    }

}

