import React from 'react';
import UserSearches from './UserSearches';

class UserSearchesComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        UserSearches.getSearches().then((response) => {
            this.setState({ users: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Product Searches specific to your profile</h1>
                <center>
                <table >
                    <thead>
                        <tr>

                            <td> Product List</td>
                            
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user}>
                                     <td> {user}</td>   
                                      
                                </tr>
                            )
                        }

                    </tbody>
                </table>
                </center>

            </div>

        )
    }
}

export default UserSearchesComponent