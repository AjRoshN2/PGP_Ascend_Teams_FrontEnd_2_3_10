import React from 'react';
import UserSearches from './UserSearches';
import axios from 'axios';
class UserBrands extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }
    componentDidMount(){
      axios.get('http://localhost:9901/ECartPGPTen/api/ecartp/favBrandsCatg/2').then((response) => {
            this.setState({ users: response.data})
        });
    }
    render (){
        return (
            <div>
                <h5> My Categories</h5>
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

export default UserBrands