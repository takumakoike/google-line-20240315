alert("ファイルが開かれました")

// LIFFに必要な情報の宣言
import liff from '@line/liff';
import { useEffect } from 'react';
const LIFF_ID = "2004006139-5eWAxRAO";
console.log("これはTypescriptファイルです")


function LINE_LOGIN(){
    console.log("これはTypescriptファイルの関数です")

    // DOMのマウントが行われたら処理を行うのでuseEffectで対応
    // useEffect( () => {
        liff.init({
            liffId: LIFF_ID,
        });
    // })

    // LIFFの初期化が完了したら自動でログイン処理を開始
    liff.ready.then(() => {
        if(!liff.isLoggedIn()) {
            liff.login();
        } else {
            // ログイン済みの場合はプロフィールを取得
            getUserProfile();
        }
    });

    // ログイン後にユーザープロフィールを取得する関数
    async function getUserProfile() {
        const profile = await liff.getProfile();
        const name = profile.displayName;
        const userElement = document.getElementById("user");
        if (userElement) {
            userElement.textContent = name;
        }
    }
}

LINE_LOGIN();