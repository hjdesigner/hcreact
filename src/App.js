import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function App() {

  const [phase, setPhase] = useState({
    title: {
      text: 'Candidatos por fase'
    },
    credits: {
      enabled: false
    },
    yAxis: {
      title: false,
      tickInterval: 500
    },
    xAxis: {
      categories: ['Candidatura', 'Lorem ipsum', 'Dolor sit amet', 'Teste lógica', 'Video entrevista']
    },
    legend: false,
    series: [
      {
        data: [2573, 1621, 789, 506, 215],
        color: '#ef5e30',
      },
    ],
  });

  const [genre, setGenre] = useState({
    chart: {
      type: 'area'
    },
    title: {
      text: 'Candidatos por gênero'
    },
    legend: false,
    xAxis: {
      categories: ['Candidatura', 'Lorem ipsum', 'Dolor sit amet', 'Teste lógica', 'Video entrevista']
    },
    yAxis: {
      title: false,
      tickInterval: 500
    },
    plotOptions: {
      area: {
        fillOpacity: 0.5
      }
    },
    credits: {
      enabled: false
    },
    series: [{
      data: [2573, 1621, 789, 506, 215],
      color: '#5cceba',
    }, {
      data: [1573, 621, 489, 706, 815],
      color: '#785ef0',
    }]
  });

  return (
    <div className="App">
      <HighchartsReact
        highcharts={Highcharts}
        options={phase}
      />
      <HighchartsReact
        highcharts={Highcharts}
        options={genre}
      />
    </div>
  );
}

export default App;
