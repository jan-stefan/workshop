import React from 'react';
import style from './style.css';
import {Button, FormControl, FormGroup} from 'react-bootstrap';

const Centering = props => (
    <div className={style.App}>
        {props.children}
    </div>
)

export default Centering;