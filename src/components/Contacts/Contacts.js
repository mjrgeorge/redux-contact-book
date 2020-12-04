import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAllContact, deleteAllContact, selectAllContact } from '../Actions/ContactActions';
import Contact from './Contact';

function Contacts() {
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);
  const contacts = useSelector(state => state.contact.contacts);
  const selectedContacts = useSelector(state => state.contact.selectedContacts);
  useEffect(() =>{
    if(selectAll){
      dispatch(selectAllContact(contacts.map(contact =>contact.id)));
    }else{
      dispatch(clearAllContact());
    }
  }, [selectAll]);

  return (
    <div>
      {
        selectedContacts.length > 0 
        ?
        <button onClick={() =>dispatch(deleteAllContact())} className="btn btn-danger mb-3">Delete All</button>
        : null
      }
      <table className="table shadow">
        <thead className="bg-danger text-white">
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input id="selectAll" value={selectAll} type="checkbox" className="custom-control-input" />
                <label htmlFor="selectAll" className="custom-control-label" onClick={()=>setSelectAll(!selectAll)}></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.map(contact => <Contact key={contact.id} contact={contact} selectAll={selectAll}/>)
          }
        </tbody>
      </table>
    </div>
  )
}

export default Contacts
