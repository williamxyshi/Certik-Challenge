import ReactWordcloud from 'react-wordcloud';

const words = [
    {
      text: 'told',
      value: 64,
    },
    {
      text: 'mistake',
      value: 11,
    },
    {
      text: 'thought',
      value: 16,
    },
    {
      text: 'bad',
      value: 17,
    },
  ]

  const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    fontSizes: [20, 60],

    fontStyle: "normal",
    fontWeight: "normal",
    padding: 3,
    rotations: 1,
    rotationAngles: [0],
  };
  const size = [800, 300];
  
export default function WordCloud(props) {

    /**
     * NEED to move these 3 into async fucntison and launch
     */
    var data = []
    for (let [key, value] of Object.entries(props.tweets[0])) {
        data.push({
            text: key,
            value: value.count
        })
    }
    for (let [key, value] of Object.entries(props.tweets[1])) {
        data.push({
            text: key,
            value: value.count
        })
    }
    for (let [key, value] of Object.entries(props.tweets[2])) {
        data.push({
            text: key,
            value: value.count
        })
    }



    return (
       <div className="bg-yellow-50 p-0 h-auto shadow rounded-lg">
            <ReactWordcloud
            className="p-0 bg-red-1000"
            options={options}
            size={size}
            words={data} />

</div>
   
        
    )
}
  