import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:9900/api/userdashboard/getUserSearches/20';

class UserService {

    getSearches(){
        return axios.get(USERS_REST_API_URL);
    }
}

export default new UserService();