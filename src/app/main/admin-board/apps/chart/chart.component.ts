import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  charResponse: any;
  chartData: any = {};
  chartStatus:boolean = false;
  constructor(private adminService: AdminService) { }

  widget4Title = "Pecentage %";

  widgetColors = [
    {
      borderColor: '#42a5f5',
      backgroundColor: '#42a5f5',
      pointBackgroundColor: '#1e88e5',
      pointHoverBackgroundColor: '#1e88e5',
      pointBorderColor: '#ffffff',
      pointHoverBorderColor: '#ffffff'
    }
  ];
  async ngOnInit() {
    this.charResponse = this.adminService.getCharInfo();
    await this.charResponse.then(data => this.chartData = data);


    // Prepare for widget4
    this.widget4.datasets = this.chartData.data.chart4.datasets;
    this.widget4.labels = this.chartData.data.chart4.labels;
    this.widget4.options = this.lineChartOption;
    this.widget4.options['scales']['yAxes'][0]['scaleLabel']['labelString'] = this.widget4Title;
    this.widget4.colors = this.widgetColors;
   this.chartStatus = true;

  }

  lineChartOption = {
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

  barChartOption = {
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
            // callback: function (value, index, values) {
            //   return value + '%';
            // },
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

  pieChartOption = {
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

  widget4 = {
    chartType: 'line',
    datasets: [],
    labels: [],
    colors: [],
    options: {}
  }


  openChart(widget, openChart) {
    if (widget == 'widget4') {
      if (openChart == 'line') {
        this.widget4.chartType = 'line';
        this.widget4.options = this.lineChartOption;
        this.widget4.options['scales']['yAxes'][0]['scaleLabel']['labelString'] = this.widget4Title;
        this.widget4.colors = this.widgetColors;
      }
      else if (openChart == 'bar') {
        this.widget4.chartType = 'bar';
        this.widget4.options = this.barChartOption;
        this.widget4.options['scales']['yAxes'][0]['scaleLabel']['labelString'] = this.widget4Title;
        this.widget4.colors = this.widgetColors;
      }
      else if (openChart == 'pie') {
        this.widget4.colors = this.createPieChartColor(this.widget4);
        this.widget4.options = this.pieChartOption;
        this.widget4.chartType = 'pie';

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
