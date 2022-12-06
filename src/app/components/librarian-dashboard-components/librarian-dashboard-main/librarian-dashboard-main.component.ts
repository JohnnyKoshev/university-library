import {Component, OnInit} from '@angular/core';
import {AgChartOptions} from 'ag-charts-community';

@Component({
  selector: 'app-librarian-dashboard-main',
  templateUrl: './librarian-dashboard-main.component.html',
  styleUrls: ['./librarian-dashboard-main.component.scss']
})
export class LibrarianDashboardMainComponent implements OnInit {
  public options!: AgChartOptions;


  constructor() {
  }


  ngOnInit(): void {
    this.options = {
      data: [
        {label: 'Android', value: 56.9},
        {label: 'iOS', value: 22.5},
        {label: 'BlackBerry', value: 6.8},
        {label: 'Symbian', value: 8.5},
        {label: 'Bada', value: 2.6},
        {label: 'Windows', value: 1.9},
      ],
      series: [
        {
          type: 'pie',
          angleKey: 'value',
          calloutLabelKey: 'label',
          calloutLabel:{
            enabled: false
          },
          sectorLabelKey: 'value',
          sectorLabel: {
            fontSize: 0,
          },
        },
      ],
    };
  }

}
