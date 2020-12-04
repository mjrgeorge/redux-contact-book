import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getContact, updateContact } from '../Redux/Actions/ContactActions';

const EditContact = () => {
    const dispatch = useDispatch();
    const contact = useSelector((state)=>state.contact.contact);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const {id} = useParams();
    
    useEffect(() => { 
        if(contact!=null){
            setName(contact.name);
            setEmail(contact.email);
            setPhone(contact.phone);
        }
        dispatch(getContact(id))
    }, [contact]);

    let history = useHistory();

    const handleUpdateContact = (e)=>{
        e.preventDefault();
        const update_contact = Object.assign(contact, {
            name: name,
            email: email,
            phone: phone
        })
        dispatch(updateContact(update_contact));
        history.push('/');
    }

    return (
        <div className="card border-0 shadow">
            <div className="card-header">Add Contact</div>
            <div className="card-body">
                <form onSubmit={handleUpdateContact}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-warning">Update Contact</button>
                </form>
            </div>
        </div>
    );
};

export default EditContact;