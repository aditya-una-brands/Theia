import Chart from 'react-apexcharts'
import React from 'react';
import Apexpie from './Apexpie';
class Apex extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        options: {
          chart: {
            id: 'apexchart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }]
      }
    }
    render() {
      return (
        <div style={{display:"grid",gridTemplateColumns:"60% 40%",gap:"10px",width:"95%",margin:'auto',marginTop:"15px"}}>
        <div style={{border:"1px solid gray"}}><Chart options={this.state.options} series={this.state.series} type="bar"  /></div>
        <div style={{border:"1px solid gray"}}><Apexpie/></div>
        <div style={{border:"1px solid gray"}}><Chart options={this.state.options} series={this.state.series} type="bar"  /></div>
        <div style={{border:"1px solid gray"}}><Apexpie/></div>
        </div>

      )
    }
  }

  export default Apex;