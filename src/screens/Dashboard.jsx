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
import Dropdown from '../components/Dropdown';

import WordCloud from '../components/WordCloud';


  
  export default function Example() {
    const [sortDate, setSortDate] = useState('y');

    const [tweets, setTweets] = useState([{},{},{}]);
    const [count, setCount] = useState({});

    const [activity, setActivity] = useState(
      [{date: '2016-01-01', count: 12}]
    );

    // const [negative, setNegative] = useState([]);
    // const [neutral, setNeutral] = useState([]);

    useEffect(() => {
      TwitterService.getTweets(sortDate).then(res=>{
        setTweets([
          res.data.positive,
          res.data.neutral,
          res.data.negative])
        
        setCount(res.data.count)

        var tempActivity = []
        Object.entries(res.activity).forEach( entry =>{
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
    }, [sortDate]);


    var oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() -1);
    const startDate = oneYearAgo.toISOString().split('T')[0]
    const total = count.negative + count.neutral + count.positive

    const positivePercent = ((count.positive)/total) * 100
    const negativePercent = ((count.positive)/total) * 100
    const neutralPercent = ((count.positive)/total) * 100


    return (
      <div className="h-screen">
      <Header/>
      <main>
        <div className="flex max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 flex items-center pl-4 pr-2">
                  <img
                    className="h-10 w-auto"
                    src="https://pbs.twimg.com/profile_images/1396981942311137281/dED92akm_400x400.jpg"
                    alt="Workflow"
                  />
                </div>
          <h1 className="text-3xl font-bold text-green-900 mr-1">CertikOrg</h1>
          <button className="mr-2">
          <a href="https://twitter.com/certikorg?lang=en">
          <svg className="h-6 w-6" fill="#1DA1F2" viewBox="0 0 24 24" >
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
        </a>
        </button>




      
          <Dropdown sortDate={sortDate} setSortDate={setSortDate}/>
        </div>
        <div className="bg-white max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 content-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-xl font-bold text-green-900">Tweet Activity</h1>
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
                
                </div>
            
            <div className="flex flex-row mx-5 h-auto content-center">

                  <div className="bg-white mx-5 h-auto rounded-lg">
                  <a className="text-md font-bold text-green-900">Key Word Sentiment Analysis </a>

                      <Chart style={{marginBottom:30}}count={count}/>
      
                  
                  </div>
                  <div className="bg-white mx-5 h-auto rounded-lg">
                  <a className="text-md font-bold text-green-900">Social Key Words </a>

                    <WordCloud tweets={tweets}/>  

                    
                  </div>
                
              

            </div>
        </div>
      </main>
    
      
           
      </div>
    )
  }
  