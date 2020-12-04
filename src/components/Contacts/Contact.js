import React from 'react';
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact } from '../Actions/ContactActions';

const Contact = ({ contact, selectAll }) => {
    const { name, phone, email, id } = contact;
    const dispatch = useDispatch();
    return (
        <tr>
            <th>
                <div className="custom-control custom-checkbox">
                    <input checked={selectAll} type="checkbox" className="custom-control-input" />
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
                <a href="#">
                    <span className="material-icons text-danger" onClick={() => dispatch(deleteContact(id))}>remove_circle</span>
                </a>
            </td>
        </tr>
    );
};

export default Contact;