import { existItem } from "../../common/fonctions";
import { ADD_ARTICLE } from "../type";


//initialisation de la valeur du state article
const initStateArticles = [];


export default function(state=initStateArticles, action) {

    if (action.type == ADD_ARTICLE) {
        // return nextState
       return !existItem(state, action.payload.id) ? [...state,action.payload] : state;
        
    } else {
        return state;
    }

}