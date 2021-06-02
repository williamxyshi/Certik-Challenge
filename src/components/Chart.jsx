import { PieChart } from 'react-minimal-pie-chart';
  
export default function Chart(props) {
    // console.log(props.count)
    const total = props.count.negative + props.count.neutral + props.count.positive

    const nonNegativePercent = ((props.count.neutral + props.count.positive)/total) * 100

    return (
        <div className="bg-yellow-50 py-3 h-auto text-center shadow rounded-lg">
            <PieChart
                data={[
                { title: 'Positive', value: props?props.count.positive:' ', color: '#00FF00', percent: (((props.count.positive)/total) * 100).toFixed(2) },
                { title: 'Negative', value: props?props.count.negative:' ', color: '#FF0000', percent: (((props.count.negative)/total) * 100).toFixed(2) },
                { title: 'Neutral', value: props?props.count.neutral:' ', color: '#5a5a5a', percent: (((props.count.neutral)/total) * 100).toFixed(2) },
                ]}
                lengthAngle={-360} 
                lineWidth={15}
                label={({ dataEntry }) => { return dataEntry.title + ': '+ dataEntry.percent }}
                labelStyle={( dataEntry ) => ({
                    fontSize: '5px',

                  })}
                  radius={42}
                  labelPosition={60}
            
                animate
            />    

            <a className="text-sm font-bold text-green-900">Non Negative Recognition: {nonNegativePercent.toFixed(2)}%</a>

            </div>
    )
}
  