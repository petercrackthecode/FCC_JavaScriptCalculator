import React from 'react';
import {Key} from './Key.js';

export function KeyPad(props) {
    return (
        <div id='keypad'>
            <Key m_id='clear'/>
            <Key m_id='divide'/>
            <Key m_id='multiply'/>
            <Key m_id='one'/>
            <Key m_id='two'/>
            <Key m_id='three'/>
            <Key m_id='subtract'/>
            <Key m_id='four'/>
            <Key m_id='five'/>
            <Key m_id='six'/>
            <Key m_id='add'/>
            <Key m_id='seven'/>
            <Key m_id='eight'/>
            <Key m_id='nine'/>
            <Key m_id='equals'/>
            <Key m_id='zero'/>
            <Key m_id='decimal'/>
        </div>
    );
}