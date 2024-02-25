import React from 'react'
import './ContactList.css'
import { Delete } from '@mui/icons-material'
import { pink } from '@mui/material/colors';

const ContactList = ({contacts,removeContact}) => {
    console.log(contacts);
    const allContacts = contacts?.map((contact) => {
        return(
            <div className="contact-container" key={contact.id}>
                <p className='contact-text'>{contact.contactData.username}</p>
                <p className='contact-text'>{contact.contactData.useremail}</p>
                <span onClick={() => removeContact(contact.id)} className='delete-icon'><Delete sx={{ color: pink[500] }}/></span>
            </div>
        )
    })
  return (
    <div className='contact-list-container'>{allContacts}</div>
  )
}

export default ContactList