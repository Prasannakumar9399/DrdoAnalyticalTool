import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

const lineChartOption = {
  responsive: true,
  spanGaps: false,
  legend: {
    display: true,
    position: "top",
    labels: {
      fontColor: "#000",
      usePointStyle: true,
      fontSize: 12
    }
  },
  maintainAspectRatio: false,
  layout: {
    padding: {
      top: 32,
      left: 32,
      right: 32
    }
  },
  elements: {
    point: {
      radius: 4,
      borderWidth: 2,
      hoverRadius: 4,
      hoverBorderWidth: 2
    },
    line: {
      tension: 0.2
    }
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
          drawBorder: true,
          tickMarkLength: 18
        },
        ticks: {
          fontColor: "#000",
          display: true,
          beginAtZero: false,
        }
      }
    ],
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: ''
        },
        gridLines: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          fontColor: "#000",
          padding: 25,
          beginAtZero: false,

        }
      }
    ]
  },
  plugins: {
    filler: {
      propagate: false
    },
    xLabelsOnTop: {
      active: true
    }
  },
}

const barChartOption = {
  responsive: true,
  spanGaps: false,
  legend: {
    display: true,
    position: "top",
    labels: {
      fontColor: "#000",
      usePointStyle: true,
      fontSize: 12
    }
  },
  maintainAspectRatio: false,
  layout: {
    padding: {
      top: 32,
      left: 32,
      right: 32
    }
  },
  elements: {
    point: {
      radius: 4,
      borderWidth: 2,
      hoverRadius: 4,
      hoverBorderWidth: 2
    },
  },
  scales: {
    xAxes: [
      {
        barPercentage: 0.6,
        gridLines: {
          display: false,
          drawBorder: true,
          tickMarkLength: 18
        },
        ticks: {
          fontColor: "#000",
          display: true,
          beginAtZero: true,
        }
      }
    ],
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: ''
        },
        gridLines: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          fontColor: "#000",
          padding: 25,
          beginAtZero: true,


        }
      }
    ]
  },
  plugins: {
    filler: {
      propagate: false
    },
    xLabelsOnTop: {
      active: true
    }
  },
};

const pieChartOption = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: true,
    position: "bottom",
    labels: {
      fontColor: "#000",
      usePointStyle: true,
      fontSize: 10
    }
  },
  scales: {
    xAxes: [{
      gridLines: {
        drawBorder: false,
        display: false,
      },
      ticks: {
        display: false,
        beginAtZero: false,
      }
    }],
  },
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  charResponse: any;
  chartData: any = {};
  chartStatus = false;

  constructor(private adminService: AdminService) { }

  widget1Title = "Max Pecentage %";
  widget2Title = "Maximum Score";
  widget3Title = "Male Percentage";
  widget1Colors = [
    {
      borderColor: '#42a5f5',
      backgroundColor: '#42a5f5',
      pointBackgroundColor: '#1e88e5',
      pointHoverBackgroundColor: '#1e88e5',
      pointBorderColor: '#ffffff',
      pointHoverBorderColor: '#ffffff'
    }
  ];
  widget2Colors = [
    {
      borderColor: "#248f54",
      backgroundColor: "#248f54",
      pointBackgroundColor: '#465e51',
      pointHoverBackgroundColor: '#465e51',
      pointBorderColor: '#ffffff',
      pointHoverBorderColor: '#ffffff'
    }
  ];
  widget3Colors = [
    {
      borderColor: '#734727',
      backgroundColor: '#734727',
      pointBackgroundColor: '#573e2b',
      pointHoverBackgroundColor: '#573e2b',
      pointBorderColor: '#ffffff',
      pointHoverBorderColor: '#ffffff'
    }
  ];
  async ngOnInit() {
    this.charResponse = this.adminService.getCharInfo();
    await this.charResponse.then(data => this.chartData = data);
    // Prepare for widget1
    this.widget1.datasets = this.chartData.data.chart1.datasets;
    this.widget1.labels = this.chartData.data.chart1.labels;
    this.widget1.options = JSON.parse(JSON.stringify(lineChartOption));
    this.widget1.options['scales']['yAxes'][0]['scaleLabel']['labelString'] = this.widget1Title;
    this.widget1.colors = this.widget1Colors;

    // prepare for widget2

    this.widget2.datasets = this.chartData.data.chart2.datasets;
    this.widget2.labels = this.chartData.data.chart2.labels;
    this.widget2.options = JSON.parse(JSON.stringify(lineChartOption));
    this.widget2.options['scales']['yAxes'][0]['scaleLabel']['labelString'] = this.widget2Title;
    this.widget2.colors = this.widget2Colors;

    //prepare for widget3
    this.widget3.datasets = this.chartData.data.chart3.datasets;
    this.widget3.labels = this.chartData.data.chart3.labels;
    this.widget3.options = JSON.parse(JSON.stringify(lineChartOption));
    this.widget3.options['scales']['yAxes'][0]['scaleLabel']['labelString'] = this.widget3Title;
    this.widget3.colors = this.widget3Colors;

    this.chartStatus = true;
  }


  widget1 = {
    chartType: 'line',
    datasets: [],
    labels: [],
    colors: [],
    options: {}
  }
  widget2 = {
    chartType: 'line',
    datasets: [],
    labels: [],
    colors: [],
    options: {}
  }
  widget3 = {
    chartType: 'line',
    datasets: [],
    labels: [],
    colors: [],
    options: {}
  }

  openChart(widget, openChart) {
    if (widget == 'widget1') {
      if (openChart == 'line') {
        this.widget1.chartType = 'line';
        this.widget1.options = lineChartOption;
        this.widget1.options['scales']['yAxes'][0]['scaleLabel']['labelString'] = this.widget1Title;
        this.widget1.colors = this.widget1Colors;
      }
      else if (openChart == 'bar') {
        this.widget1.chartType = 'bar';
        this.widget1.options = barChartOption;
        this.widget1.options['scales']['yAxes'][0]['scaleLabel']['labelString'] = this.widget1Title;
        this.widget1.colors = this.widget1Colors;
      }
      else if (openChart == 'pie') {
        this.widget1.colors = this.createPieChartColor(this.widget1);
        this.widget1.options = pieChartOption;
        this.widget1.chartType = 'pie';

      }
    }
    else if (widget == 'widget2') {
      if (openChart == 'line') {
        this.widget2.chartType = 'line';
        this.widget2.options = lineChartOption;
        this.widget2.options['scales']['yAxes'][0]['scaleLabel']['labelString'] = this.widget2Title;
        this.widget2.colors = this.widget2Colors;
      }
      else if (openChart == 'bar') {
        this.widget2.chartType = 'bar';
        this.widget2.options = barChartOption;
        this.widget2.options['scales']['yAxes'][0]['scaleLabel']['labelString'] = this.widget2Title;
        this.widget2.colors = this.widget2Colors;
      }
      else if (openChart == 'pie') {
        this.widget2.colors = this.createPieChartColor(this.widget2);
        this.widget2.options = pieChartOption;
        this.widget2.chartType = 'pie';

      }
    }
    else if (widget == 'widget3') {
      if (openChart == 'line') {
        this.widget3.chartType = 'line';
        this.widget3.options = lineChartOption;
        this.widget3.options['scales']['yAxes'][0]['scaleLabel']['labelString'] = this.widget3Title;
        this.widget3.colors = this.widget3Colors;
      }
      else if (openChart == 'bar') {
        this.widget3.chartType = 'bar';
        this.widget3.options = barChartOption;
        this.widget3.options['scales']['yAxes'][0]['scaleLabel']['labelString'] = this.widget3Title;
        this.widget3.colors = this.widget3Colors;
      }
      else if (openChart == 'pie') {
        this.widget3.colors = this.createPieChartColor(this.widget3);
        this.widget3.options = pieChartOption;
        this.widget3.chartType = 'pie';

      }
    }

  }

  createPieChartColor(widgetObj) {
    let tempColorList = ["rgba(5, 119, 186 , 0.9)", "rgba(87, 94, 105 , 0.9)", "rgba(201, 235, 171 , 0.9)", "rgba(219, 167, 112 , 0.9)", "rgba(105, 11, 6 , 0.9)", "rgba(188, 188, 194 , 0.9)", "rgba(184, 176, 178 , 0.9)", "rgba(125, 158, 81 , 0.9)", "rgba(196, 124, 57 , 0.9)"];

    let backgroundColorList = [];
    let borderColorList = [];

    for (let t = 0; t < widgetObj.labels.length; t++) {
      backgroundColorList.push(tempColorList[t])
      borderColorList.push('rgba(255,255,255,0.9)');
    }

    let returnValue = []
    for (let j = 0; j < widgetObj.datasets.length; j++) {
      returnValue.push({ backgroundColor: backgroundColorList, borderColor: borderColorList });
    }

    return returnValue
  }



}
