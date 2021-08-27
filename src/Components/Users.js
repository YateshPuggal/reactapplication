import React from 'react'

import { Route, Link } from 'react-router-dom'
import User1 from './User1';
import User2 from './User2';
const User = ({ match }) => <p>{match.params.id}</p>

class Users extends React.Component {
    render() {
        const { url,path } = this.props.match;
        return (
            <div>
                <h1>Users</h1>
                <strong>select a user</strong>
                <ul>
                    <li>
                        <Link to={url +"/1"}>User 1 </Link>
                    </li>
                    <li>
                        <Link to={url +"/1"}>User 2 </Link>
                    </li>
                    <li>
                        <Link to={url +"/1"}>User 3 </Link>
                    </li>
                </ul>
               
                <Route path={path +"/:id"} component={User1} />
                <Route path={path +"/:id"} component={User2} />
                
                
               
            </div>
        )
    }
}

export default Users