import React from 'react';

export function Display(props) {
    return (
        <div id='display'>
            {/*props.m_isDivisionByZero ? 'Division by zero' : ''*/}
            {(props.m_result) ? props.m_result : '0'}
        </div>
    );
}