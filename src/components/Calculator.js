import React from 'react';

export function Calculator(props) {
    return (
        <div id='calculator'>
            {props.children}
        </div>
    );
}