import liff from '@line/liff';
import calendarStyle from "../styles/calendar.css";
// import { useEffect  } from 'react';

export default function showCalendar() {
    // useEffect( () => {

    // }, [])
        if(liff.isLoggedIn()){
            return (
                <div>
                
            </div>
        )
    } else {
        return (
            <p>ログインしてください</p>
            )
        }
}