import { Injectable } from '@angular/core';
import { ICourse } from '../interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  coursesTaken: ICourse[] = [
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

  constructor() { }

  getCourses() {
    return this.coursesTaken;
  }

  createCourse(course: ICourse) {
    this.coursesTaken.push(course);
  }

  toggleFavorite(courseId: string) {
    let course = this.coursesTaken.find((c) => c._id == courseId);
    course.favorite = !course.favorite;
  }
}
