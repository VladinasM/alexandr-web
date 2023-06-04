import React from 'react';
import {Card, Image} from "react-bootstrap";
import PersonalData from "../components/PersonalData";
import {observer} from "mobx-react-lite";


const PersonalAccount = observer (() => {
    return (
        <div className="min-vh-100 d-flex justify-content-between">
            <PersonalData/>
        </div>
    );
});

export default PersonalAccount;