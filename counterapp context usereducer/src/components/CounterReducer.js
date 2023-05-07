export const ACTIONS = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    INCREMENTBY: "INCREMENT_BY",
    DECREMENTBY: 'DECREMENT_BY',
    TOGGLETEXT: "CHANGE_TEXT"
}
export const initialState = {
    count: 0,
    text: ""
}
export const CounterReducer = (state, action) => {

    switch (action.type) {
        case ACTIONS.INCREMENT:
            return {
                ...state,
                count: state.count >= 0 ? state.count + 1 : state.count
            }
        case ACTIONS.DECREMENT:
            return {
                ...state,
                count: state.count > 0 ? state.count - 1 : state.count
            }
        case ACTIONS.INCREMENTBY:
            return {
                ...state,
                count: state.count >= 0 ? state.count + action.payload.incrVal : state.count
            }
        case ACTIONS.DECREMENTBY:
            return {
                ...state,
                // count: state.count > 0 ? state.count - action.payload.decrVal : state.count
                // solved count going negative after clicking DECREMENT ..
                count: state.count >= action.payload.decrVal ? state.count - action.payload.decrVal : state.count
            }
        case ACTIONS.TOGGLETEXT:
            return {
                ...state,
                text: !state.text ? "hai" : ""
            }


        default:
            return {
                state
            }
    }

}