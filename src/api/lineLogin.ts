// LIFFに必要な情報の宣言
import liff from '@line/liff';
const LIFF_ID = "2004006139-5eWAxRAO";


export async function LINE_LOGIN(){

    liff.init({
        liffId: LIFF_ID,
    });

    if(!liff.isLoggedIn()) {
        liff.login();
    }

    liff.getProfile().then( (profile) => {
        const name = profile.displayName;
        const userElement = document.getElementById("user");
        if (userElement) {
            userElement.textContent = name;
        }
    })

}