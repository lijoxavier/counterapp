export const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    INCREMENTBY: "increment_by",
    DECREMENTBY: "decrement_by",
}
export const CounterReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.DECREMENT:
            return {
                count: state.count > 0 ? state.count - 1 : state.count
            }
        case ACTIONS.INCREMENT:
            return {
                count: state.count >= 0 ? state.count + 1 : state.count
            }
        case ACTIONS.INCREMENTBY:
            return {
                count: state.count >= 0 ? state.count + action.payload : state.count
            }
        case ACTIONS.DECREMENTBY:
            return {
                count: state.count > 0 ? state.count - action.payload : state.count
            }
        default:
            return { state }
    }
}
