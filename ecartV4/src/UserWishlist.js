import React from 'react';
import axios from 'axios';

export default class UserWishlist extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('http://localhost:9900/api/userdashboard/getUserWishlist/abc@abc.com')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person.id}>{person.title}</li>
            )
        }
      </ul>
    )
  }
}