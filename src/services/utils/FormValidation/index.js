import React from 'react';
/**
 * validate whether the word is valid
 * @param {*} word The  to validate
 * @param {*} min min value need for validate
 * @param {*} max  max value need for validate
 * @returns {object} {state:{true => no error : false => error}, errors:{array}}
 * 
 */
export const checkWord=(word,min,max) => {
    let errors = [];
    let state = true;
    if(word.length === 0){
        erros.push("field is empty");
        erros.push(<br/>)
        state = false;
    }
    else if(word.length < min){
        state = false;
        errors.push(`should consist of more than ${min} characters`);
        errors.push(<br/>)
        
    }
    else if(word.length > max){
        state = false;
        errors.push(`should consist of less than ${max} characters`);
    }

    if(state)
        return {state:state, errors:""};
    else
        return {state:state, errors:err};
}

/**
 * match with exact number of characters
 * @param {*} word word to validata 
 * @param {*} len  word length to validata
 * @returns {object} {state:{false => error },errors:{list of errors}}
 */
export const checkWordExactLen=(word,len)=>{
    if(word.length > len)
        return {state:false,errors:"word length is too long"};
    else if(word.length < len)
        return {state:false,errors:"word length is too short"};
    else
        return {state:true, errors:""};

}

export const checkEmail=(word)=>{
    let errors = [];
    let state = true;
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(word.length == 0){
        errors.push(<div>field is empty<br/></div>);
        state = false;
    }
    else if(!word.match(validRegex)){
        errors.push(<div>not a valid email address</div>);
        state = false;
    }

    if(state)
        return {state:state, errors:""};
    else
        return {state:state, errors:err};

}


