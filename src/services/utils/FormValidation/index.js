/**
import { checkWord } from './index';
 * validate whether the word is valid
 * @param {*} word The  to validate
 * @param {*} min min value need for validate
 * @param {*} max  max value need for validate
 * @returns {object} {state:{true => no error : false => error}, error list:{array}}
 * 
 */
export const checkWord=(word,min,max) => {
    let err = [];
    let state = true;
    if(word.length === 0){
        err.push("field is empty");
        state = false;
    }
    else if(word.length < min){
        state = false;
        err.push(`should consist of more than ${min} characters`);
    }else if(word.length > max){
        state = false;
        err.push(`should consist of less than ${max} characters`);
    }

    if(state)
        return {state:state, msg:"good to go"};
    else
        return {state:state, err:err};
}

/**
 * match with exact number of characters
 * @param {*} word word to validata 
 * @param {*} len  word length to validata
 * @returns {object} {state:{false => error },err:{list of errors}}
 */
export const checkWordExactLen=(word,len)=>{
    if(word.length > len)
        return {state:false,err:"word length is too long"};
    else if(word.length < len)
        return {state:false,err:"word length is too short"};
    else
        return {state:true, msg:"good to go"};

}

export const checkEmail=(word)=>{
    let err = [];
    let state = true;
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(word.length == 0){
        err.push("field is empty");
        state = false;
    }
    else if(!word.match(validRegex)){
        err.push("not a valid email address");
        state = false;
    }

    if(state)
        return {state:state, msg:"good to go"};
    else
        return {state:state, err:err};

}


