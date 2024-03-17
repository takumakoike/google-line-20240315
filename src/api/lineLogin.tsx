// LIFFに必要な情報の宣言
import liff from '@line/liff';
const LIFF_ID = "2004006139-5eWAxRAO";

liff.init({
    liffId: LIFF_ID,
});

export function LINE_LOGIN() {
    // LIFFの初期化が完了したら自動でログイン処理を開始
    liff.ready.then(() => {
        if(!liff.isLoggedIn()) {
            liff.login();
        } else {
            // ログイン済みの場合はプロフィールを取得
            _getUserProfile();
        }
    });
}

// ログイン後にユーザープロフィールを取得する関数、非同期処理
async function _getUserProfile() {
    const profile = await liff.getProfile();
    const name = profile.displayName;

    const userElement = document.getElementById("user");
    if (userElement) {
        userElement.textContent = name;
    }
}



















export default LINE_LOGIN();