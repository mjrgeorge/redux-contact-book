import { CREATE_CONTACT, DELETE_CONTACT, GET_CONTACT, UPDATE_CONTACT } from "../Constant/Types"

//ADD A CONTACT
export const addContact = (contact) => ({
    type: CREATE_CONTACT,
    payload: contact,
});

//GET A CONTACT
export const getContact = (id) => ({
    type: GET_CONTACT,
    payload: id,
});

//UPDATE A CONTACT
export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact,
});

//DELETE A CONTACT
export const deleteContact = (contact) => ({
    type: DELETE_CONTACT,
    payload: contact,
});