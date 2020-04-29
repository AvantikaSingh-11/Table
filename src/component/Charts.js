import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import {Bar} from 'react-chartjs-2';
const ref = React.createRef();
class Charts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            labels: ['January', 'February', 'March',
                'April', 'May'],
            datasets: [
                {
                    label: 'Rainfall',
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [65, 59, 80, 81, 56]
                }
            ]
        }
    }

    render() {
        return (

            <div>
                <div>
                    <Pdf targetRef={ref} filename="chart.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>Download chart</button>}
                </Pdf>
                </div>
                <div ref={ref}>
                    <Bar
                        data={this.state}
                        options={{
                            title:{
                                display:true,
                                text:'Average Rainfall per month',
                                fontSize:30
                            },
                            legend:{
                                display:true,
                                position:'right'
                            }
                        }}
                    />
                </div>

            </div>
        );
    }
}



export default Charts;
