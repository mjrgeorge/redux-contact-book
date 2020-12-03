import React from 'react'
import { useSelector } from 'react-redux'

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
          </tr>
        </thead>
        <tbody>
          {
            contacts.map(contact =>
              <tr key={contact.id}>
                <th>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <label className="custom-control-label"></label>
                  </div>
                </th>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Contacts
