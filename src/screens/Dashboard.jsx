/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from 'react';

import TwitterService from '../services/TwitterService'

import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

import ReactTooltip from 'react-tooltip';




import {
  BadgeCheckIcon,
  CollectionIcon,
} from '@heroicons/react/solid'

import Header from '../components/Header';
import Chart from '../components/Chart';
import WordCloud from '../components/WordCloud';


  
  export default function Example() {
    const [{positive, negative, neutral}, setTweets] = useState({});
    const [activity, setActivity] = useState(
      [{date: '2016-01-01', count: 12}]
    );

    // const [negative, setNegative] = useState([]);
    // const [neutral, setNeutral] = useState([]);

    useEffect(() => {
      TwitterService.getTweets().then(res=>{
        setTweets({
          positive: res.data.positive,
          neutral: res.data.neutral,
          negative: res.data.negative })

        var tempActivity = []
        Object.entries(res.activity).forEach( entry =>{
          console.log(entry)
          tempActivity.push({
              date: entry[0],
              count: entry[1]
            })
        })
        setActivity(tempActivity)

        // setPositive(res.data.positive)
        // setNeutral(res.data.neutral)
        // setNegative(res.data.negative)
      })
    }, []);


    var oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() -1);
    const startDate = oneYearAgo.toISOString().split('T')[0]

    return (
      <>
      <Header/>
      <div>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">CertikOrg</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <h1 className="text-xl font-bold text-gray-900">Twitter Activity</h1>
          <CalendarHeatmap
                startDate={startDate}
                endDate={new Date()}
                values={activity}
                showWeekdayLabels={true}
                classForValue={value => {
                  if (!value) {
                    return 'color-empty';
                  }
                  return `color-github-${value.count}`;
                }}
                tooltipDataAttrs={value => {
                  return {
                    'data-tip': `${
                      value.count
                    }`,
                  };
                }}
              />  <ReactTooltip/>
            <Chart tweets={positive, negative, neutral}/>  

            <WordCloud/>      
          {/* /End replace */}
        </div>
      </main>
    </div>
    
      
           
      </>
    )
  }
  