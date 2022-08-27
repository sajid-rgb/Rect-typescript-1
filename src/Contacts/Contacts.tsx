import React from 'react';

interface IProps {
    name: String,
    email?: String
}
const Contacts = ({name, email = 'N/A'}: IProps) => {
    return (
        <div>
            <strong>Name: {name}</strong>
            <strong>Email: {email}</strong>
        </div>
    );
};

export default Contacts;