import { PieChart } from 'react-minimal-pie-chart';
  
export default function Chart(positive, negative, neutral) {
    console.log(positive)

    const positivePercent = 0

    return (
        <div className="max-w-sm mx-auto px-4 sm:px-6 lg:px-8">
            <PieChart
                data={[
                { title: 'One', value: 10, color: '#E38627' },
                { title: 'Two', value: 15, color: '#C13C37' },
                { title: 'Three', value: 20, color: '#6A2135' },
                ]}
            />    
        
        </div>


    )
}
  