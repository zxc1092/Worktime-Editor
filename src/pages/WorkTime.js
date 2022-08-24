import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCompleteData, setDayHours } from "../redux/reducer/checkout";

const possibleTimes = [
    '4:00',
    '5:00',
    '6:00',
    '7:00',
    '8:00',
    '9:00',
    '10:00',
    '11:00',
    '12:00',
];

const defaultStartTime = "8:00"
const defaultEndTime = "5:00"

export default function Checkout(){
    const dispatch = useDispatch();
    const possibleDays = useSelector(getCompleteData);
    const [dropdownDay, setDropdownDay] = useState();
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const onDayChange = (e) => {
        const index = parseInt(e.target.value, 10)
        setDropdownDay(index);
    }

    const onStartChange = (e) => {
        setStartTime(e.target.value);
    }

    const onEndChange = (e) => {
        setEndTime(e.target.value);
    }

    const submitChange = () => {
        dispatch(setDayHours({index: dropdownDay, startTime: startTime, endTime: endTime}));
    }


    return (
        <>
            <h1>Business</h1>
            <div className="selection-container">
            <select value={dropdownDay} onChange={onDayChange}>
                <option value="">Select a Day</option>
                {possibleDays && possibleDays.map((item, index) => <option value={index}>{item.day}</option>)}
            </select>
            <div>
                <select value={startTime} onChange={onStartChange}>
                    <option value="">Use default time({defaultStartTime})</option>
                    {['Closed', ...possibleTimes].map((item) => <option value={item}>{item}</option>)}
                </select>
                <select value={endTime} onChange={onEndChange}>
                    <option value="">Use default time({defaultEndTime})</option>
                    {possibleTimes.map((item) => <option value={item}>{item}</option>)}
                </select>
            </div>
            <button onClick={() => submitChange()}>Submit</button>
            </div>

            <div>
                <h2>This week work times</h2>
                {possibleDays && possibleDays.map(item => 
                    <div>
                        {item.day}<br/>
                        {item.overrideStartTime || defaultStartTime}
                        {item.overrideStartTime !== 'Closed' && '-'}
                        {item.overrideStartTime !== 'Closed'?(item.overrideEndTime || defaultEndTime): ''}</div>)
                }
            </div>
        </>
    );
}
