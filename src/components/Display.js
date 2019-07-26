import React from 'react';

export function Display(props) {
    return (
        <div id='display'>
            {(props.m_result !== undefined) ? props.m_result : '0'}
        </div>
    );
}