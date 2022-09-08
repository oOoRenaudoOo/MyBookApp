import { existItem } from "../../common/fonctions";
import { ADD_CATEGORIE } from "../type";


//initialisation de la valeur du state categorie
const initStateCategories = [];


export default function(state=initStateCategories, action) {

    if (action.type == ADD_CATEGORIE) {
        // return State modifié
         return !existItem(state,action.payload.id) ? [...state, action.payload] : state
        
         // if (existItem (state,action.payload.id)) {
        //     return [...state, action.payload];
        // } else {
        //     return  state;
        // }
    } else {
        //return state initial
        return state;
    }

}