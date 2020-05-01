import ReactDOM from "react-dom";
import React, {Component} from 'react';
import Chart from "react-google-charts";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const columns = [
    {
        type: "number",
        label: "year"
    },
    {
        label: "AttentionSpan",
        type: "number"
    }
];
const rows = [[2015, 5], [2016, 3], [2018, 1]];

class GoogleCharts extends Component {
    constructor(props) {
        super(props);
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
                    <Chart
                        chartType="AreaChart"
                        width="100%"
                        height="400px"
                        legendToggle
                        rows={rows}
                        columns={columns}
                    />
                </div>
            </div>
        );
    }
}

export default GoogleCharts;