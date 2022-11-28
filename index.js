// Data retrieved from https://worldpopulationreview.com/country-rankings/countries-by-density
Highcharts.chart('container', {
  chart: {
    plotShadow: false,
    plotBackgroundColor: '',
    type: 'pie',
    events: {
      load: function () {
        let chart = this,
          offsetLeft = -30,
          offsetTop = 10,
          x = chart.plotLeft + chart.plotWidth / 2 + offsetLeft,
          y = chart.plotTop + chart.plotHeight / 2 + offsetTop,
          value = 0;

        chart.series[0].yData.forEach(function (point) {
          console.log(point);
          value += point;
        });

        chart.renderer
          .text(value, x, y)
          .add()
          .css({
            fontSize: '25px',
            textAlign: 'center',
          })
          .toFront();
      },
    },
  },
  title: {
    text: 'Countries compared by population density and total area, 2022.',
  },
  tooltip: {
    headerFormat: '',
    pointFormat:
      '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
      'Area (square km): <b>{point.y}</b><br/>',
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      showInLegend: true,
      dataLabels: {
        enabled: true,
        format: '{point.percentage:.2f} %',
        distance: '5%',
      },
    },
  },
  series: [
    {
      minPointSize: 10,
      borderWidth: 40,
      borderColor: '',
      type: 'pie',
      size: '70%',
      innerSize: '99%',
      data: [
        {
          name: 'Spain',
          y: 100,
        },
        {
          name: 'France',
          y: 133.33,
        },
        {
          name: 'Poland',
          y: -133.33,
        },
      ],
    },
  ],
  credits: {
    enabled: false,
  },
});
