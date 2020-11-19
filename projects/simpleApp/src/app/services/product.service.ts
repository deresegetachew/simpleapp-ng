import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getCurrentDate() {
    return Date();
  }

  getCourses() {
    let url = 'https://jsonplaceholder.typicode.com/albums';

    this.http.get(url).subscribe(response => {
      //subscription function
      console.log(response);
    }, error => {
      console.log(error)
    })
  }

  creteCourse(course: any) {
    this.http.post('', JSON.stringify(course)).subscribe(response => {
      console.log(response);
    })
  }

  updateCourse(course: any) {
    this.http.patch('url/id', JSON.stringify({ title: '' })).subscribe((response) => {
      console.log(response);
    })
  }

  updateCourse2(course: any) {
    this.http.put('url/id', JSON.stringify(course)).subscribe((response) => {
      console.log(response)
    })
  }

  deleteCourse(course: any) {
    this.http.delete('url/id').subscribe((response) => {
      console.log(response);
    }, (error: Response) => {
      if (error.status == 404) {
        alert("course has already been deleted");
        console.log(error);
      }
      else {
        alert("unkonwn error");
      }
    })
  }
}
