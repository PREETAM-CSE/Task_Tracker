
import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

const initialState={
    todos:[
        {
            "text" : "Meeting at 11 AM",
            "completed" : true
        },
        {
            "text" : "Lunch at 2 PM",
            "completed" : false
        },
    ],
}

export function todoReducer(state=initialState, action){

    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos:[
                    ...state.todos,
                    {
                        text:action.text,
                        completed: false
                    }
                ]
            }
        case TOGGLE_TODO:
            return{
                ...state,
                todos: state.todos.map((todo, i)=>{
                    if(i==action.index){
                        todo.completed=!todo.completed
                    }
                    return todo;
                })
            }
        default:
            return state;
    }
}