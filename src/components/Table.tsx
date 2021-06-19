import React from "react";
import { UserList as List } from '../App'

const Table: React.FC<List> = (props) => {
    const { items } = props
    return (
        <div className="table table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Position</th>
                    </tr>
                </thead>
                <tbody>
                    { items && items.map((item, i) => (
                        <tr key={i}>
                            <td>{ item.name }</td>
                            <td>{ item.email }</td>
                            <td>{ item.position }</td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    );
}

export default Table;
