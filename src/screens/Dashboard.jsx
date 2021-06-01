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
    
      <div className="relative min-h-screen flex flex-col">

        {/* 3 column wrapper */}
        <div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
          <div className="flex-1 min-w-0 bg-white xl:flex">
            {/* left bar */}
            <div className="xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-300 bg-white">
              <div className="pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                <div className="flex items-center justify-between">
                  <div className="flex-1 space-y-8">
                    <div className="space-y-8 sm:space-y-0 sm:flex sm:justify-between sm:items-center xl:block xl:space-y-8">
                     
                     
                      {/* Profile */}
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 h-12 w-12">
                          <img
                            className="h-12 w-12 rounded-full"
                            src="https://pbs.twimg.com/profile_images/1396981942311137281/dED92akm_400x400.jpg"
                            alt=""
                          />
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm font-medium text-gray-900">CertikOrg</div>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-col sm:flex-row xl:flex-col">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 xl:w-full"
                        >
                          Refresh Stats
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 xl:ml-0 xl:mt-3 xl:w-full"
                        >
                          Report Account
                        </button>
                      </div>
                    </div>


                    {/* Meta info */}
                    <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-6">
                      <div className="flex items-center space-x-2">
                        <BadgeCheckIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span className="text-sm text-gray-500 font-medium">Pro Member</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CollectionIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span className="text-sm text-gray-500 font-medium">8 Projects</span>
                      </div>
                    </div>




                  </div>
                </div>
              </div>
            </div>

            {/* Projects List */}
            <div className="bg-white lg:min-w-0 lg:flex-1">
              <div className="pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-300 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
                <div className="flex items-center">
                  <h1 className="flex-1 text-lg font-medium">Projects</h1>
                </div>
              </div>

              
           
            </div>
          </div>
          {/* Activity feed */}
          <div className="bg-white pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-300 xl:pr-0">
            <div className="pl-6 lg:w-80">
              <div className="pt-6 pb-2">
                <h2 className="text-sm font-semibold">Activity</h2>
              </div>
              <div>
               
             
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
  