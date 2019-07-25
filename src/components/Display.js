import React from 'react';

export function Display(props) {
    return (
        <div id='display'>
            <p>{props.m_formula}</p>
            <p>{(props.m_result !== '') ? props.m_result : '0'}</p>
        </div>
    );
}