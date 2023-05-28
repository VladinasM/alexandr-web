import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button} from "react-bootstrap";

const ChooseLevel = observer (() => {
    const {parkingPlace} = useContext(Context)
    return (
        <ListGroup className="d-flex flex-column align-items-center">
            <DropdownButton  id="dropdown-white-button" variant="success"
                            style={{border:"3px solid white", borderRadius:"10px"}} title="Выбрать Этаж">
                <Dropdown.Item href="/level/1">Этаж 1</Dropdown.Item>
                <Dropdown.Item href="/level/2">Этаж 2</Dropdown.Item>
                <Dropdown.Item href="/level/3">Этаж 3</Dropdown.Item>
            </DropdownButton>
        </ListGroup>
    );
});

export default ChooseLevel;