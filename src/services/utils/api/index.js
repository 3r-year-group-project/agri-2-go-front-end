/***
import setApiEndPoint from './index';
 * @abstract provide completer API path
 * @param {string dest} routes of the api 
 * @return {string} completed path to the routes
 *  
*/

export function setApiPath(dest){
    return "localhost:3002/api" + dest;
}
