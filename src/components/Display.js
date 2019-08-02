import React from 'react';

export function Display(props) {
    const formulaLength= props.m_formula.length;
    console.log(props.m_formula);
    
    return (
        <div id='display'>
            {props.m_formula}
        </div>
    );
}