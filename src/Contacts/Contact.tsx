import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

interface ICprops {
    selectedName: String,
    selectedEmail: String,
    handleDelete: (selectedEmail: String)=>void
}

const Contact : React.FunctionComponent<ICprops> = ({selectedName, selectedEmail, handleDelete}) => {
    return (
        <div>
            {selectedName} {selectedEmail}
            <button onClick={()=>handleDelete(selectedEmail)}>Unselect</button>
        
        
        </div>
    );
};

export default Contact;