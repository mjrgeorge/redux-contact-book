import { CLEAR_CONTACT, CREATE_CONTACT, DELETE_CONTACT, DELETE_SELECTED_CONTACT, GET_CONTACT, SELECT_CONTACT, UPDATE_CONTACT } from "../Redux/Constant/Types"

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

//SELECT ALL CONTACT
export const selectAllContact = (id) => ({
    type: SELECT_CONTACT,
    payload: id,
});

//CLEAR SELECTED CONTACT
export const clearAllContact = () => ({
    type: CLEAR_CONTACT,
});

//DELETE SELECTED CONTACT
export const deleteAllContact = () => ({
    type: DELETE_SELECTED_CONTACT,
});