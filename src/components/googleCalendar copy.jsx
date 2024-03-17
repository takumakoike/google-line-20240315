import liff from '@line/liff';
import calendarStyle from "../styles/calendar.css";
// import { useEffect  } from 'react';

export default function showCalendar() {
    // useEffect( () => {

    // }, [])
        if(liff.isLoggedIn()){
            return (
                <div>
                <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FTokyo&bgcolor=%23ffffff&showTitle=0&showPrint=0&showCalendars=0&showTz=0&src=YWVlN2NmMTY3ODAyNzhhZjdjNGJkOThiNmVhMjVlMGY4ODVjMTQwOGRlMjI5MGIxNzY3YTVmZTYzNzk0NTMxZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F4511E" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
            </div>
        )
    } else {
        return (
            <p>ログインしてください</p>
            )
        }
}