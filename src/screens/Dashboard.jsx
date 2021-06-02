/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from 'react';

import TwitterService from '../services/TwitterService'

import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';



import {
  BadgeCheckIcon,
  CollectionIcon,
} from '@heroicons/react/solid'

import Header from '../components/Header';
import Chart from '../components/Chart';
import WordCloud from '../components/WordCloud';


  
  export default function Example() {
    const [{positive, negative, neutral}, setTweets] = useState({});
    const [{activity}, setActivity] = useState({});

    // const [negative, setNegative] = useState([]);
    // const [neutral, setNeutral] = useState([]);

    useEffect(() => {
      TwitterService.getTweets().then(res=>{
        setTweets({
          positive: res.data.positive,
          neutral: res.data.neutral,
          negative: res.data.negative })
          setActivity(res.activity)
        // setPositive(res.data.positive)
        // setNeutral(res.data.neutral)
        // setNegative(res.data.negative)
      })
    }, []);
    return (
      <>
      <Header/>
      <div>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
            <Chart tweets={positive, negative, neutral}/>  
            <CalendarHeatmap
                startDate={new Date('2021-01-01')}
                endDate={new Date('2021-04-01')}
                values={[
                  activity
                  // ...and so on
                ]}
              />  
            <WordCloud/>      
          {/* /End replace */}
        </div>
      </main>
    </div>
    
      
           
      </>
    )
  }
  