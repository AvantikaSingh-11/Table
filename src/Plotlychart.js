import React from 'react';
import Plot from 'react-plotly.js';
import Pdf from "react-to-pdf";
const ref = React.createRef();

class Plotlychart extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Pdf targetRef={ref} filename="chart.pdf">
                        {({ toPdf }) => <button onClick={toPdf}>Download chart</button>}
                    </Pdf>
                </div>
                <div ref={ref}>
            <Plot
                data={[
                    {
                        x: [1, 2, 3],
                        y: [2, 6, 3],
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    },
                    {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                ]}
                layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
            />
                </div>
            </div>
        );
    }
}
export default Plotlychart;