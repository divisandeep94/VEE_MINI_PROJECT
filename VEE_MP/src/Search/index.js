import React, { Component } from 'react';
import '../App.css';

class SearchComponent extends Component {

    render() {
        let { searchUsers, searchString, createUser } = this.props
        return (
            <div>
                <header className="App-header">
                    <input type="text" className="text-input" placeholder='Search Player..'
                        value={searchString} onChange={e => { searchUsers(e) }} />
                </header>
            </div>
        );
    }
}

export default SearchComponent;