import { existItem } from "../../common/fonctions";
import { ADD_PANIER, REMOVE_PANIER, REMOVE_ONE_PANIER } from "../type";
import {  } from "../type";


//initialisation de la valeur du state categorie
const initStatePanier = [];


export default function(state=initStatePanier, action) {

    if (action.type == ADD_PANIER) {
        // return State modifié
         return !existItem(state,action.payload.id) ? [...state, action.payload] : state
        
         // if (existItem (state,action.payload.id)) {
        //     return [...state, action.payload];
        // } else {
        //     return  state;
        // }
    } else  if (action.type == REMOVE_PANIER) {
        // vider mon panier
         return action.payload
        // ou return state initial
    } else if (action.type == REMOVE_ONE_PANIER) {
        // vider un element du panier
         
        return state.filter(item => item.id != action.payload.id);
      
    } else {
        return state;
    }

}