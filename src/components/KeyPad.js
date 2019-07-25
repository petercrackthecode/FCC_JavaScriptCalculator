import React from 'react';
import {Key} from './Key.js';

export function KeyPad(props) {
    const keyList= [
        {m_id: 'clear', m_className: ''},
        {m_id: 'divide', m_className: 'operator'},
        {m_id: 'multiply', m_className: 'operator'},
        {m_id: 'one', m_className: 'numkey'},
        {m_id: 'two', m_className: 'numkey'},
        {m_id: 'three', m_className: 'numkey'},
        {m_id: 'subtract', m_className: 'operator'},
        {m_id: 'four', m_className: 'numkey'},
        {m_id: 'five', m_className: 'numkey'},
        {m_id: 'six', m_className: 'numkey'},
        {m_id: 'add', m_className: 'operator'},
        {m_id: 'seven', m_className: 'numkey'},
        {m_id: 'eight', m_className: 'numkey'},
        {m_id: 'nine', m_className: 'numkey'},
        {m_id: 'equals', m_className: ''},
        {m_id: 'zero', m_className: 'numkey'},
        {m_id: 'decimal', m_className: ''},
    ];
    return (
        <div id='keypad'>
            {keyList.map(key => <Key
                                 m_id={key.m_id}
                                 m_className={key.m_className}
                                 onFormulaChange={props.onFormulaChange}
                                 />)}
        </div>
    );
}