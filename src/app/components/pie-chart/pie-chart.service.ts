import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PieChartService {

  constructor() { }

  getData() {
    //let dashboardColors = this._baConfig.get().colors.dashboard;
    return [
      {
        value: 2000,
        color: '#25396E',
        //highlight: colorHelper.shade(dashboardColors.white, 15),
        label: 'Websites',
        percentage: 87,
        order: 1,
      }, {
        value: 1500,
        color: '#3755A4',
        //highlight: colorHelper.shade(dashboardColors.gossip, 15),
        label: 'Logo',
        percentage: 22,
        order: 4,
      }, {
        value: 1000,
        color: "#25396E",
        //highlight: colorHelper.shade(dashboardColors.silverTree, 15),
        label: 'Social Media',
        percentage: 70,
        order: 3,
      }, {
        value: 1200,
        color: '#4164C2',
        //highlight: colorHelper.shade(dashboardColors.surfieGreen, 15),
        label: 'Adwords',
        percentage: 38,
        order: 2,
      }, {
        value: 400,
        color: '#3755A4',
        //highlight: colorHelper.shade(dashboardColors.blueStone, 15),
        label: 'E-Commerce',
        percentage: 17,
        order: 0,
      },
    ];
  }
}
