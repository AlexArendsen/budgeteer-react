import { Actions } from "./actions";

const testingItems = [,
    { id: '123', name: 'Bonefish', description: 'Salmon', amount: 21.60, tags: ['lunch', 'food'], date: new Date(2019, 5, 15) },
    { id: '124', name: 'Cookies', description: 'From Pickles Deli', amount: 6.21, tags: ['food'], date: new Date(2019, 5, 15) },
    { id: '125', name: 'Gas', description: '8.5 gal', amount: 18.61, tags: ['gas'], date: new Date(2019, 5, 13) }
]

export const GetAllItems = () => {
    return (dispatch) => {

        dispatch({ type: Actions.SendGetItems })

        // TODO -- Actually get data from API

        setTimeout(() => dispatch({ type: Actions.ReceiveGetItems, data: testingItems }), 500)

    }
}