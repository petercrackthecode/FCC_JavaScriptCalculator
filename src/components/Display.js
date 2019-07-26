import React from 'react';

export function Display(props) {
    return (
        <div id='display'>
            <p id='input'>{props.m_input}</p>
            <p id='result'>{(props.m_result !== undefined) ? props.m_result : '0'}</p>
        </div>
    );
}