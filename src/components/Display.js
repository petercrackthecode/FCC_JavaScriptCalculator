import React from 'react';

export function Display(props) {
    const formulaLength= props.m_formula.length;
    return (
        <div id='display'>
            {props.m_formula[formulaLength - 1]}
        </div>
    );
}