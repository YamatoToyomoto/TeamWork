// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const translations = {

    ja: {
        home: "ホーム",
        privacy: "プライバシー",
        post: "投稿",
        list: "一覧",
        detail: "詳細",
        createPost: "ゴミ箱情報投稿",

        // ---- ホーム画面 ----
        badge: "地域の環境を守ろう",
        heroTitle: "ゴミ箱情報共有スレッド",
        heroDescription: "ゴミ箱の問題を投稿して、地域のみんなと共有しよう。",
        viewPosts: "投稿一覧を見る",
        howToUse: "使い方を見る",
        feature1Title: "みんなで情報共有",
        feature1Description: "ゴミ問題や改善アイデアを地域全体で共有できます。",
        feature2Title: "写真を投稿",
        feature2Description: "ゴミ箱の状況や改善後を写真付きで投稿できます。",
        feature3Title: "地域をきれいに",
        feature3Description: "みんなで協力してキレイな街を作ろう。",


        // ---- 翻訳中 ----
        translating: "翻訳中...",
        error: "翻訳に失敗しました",
        unavailable: "AIモデルが利用できません"

    },

    en: {
        home: "Home",
        privacy: "Privacy",
        post: "Post",
        list: "List",
        detail: "Details",
        createPost: "Trash Bin Post",

        // ---- ホーム画面 ----
        badge: "Protect Our Community",
        heroTitle: "Trash Bin Information Sharing",
        heroDescription: "Share trash bin information and help keep tourist areas clean.",
        viewPosts: "View Posts",
        howToUse: "How to Use",
        feature1Title: "Share Information",
        feature1Description: "Share trash-related issues and improvement ideas with the community.",
        feature2Title: "Post Photos",
        feature2Description: "Upload photos of trash bins and environmental improvements.",
        feature3Title: "Keep the Area Clean",
        feature3Description: "Work together to create a cleaner and more beautiful town.",

        // ---- 翻訳中 ----
        translating: "Translating...",
        error: "Translation failed",
        unavailable: "AI model is not available"
    },

    vi: {
        home: "Trang chủ",
        privacy: "Quyền riêng tư",
        post: "Đăng bài",
        list: "Danh sách",
        detail: "Chi tiết",
        createPost: "Đăng thông tin thùng rác",

        // ---- ホーム画面 ----
        badge: "Hãy cùng bảo vệ môi trường địa phương",
        heroTitle: "Diễn đàn chia sẻ thông tin thùng rác",
        heroDescription:
            "Chia sẻ thông tin về thùng rác và cùng cộng đồng giữ gìn môi trường sạch đẹp.",
        viewPosts: "Xem danh sách bài đăng",
        howToUse: "Cách sử dụng",
        feature1Title: "Chia sẻ thông tin",
        feature1Description:
            "Chia sẻ các vấn đề về rác thải và ý tưởng cải thiện với cộng đồng.",
        feature2Title: "Đăng ảnh",
        feature2Description:
            "Đăng ảnh về tình trạng thùng rác và các hoạt động cải thiện môi trường.",
        feature3Title: "Giữ gìn môi trường sạch đẹp",
        feature3Description:
            "Cùng nhau xây dựng một khu vực sạch đẹp hơn.",

        // ---- 翻訳中 ----
        translating: "Đang dịch...",
        error: "Dịch thất bại",
        unavailable: "Không thể sử dụng AI"
    },
};

function applyTranslations() {

    const language =
        localStorage.getItem("language") || "ja";

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            element.textContent =
                translations[language][key];
        });
}