export const OPEN_POPUP = 'POPUP_HANDLER'
export const CLOSE_POPUP = 'CLOSE_POPUP'

export const openPopup = (month, date, year) => (
    {
        type: OPEN_POPUP,
        payload: {
            month,
            date,
            year,
        }
    }
)

export const closePopup = () => (
    { type: CLOSE_POPUP }
)