import React from 'react'


class ElevationGraph extends React.Component {
  constructor (props) {
    
    super(props);
    this.elevator = null;
  }

  componentDidMount(){
    this.elevator = new google.maps.ElevationService();;
    this.drawChart();
  }


  drawChart(){
    // console.log(chart)
    let path = google.maps.geometry.encoding.decodePath(this.props.polyline)
    // console.log(path[0].lat())
    let pathRequest = {
      path: path,
      samples: 256
    };

    // console.log(pathRequest)

     this.elevator.getElevationAlongPath(pathRequest, this.plotElevation);
  }

  plotElevation(results, status){
    if (status !== google.maps.ElevationStatus.OK) {
      return ;
    }

    let elevations = results;
    console.log(elevations)
    let data = new google.visualization.DataTable();
    data.addColumn('string', 'Sample');
    data.addColumn('number', 'Elevation');
    for (let i = 0; i < results.length; i++) {
      data.addRow(['', elevations[i].elevation]);
    }

    let chart = new google.visualization.ColumnChart(document.getElementById('elevation_chart'));
    document.getElementById('elevation_chart').style.display = 'block';
    chart.draw(data, {
      height: 300,
      width: 1052,
      legend: 'none',
      titleY: 'Elevation',
      titleX: 'Distance',
      colors: ['#fc4c02'],
      backgroundColor: {
        stroke: '#e6e6eb',
        strokeWidth: 2
        },
      title: {
        text:'Elevation Change',
        // fontWeight: '300'
      },
      gridlines: {
        color: '#ccccd1'
      },
      bar: {
        groupWidth: '100%'
      }
    });
  }

  render(){
    return (
    <div id="elevation_chart"></div>
    );
  }
}

export default ElevationGraph;
