import React, { useState } from 'react'
import moment from 'moment'
import './popup.scss'

const Popup = ({ closePopup, clickedEvent, popupData }) => {
    const [month, setMonth] = useState(popupData.month)
    const [day, setDay] = useState(getFullDate())

    function getFullDate() {
        let date = new Date(`${popupData.year}, ${popupData.month}, ${popupData.date}`)
        return moment(date).format('Do dddd')
    }

    const monthChangeHandler = (e) => {
        setMonth(e.target.value)
    }
    const dayChangeHandler = (e) => {
        setDay(e.target.value)
    }

    return (
        <>
            <div className="background"></div>
            <div className="popup">
                <button className="popup__close-btn" onClick={closePopup}>X</button>
                <div>
                    <div className="popup__text">Month</div>
                    <div className="popup__input-wrapper">
                        <input type="text" value={month} onChange={monthChangeHandler} />
                    </div>
                </div>
                <div>
                    <div className="popup__text">Day</div>
                    <div className="popup__input-wrapper">
                        <input type="text" value={day} onChange={dayChangeHandler} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Popup