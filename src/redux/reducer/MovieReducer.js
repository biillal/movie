import { ALLMOVIES } from '../types/Movie.type';
const initalValue={movies:[],pageCounte:0}
export const MovieReducer =(state=initalValue ,action)=>{
    switch(action.type){
        case ALLMOVIES:
            return{movies:action.data}
            default:
                return state;
    }
}