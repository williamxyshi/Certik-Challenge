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
    
    async getTweets(){
        var response = await axios.get('https://rocky-brushlands-45638.herokuapp.com/api/tweet/?username=CertikOrg', {} )
        return response.data
    }

}

export default new TwitterService();