import React from 'react';

export default function ErrorMsg(props) {
    const msg = [];
    props.errors.forEach(element => {
            msg.push(
                <>
                    {element}<br />
                </>
            );
    });
    return (<>{msg}</>);
        
}