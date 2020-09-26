import React from 'react'
import { connect } from 'react-redux'
import './main.scss'
import Calendar from '../calendar/Calendar'
import Popup from '../popup/Popup'
import { openPopup, closePopup } from '../../redux/actions'

const Main = ({ popupIsOpened, openPopup, closePopup, popupData }) => {
    return (
        <>
            <div className="main" style={{ backgroundImage: 'url("./img/Untitled-1Artboard 1 copy.jpg")' }}>
                <div className="text-container">
                    <div className="text-container__top-text">Choose the day for the meeting</div>
                    <div className="text-container__bottom-text">We encourage you to book your appointment online.<br /> This will save you time.</div>
                </div>
                <div className="calendar-wrapper">
                    <Calendar openPopup={openPopup} closePopup={closePopup} />
                </div>
            </div>
            {popupIsOpened &&
                <Popup closePopup={closePopup} popupData={popupData} />}
        </>
    )
}

const mapStateToProps = state => ({
    popupIsOpened: state.popupIsOpened,
    popupData: state.popupData,
})

const mapDispatchToProps = {
    openPopup,
    closePopup,
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)