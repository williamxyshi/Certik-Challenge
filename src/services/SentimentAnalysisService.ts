import Sentiment from 'sentiment'
 
/**
 * service that handles 
 */
class SentimenentAnalysisService{
    sentiment = new Sentiment();

    //input array of pre processed strings, return a tuple (positive, neutral, neg)
    textSentimentAnalysis(text: Array<string>){

        text.forEach( tweet => {            
            // var {positive, negative, words} = this.sentiment.analyze(tweet)
            var result = this.sentiment.analyze(tweet)
            
            console.log(result)
        })



        return text
    }



}

export default new SentimenentAnalysisService();