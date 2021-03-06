import React from 'react';
import ContactPreview from './ContactPreview';

export default function ContactList(props) {
    return <ul className="contacts-container">
        {props.contacts.map(contact => <ContactPreview key={contact._id} contact={contact}></ContactPreview>)}
    </ul>
}