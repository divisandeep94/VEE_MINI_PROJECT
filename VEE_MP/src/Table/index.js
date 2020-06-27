import React, { Component } from 'react';
import Bin from '../images/mini-delete.PNG'
import '../App.css';

const tableRows = [{
    value: 'S.No'
},
{
    value: 'First_Name'
},
{
    value: 'Last_Name'
},
{
    value: 'Marks'
},
{
    value: 'Standard'
}
]

class TableComponent extends Component {

    render() {
        let { usersData, searchString, deleteUser } = this.props
        return (
            <div style={{ marginTop: '30px' }}>
                <table id="customers">
                    <thead>
                        <tr>
                            {tableRows.map((element, index) =>
                                <th key={index}>
                                    {element.value}
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {usersData && usersData.data.map((user, index) => {
                            return (user.student_first_name.toLowerCase().indexOf(searchString.toLowerCase()) != -1 ||
                                user.student_last_name.toLowerCase().indexOf(searchString.toLowerCase()) != -1) &&
                                <tr key={index} style={{ cursor: 'pointer' }}>
                                    <td>{index + 1}</td>
                                    <td>{user.student_first_name}</td>
                                    <td>{user.student_last_name}</td>
                                    <td>{user.marks}</td>
                                    <td>{user.standard}</td>
                                </tr>
                        }
                        )}

                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableComponent;