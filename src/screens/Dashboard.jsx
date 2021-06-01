/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from 'react';

import TwitterService from '../services/TwitterService'


import {
  BadgeCheckIcon,
  CollectionIcon,
} from '@heroicons/react/solid'

import Header from '../components/Header';
import Chart from '../components/Chart';
import WordCloud from '../components/WordCloud';



const projects = [
  {
    name: 'Workcation',
    href: '#',
    siteHref: '#',
    repoHref: '#',
    repo: 'debbielewis/workcation',
    tech: 'Laravel',
    lastDeploy: '3h ago',
    location: 'United states',
    starred: true,
    active: true,
  },
  // More projects...
]
const activityItems = [
  { project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
  // More items...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


  
  export default function Example() {
    const [{positive, negative, neutral}, setTweets] = useState({});
    // const [negative, setNegative] = useState([]);
    // const [neutral, setNeutral] = useState([]);

    useEffect(() => {
      TwitterService.getTweets().then(res=>{
        setTweets({
          positive: res.data.positive,
          neutral: res.data.neutral,
          negative: res.data.negative })
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
          {/* /End replace */}
        </div>
      </main>
    </div>
    
      
           
      </>
    )
  }
  