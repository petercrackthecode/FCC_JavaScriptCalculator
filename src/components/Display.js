import React from 'react';

export function Display(props) {
    let formulaLength= props.m_formula.length;
    console.log("formulaLength= " + formulaLength);
    console.log("Hi");
    console.log(props.m_formula);
    console.log(props.m_formula[formulaLength - 1]);

    return (
        <div id='display'>
            {formulaLength ? props.m_formula[formulaLength - 1] : props.m_result}
        </div>
    );
}