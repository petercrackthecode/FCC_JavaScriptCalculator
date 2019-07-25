import React from 'react';

export function Display(props) {
    return (
        <div id='display'>
            <p id='formula'>{props.m_formula}</p>
            <p id='result'>{(props.m_result !== undefined) ? props.m_result : '0'}</p>
        </div>
    );
}