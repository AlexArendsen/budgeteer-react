import { Actions } from "../actions/actions";
import { DataStates } from "../../values/data-stats";

const reducers = {
    [Actions.SendGetItems]: (s, a) => ({ ...s, records: DataStates.Loading }),
    [Actions.ReceiveGetItems]: (s, a) => ({ ...s, records: a.data })
}

const defaultState = {
    records: DataStates.Unloaded
}

export const itemReducer = (state = defaultState, action) => {
    const noop = (state, action) => state
    return (reducers[action.type] || noop)(state, action)
}