import { OPEN_POPUP, CLOSE_POPUP } from '../redux/actions'

const initialState = {
    popupIsOpened: false,
    popupData: {
        year: null,
        month: null,
        date: null,
    }
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_POPUP: {
            return {
                ...state,
                popupIsOpened: true,
                popupData: {
                    ...state.popupData,
                    year: action.payload.year,
                    month: action.payload.month,
                    date: action.payload.date,
                },
            }
        }
        case CLOSE_POPUP:
            return {
                ...state,
                popupIsOpened: false,
                popupData: {
                    ...state.popupData,
                    year: null,
                    month: null,
                    date: null,
                },
            }
        default: return state
    }
}