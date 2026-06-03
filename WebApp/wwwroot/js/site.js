// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const translations = {

    ja: {
        // ---- ヘッダー ----
        home: "ホーム",
        privacy: "プライバシー",
        post: "投稿",
        list: "一覧",
        detail: "詳細",
        createPost: "ゴミ箱情報投稿",
        login: "ログイン",
        logout: "ログアウト",
        guest: "ゲスト",

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
        unavailable: "AIモデルが利用できません",


        // ---- 投稿一覧 ----
        author: "投稿者",
        detail: "詳細を見る",
        trash_app_title: "ゴミ箱アプリ",
        post_list: "投稿一覧",
        new_post: "＋ 新規投稿",


        // ---- 投稿画面 ----
        app_title: "ゴミ箱アプリ",
        new_post: "新規投稿",
        back_to_list: "一覧に戻る",
        post_form_title: "ゴミ箱情報を投稿",
        post_form_subtitle: "ゴミ箱の位置情報を共有してください",
        place: "場所",
        description: "場所説明",
        upload_photo: "写真をアップロード",
        click_select: "クリックして写真を選択",
        file_support: "JPG・PNG対応",
        submit_post: "投稿する",
        place_placeholder: "例：渋谷駅南口",
        location_placeholder: "例：札幌駅の南口にある公園の横です",


    },

    en: {
        // ---- ヘッダー ----
        home: "Home",
        privacy: "Privacy",
        post: "Post",
        list: "List",
        detail: "Details",
        createPost: "Trash Bin Post",
        login: "Login",
        logout: "Logout",
        guest: "Guest",


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
        unavailable: "AI model is not available",


        // ---- 投稿一覧 ----
        author: "Author",
        detail: "View Details",
        trash_app_title: "Trash App",
        post_list: "Posts",
        new_post: "+ New Post",


        // ---- 投稿画面 ----
        app_title: "Trash App",
        new_post: "New Post",
        back_to_list: "Back to List",
        post_form_title: "Create Trash Report",
        post_form_subtitle: "Share trash bin location information",
        place: "Place",
        description: "Description",
        upload_photo: "Upload Photo",
        click_select: "Click to select image",
        file_support: "JPG / PNG supported",
        submit_post: "Submit",
        place_placeholder: "e.g. Train station or public area",
        location_placeholder: "e.g. Next to a park, near a subway exit",


    },

    vi: {
        // ---- ヘッダー ----
        home: "Trang chủ",
        privacy: "Quyền riêng tư",
        post: "Đăng bài",
        list: "Danh sách",
        detail: "Chi tiết",
        createPost: "Đăng thông tin thùng rác",
        login: "Đăng nhập",
        logout: "Đăng xuất",
        guest: "Khách",


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
        unavailable: "Không thể sử dụng AI",


        // ---- 投稿一覧 ----
        author: "Tác giả",
        detail: "Xem chi tiết",
        trash_app_title: "Ứng dụng rác",
        post_list: "Danh sách bài đăng",
        new_post: "+ Bài viết mới",


        // ---- 投稿画面 ----
        app_title: "Ứng dụng rác",
        new_post: "Bài viết mới",
        back_to_list: "Quay lại danh sách",
        post_form_title: "Đăng thông tin thùng rác",
        post_form_subtitle: "Chia sẻ vị trí thùng rác",
        place: "Địa điểm",
        description: "Mô tả",
        upload_photo: "Tải ảnh lên",
        click_select: "Nhấn để chọn ảnh",
        file_support: "Hỗ trợ JPG/PNG",
        submit_post: "Đăng bài",
        place_placeholder: "VD: Ga tàu hoặc khu công cộng",
        location_placeholder: "VD: Gần lối ra ga tàu hoặc công viên",
    },

    
};


function applyTranslations() {
    const lang = localStorage.getItem("language") ?? "ja";
    const dict = translations[lang];

    // テキスト翻訳
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            el.innerText = dict[key];
        }
    });

    // ⭐ placeholder翻訳（追加）
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (dict[key]) {
            el.placeholder = dict[key];
        }
    });
}