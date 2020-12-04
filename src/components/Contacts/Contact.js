import React from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';

const Contact = ({ contact }) => {
    const { name, phone, email, id } = contact;
    return (
        <tr>
            <th>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <label className="custom-control-label"></label>
                </div>
            </th>
            <td><Avatar name={name} size="45" className="mr-2" round={true} />{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="actions">
                <Link to={`/contact/edit/${id}`}>
                    <span className="material-icons">edit</span>
                </Link>
                <Link to={`/contact/edit/${id}`}>
                    <span className="material-icons text-danger">remove_circle</span>
                </Link>
            </td>
        </tr>
    );
};

export default Contact;