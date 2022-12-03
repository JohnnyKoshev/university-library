import {Component, OnInit, ViewChild} from '@angular/core';
import {NgImageSliderComponent} from 'ng-image-slider';

@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.scss']
})
export class StudentMainComponent implements OnInit {
  @ViewChild('slider') slider!: NgImageSliderComponent;

  collections = [
    {
      thumbImage: "./assets/images/collections-machine-learning.png",
      title: "MACHILE LEARNING"
    },
    {
      thumbImage: "./assets/images/collections-programming-languages.png",
      title: "PROGRAMMING LANGUAGES"
    },
    {
      thumbImage: "./assets/images/collections-math.png",
      title: "MATH COLLECTIONS"
    }
  ];

  prevImageClick(){
    this.slider.prev();
  }

  nextImageClick(){
    this.slider.next();
  }



  constructor() {
  }

  ngOnInit(): void {
  }

}
