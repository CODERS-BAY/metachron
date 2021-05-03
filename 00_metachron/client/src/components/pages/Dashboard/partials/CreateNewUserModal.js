import React from 'react'

function CreateNewUserModal({updateAddClick, addClick}) {

    if (addClick) {
        return (
            <div className="createNewUserModal">
               <h1>is active</h1>
               <div className="modalClose" onClick={() => updateAddClick()}>Close</div>
            </div>
        );
    } 
    return null;
    
}

export default CreateNewUserModal;
