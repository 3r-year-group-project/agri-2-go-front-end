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
        errors.push("field is empty");
        state = false;
    }
    else if(word.length < min){
        state = false;
        errors.push(`should consist of more than ${min} characters`);
        
        
    }
    else if(word.length > max){
        state = false;
        errors.push(`should consist of less than ${max} characters`);
    }

    if(state)
        return {state:state, errors:""};
    else
        return {state:state, errors:errors};
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

/**
 * check if the word is valid email
 * 
 * @param {string} word => word is validate whether a email or not
 * @returns {object} {state:{false => error },errors:{list of errors}}
 */
export const checkEmail=(word)=>{
    let errors = [];
    let state = true;
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(word.length == 0){
        errors.push("field is empty");
        state = false;
    }
    else if(!word.match(validRegex)){
        errors.push("not a valid email address");
        state = false;
    }

    if(state)
        return {state:state, errors:""};
    else
        return {state:state, errors:errors};

}

/**
 * check if first date is greater than the second date
 * 
 * @param {string} firstDate => first date for the comparison
 * @param {string} secondDate => second date for the comparison
 * @return {object} => {state:false , errors:list of errors} => if the first date is less than the second date
 * @return {object} => {state:true , errors:null} => if the first date is greater than the second date
*/
export const isFirstDateGreaterThanSecondDate=(firstDate,secondDate)=>{
    let errors = [];
    if(firstDate.getTime() < secondDate.getTime()){
        errors.push("your date is expired");
        return {state:false, errors: errors};
    }else if(firstDate.getTime() > secondDate.getTime()){
        return {state:true, errors: errors};
    }else{
        errors.push("your date is not valid");
        return {state:false, errors: errors};
    }
}

