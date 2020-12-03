import React from 'react'
import { useSelector } from 'react-redux'
import Contact from './Contact';

function Contacts() {
  const contacts = useSelector(state => state.contacts);
  return (
    <div>
      <table className="table shadow">
        <thead className="bg-danger text-white">
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <label className="custom-control-label"></label>
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
            contacts.map(contact =><Contact key={contact.id} contact={contact}/>)
          }
        </tbody>
      </table>
    </div>
  )
}

export default Contacts
