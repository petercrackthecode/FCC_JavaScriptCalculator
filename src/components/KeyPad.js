import React from 'react';
import {Key} from './Key.js';

export function KeyPad(props) {
    return (
        <div id='keypad'>
            <Key m_id='clear'/>
            <Key m_id='divide' m_className='operator'/>
            <Key m_id='multiply' m_className='operator'/>
            <Key m_id='one' m_className='numkey'/>
            <Key m_id='two' m_className='numkey'/>
            <Key m_id='three' m_className='numkey'/>
            <Key m_id='subtract' m_className='operator'/>
            <Key m_id='four' m_className='numkey'/>
            <Key m_id='five' m_className='numkey'/>
            <Key m_id='six' m_className='numkey'/>
            <Key m_id='add' m_className='operator'/>
            <Key m_id='seven' m_className='numkey'/>
            <Key m_id='eight' m_className='numkey'/>
            <Key m_id='nine' m_className='numkey'/>
            <Key m_id='equals'/>
            <Key m_id='zero' m_className='numkey'/>
            <Key m_id='decimal'/>
        </div>
    );
}