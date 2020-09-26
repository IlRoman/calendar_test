import React, { useRef, useState } from 'react';
import moment from 'moment'
import './calendar.scss';

const Calendar = ({ openPopup }) => {
    let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const [currentDate, setCurrentDate] = useState(new Date());
    let firstDate = useRef(null);

    const nextDateHandler = () => {
        const newDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1))
        setCurrentDate(newDate)
    }

    const prevDateHandler = () => {
        const newDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1))
        setCurrentDate(newDate)
    }

    const getFirstDay = () => {
        return new Date(currentDate.setDate(1)).toString().split(' ')[0]
    }

    const getLastDay = () => {
        let year = currentDate.getFullYear();
        let month = currentDate.getMonth();
        let date = new Date(year, month + 1, 0);
        return date.getDate()
    }

    const getCellDate = (elem, rowIndex, cellIndex) => {
        let date = new Date(currentDate.toString())
        if (rowIndex === 0 && getFirstDay() === elem) {
            if (firstDate.current === null) setCurrentDate(new Date())
            firstDate.current = cellIndex;
            return '01'
        } else if (rowIndex === 0 && getFirstDay() !== elem && cellIndex < firstDate.current) {
            let count = firstDate.current - cellIndex - 1
            date = new Date(date.setDate(-count))
            return date.getDate()
        } else if ((rowIndex + 1) * 7 - firstDate.current - (7 - cellIndex) > getLastDay()) {
            date = new Date(date.setDate(35 - firstDate.current - (7 - cellIndex)))
            date = date.getDate().toString()
            if (date.length === 1) {
                return '0' + date
            } else return date
        } else {
            let date = (rowIndex + 1) * 7 - firstDate.current - (7 - cellIndex - 1)
            if (date.toString().length === 1) {
                return '0' + date
            } else return date
        }
    }

    const getClassNameForDate = (elem, rowIndex, cellIndex) => {
        if (currentDate.getMonth() === new Date().getMonth()
            && currentDate.getFullYear().toString() === moment().format('YYYY')
            && getCellDate(elem, rowIndex, cellIndex).toString() === moment().format('D')
        ) {
            return 'calendar__cell calendar__cell_today'
        } else return 'calendar__cell'
    }

    return (
        <div className="calendar">
            <div className="calendar-nav">
                <button className="calendar-nav__btn" onClick={prevDateHandler}><i className="fas fa-angle-left"></i></button>
                <div className="calendar-nav__month">{moment(currentDate).format('MMMM YYYY')}</div>
                <button className="calendar-nav__btn" onClick={nextDateHandler}><i className="fas fa-angle-right"></i></button>
            </div>
            <hr />
            <div className="table-wrapper">
                {new Array(5).fill('').map((elem, rowIndex) => {
                    return (
                        <div key={rowIndex} className="calendar__row">
                            {daysOfWeek.map((elem, cellIndex) => {
                                return (
                                    <div
                                        className={getClassNameForDate(elem, rowIndex, cellIndex)}
                                        key={cellIndex}
                                        id={`_${cellIndex}`}
                                        onClick={() => openPopup(moment(currentDate).format('MMMM'), getCellDate(elem, rowIndex, cellIndex), moment(currentDate).format('YYYY'))}
                                    >
                                        {getCellDate(elem, rowIndex, cellIndex)}
                                    </div>)
                            })}
                        </div>)
                })}
                <hr />
                <div className="calendar__row">
                    {daysOfWeek.map((elem, index) => {
                        return <div key={index} className="calendar__cell">{elem[0]}</div>
                    })}
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Calendar;