import { Component } from '@angular/core';
import { CurrentDateService } from './services/current-date.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Simple App';
  hrText: string;
  mntText: string;
  secText: string;

  constructor(private currentDateService: CurrentDateService) {
    // 
  }

  currentDate(): string {
    return this.currentDateService.getDate();
  }

  updateTime(date: Date) {
    let hr = date.getHours();
    let mnt = date.getMinutes();
    let sec = date.getSeconds();



    let ampm: string = hr >= 12 ? 'PM' : 'AM';

    hr = hr % 12; // makes the hour in 12 hours format
    hr = hr ? hr : 12; // if the hour is 0 then 12 is assigned
    this.hrText = hr < 10 ? '0' + hr : hr.toString(); // if the hour is single digit, then add 0 in front of it


    this.mntText = mnt < 10 ? '0' + mnt : mnt.toString();
    this.secText = sec < 10 ? '0' + sec : sec.toString();
  }


  timer() {
    setInterval(() => {
      this.updateTime(new Date());
    }, 1000)
  }


  ngOnInit() {
    this.timer();
  }


}


