import axios from 'axios'

/**
 
    API key: WcdhN9xQzuptwlJoOj9xOaIua
    API secret key: 4PaTXIYO5Q1hcauw4Meeimvyvbnam2uNgvIwXLKPoeM6c2iFh4
    bearer token: AAAAAAAAAAAAAAAAAAAAADnWQAEAAAAAvW2EUVw7WJNOnuaVMBFYKaREVNU%3DUeqt0Tbo4INmp9jDtBiMoiMVvg5roLOOwgqayzmDNWILI2GqR3

    certikorg twitter id: 1232319080637616128
 */ 

/**
 * service that handles 
 */
class TwitterService{

    getStartDate(timeAgo){
        var date = new Date()

        switch(timeAgo){
            //1 week ago
            case 'w':{
                date.setDate(date.getDate() - 7 )
                return date.toISOString().slice(0,10) + 'T00:00:00Z';
            }
            //1 month ago
            case 'm':{
                date.setMonth(date.getMonth() - 1 )
                return date.toISOString().slice(0,10) + 'T00:00:00Z';
            }
            //1 year ago
            case 'y':{
                date.setFullYear(date.getFullYear() - 1 )
                return date.toISOString().slice(0,10) + 'T00:00:00Z';
            }
            //all time
            default: return undefined
        }

    }
    
    async getTweets( timeAgo ){
        var date = this.getStartDate(timeAgo)
        var response = await axios.get('https://rocky-brushlands-45638.herokuapp.com/api/tweet/?username=CertikOrg', {
            params:{
                startDate: date
            }
        } )
        return response.data
    }

}

export default new TwitterService();