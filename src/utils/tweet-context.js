import React from 'react'

const TweetContext = React.createContext()

function useTweet() {
    const context = React.useContext(TweetContext)
    if (!context) {
      throw new Error(`useCount must be used within a CountProvider`)
    }
    return context
  }

function TweetProvider(props) {
    const [tweets, setTweets] = React.useState([])
    const value = React.useMemo(() => [tweets, setTweets], [tweets])
    return <TweetContext.Provider value={value} {...props} />
  }
  export {TweetProvider, useTweet}