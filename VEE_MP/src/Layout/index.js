import React, { Component } from 'react';
import _ from 'lodash'
import '../App.css';
import { connect } from 'react-redux'
import SearchComponent from '../Search'
import TableComponent from '../Table'
import { getUsers, updateUserList } from '../Actions'

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
            addUser: false,
            usersData: []
        }
        this.searchUsers = this.searchUsers.bind(this)
    }
    searchUsers = (event) => {
        event.stopPropagation();
        let value = event.target.value
        this.setState({ searchString: value })
    }

    componentDidMount() {
        this.props.getUsers()
    }

    componentDidUpdate() {
        const { usersData } = this.props
        if (!_.isEmpty(usersData) && !_.isEqual(usersData.data, this.state.usersData.data)) {
            this.setState({ usersData: usersData, addUser: false })
            console.log('called..')
        }
    }
    render() {
        // let {usersData} = this.props
        let { searchString, addUser, usersData } = this.state
        return (
            <div style={{ marginTop: '30px' }}>
                {_.isEqual(addUser, false) &&
                    <SearchComponent
                        searchUsers={this.searchUsers}
                        searchString={searchString}
                        createUser={this.createUser}
                        cancelCreate={this.cancelCreate}
                    />
                }
                {!_.isEmpty(usersData) &&
                    <TableComponent
                        usersData={usersData}
                        searchString={searchString}
                        deleteUser={this.deleteUser}
                    />
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => { return { usersData: state } }

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => {
            dispatch(getUsers())
        },
        updateUserList: (data) => {
            dispatch(updateUserList(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);