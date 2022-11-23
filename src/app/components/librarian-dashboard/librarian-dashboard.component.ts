import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-librarian-dashboard',
  templateUrl: './librarian-dashboard.component.html',
  styleUrls: ['./librarian-dashboard.component.scss']
})
export class LibrarianDashboardComponent implements OnInit {
  mainOptions: HTMLCollection = this.elementRef.nativeElement.getElementsByClassName('menu-element');
  subOptions: HTMLCollection = this.elementRef.nativeElement.getElementsByClassName('menu-option');


  private optionOnClick(element: HTMLAnchorElement, options: HTMLCollection) {
    element.style.backgroundColor = '#8F37FF';
    this.disableClicks(element, options);
    element.dataset['clicked'] = "true";
  }

  searchOnClick(searchElement: HTMLAnchorElement) {
    this.optionOnClick(searchElement, this.subOptions);
  }

  addOnClick(addElement: HTMLAnchorElement) {
    this.optionOnClick(addElement, this.subOptions);
  }

  returnOnClick(returnElement: HTMLAnchorElement) {
    this.optionOnClick(returnElement, this.subOptions);
  }

  booksOnClick(bookElement: HTMLAnchorElement) {
    this.optionOnClick(bookElement, this.mainOptions);
  }

  dashboardOnClick(dashboardElement: HTMLAnchorElement) {
    this.optionOnClick(dashboardElement, this.mainOptions);
  }

  fineOnClick(fineElement: HTMLAnchorElement) {
    this.optionOnClick(fineElement, this.mainOptions);
  }

  requestsOnClick(requestsElement: HTMLAnchorElement) {
    this.optionOnClick(requestsElement, this.mainOptions);
  }

  studentsOnClick(studentsElement: HTMLAnchorElement) {
    this.optionOnClick(studentsElement, this.mainOptions);
  }

  private disableClicks(element: HTMLAnchorElement, options: HTMLCollection): void {
    for (let i = 0; i < options.length; i++) {
      if (options[i] !== element) {
        if ((options[i] as HTMLAnchorElement).dataset['clicked'] === 'true') {
          (options[i] as HTMLAnchorElement).style.backgroundColor = '#5564B2';
          (options[i] as HTMLAnchorElement).dataset['clicked'] = 'false';
        }
      }
    }
  }

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
  }

}
