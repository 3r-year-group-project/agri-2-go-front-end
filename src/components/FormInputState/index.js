import React from 'react';
import styles from '../../assets/styles/FormValidation/formvalidation.css';

export default function InputState(props) {
    var message;
    if(!props.state){
        let msg = props.err.map((i) => <div>i</div>);
        message = <div className={styles.errorBox}>{msg}</div>;
    }else{
        let msg = <div>{props.msg}</div>;
        message = <div className={styles.correctBox}>{msg}</div>;
    }
    return(
        <>
            <div>
                {message}
            </div>
        </>
    );
}