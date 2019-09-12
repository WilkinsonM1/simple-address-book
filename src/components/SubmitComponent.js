import React from 'react'
import DisplayComponent from "./DisplayComponent"
import { tsPropertySignature } from '@babel/types';

const SubmitComponent = (props) => {
    return (
        <div>
            <button onClick= {props.submitHandler}>Submit</button>
        </div>
        
    )
}

export default SubmitComponent;