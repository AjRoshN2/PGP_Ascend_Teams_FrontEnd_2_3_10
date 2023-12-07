import React from 'react';
import UserSearches from './UserSearches';
import axios from 'axios';
class UserInterests extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }
    componentDidMount(){
      axios.get('http://localhost:9900/api/userdashboard/getUserInterests/3').then((response) => {
            this.setState({ users: response.data})
        });
    }
    render (){
        return (
            <div>
             
                <ul>
               
                        {
                            this.state.users.map(
                                user => 
                                 <li>{user}</li>                                     
                                
                            )
                        }             
</ul>
            </div>

        )
    }
}

export default UserInterests