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
        lang_ja: "日本語",
        lang_en: "英語",
        lang_vi: "ベトナム語",


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
        translate: "🌐 翻訳",
        translated: "✅ 翻訳済",
        original: "↩ 原文",
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


        // ---- 詳細画面 ----
        comments: "コメント",
        comment_list: "コメント一覧",
        edit: "編集",
        delete: "削除",
        back_to_list: "一覧へ戻る",



        // ---- プライバシー ----
        privacy_title: "📄 利用規約・プライバシーポリシー",
        policy_date: "制定日：2026年6月3日",

        section1_title: "1. サービスについて",
        section1_text: "本サービス（以下「本アプリ」）は、観光地周辺のごみ箱の位置情報を利用者同士で共有し、観光地の美化およびポイ捨て防止に貢献することを目的としています。",

        section2_title: "2. 投稿について",
        section2_intro: "利用者は、ごみ箱の位置情報、写真、コメント等を投稿できます。",
        section2_prohibited: "以下の内容を含む投稿は禁止します。",
        prohibited1: "他人を誹謗中傷する内容",
        prohibited2: "個人情報を含む内容",
        prohibited3: "虚偽または不正確な情報",
        prohibited4: "法令または公序良俗に反する内容",
        prohibited5: "本アプリの目的と関係のない内容",
        prohibited6: "その他、運営者が不適切と判断した内容",
        section2_footer: "運営者は、上記に該当すると判断した投稿を事前の通知なく削除できるものとします。",

        section3_title: "3. 個人情報について",
        section3_text1: "本アプリでは、利用者登録機能を設けているため、メールアドレス等の情報を登録いただきます。",
        section3_text2: "取得した情報はログイン機能およびサービス運営のために利用します。",
        section3_text3: "投稿内容に個人情報を記載しないようお願いいたします。",

        section4_title: "4. 投稿画像について",
        section4_text1: "利用者が投稿した画像は本アプリ内で表示されます。",
        section4_text2: "個人を特定できる情報が写り込まないようご注意ください。",

        section5_title: "5. 免責事項",
        section5_text1: "本アプリに掲載されるごみ箱情報について、正確性・完全性・最新性を保証するものではありません。",
        section5_text2: "実際の状況と異なる場合があります。",
        section5_text3: "本アプリの利用によって発生した損害について、運営者は責任を負いません。",

        section6_title: "6. 著作権について",
        section6_text1: "利用者が投稿した文章および画像の著作権は投稿者本人に帰属します。",
        section6_text2: "ただし、本アプリの運営・改善・紹介のために利用する場合があります。",

        section7_title: "7. サービスの変更・停止",
        section7_text: "運営者は事前の通知なく本アプリの内容変更、一時停止または終了を行う場合があります。",

        section8_title: "8. 規約の変更",
        section8_text1: "運営者は必要に応じて本規約を変更できるものとします。",
        section8_text2: "変更後の規約は本アプリ上に掲載した時点で効力を生じます。",

        section9_title: "9. お問い合わせ",
        section9_text: "本アプリに関するお問い合わせは、ゴミ箱アプリ開発チームまでお願いいたします。",

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
        lang_ja: "Japanese",
        lang_en: "English",
        lang_vi: "Vietnamese",


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
        translate: "🌐 Translate",
        translated: "✅ Translated",
        original: "↩ Original",
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


        // ---- 詳細画面 ----
        comments: "Comments",
        comment_list: "Comment List",
        edit: "Edit",
        delete: "Delete",
        back_to_list: "Back to List",


        // ---- プライバシー ----
        privacy_title: "📄 Terms of Service & Privacy Policy",
        policy_date: "Effective Date: June 3, 2026",

        section1_title: "1. About the Service",
        section1_text: "This application aims to allow users to share trash bin locations around tourist areas and contribute to cleaner environments and litter prevention.",

        section2_title: "2. User Posts",
        section2_intro: "Users may post trash bin locations, photos, and comments.",
        section2_prohibited: "The following content is prohibited:",
        prohibited1: "Harassment or defamation",
        prohibited2: "Personal information",
        prohibited3: "False or inaccurate information",
        prohibited4: "Content violating laws or public order",
        prohibited5: "Content unrelated to the purpose of this application",
        prohibited6: "Any other inappropriate content determined by administrators",
        section2_footer: "Administrators may remove such content without prior notice.",

        section3_title: "3. Personal Information",
        section3_text1: "This application collects information such as email addresses for user registration.",
        section3_text2: "Collected information is used for login functionality and service operation.",
        section3_text3: "Please do not include personal information in posts.",

        section4_title: "4. Uploaded Images",
        section4_text1: "Images uploaded by users may be displayed within the application.",
        section4_text2: "Please ensure that personally identifiable information is not visible in images.",

        section5_title: "5. Disclaimer",
        section5_text1: "We do not guarantee the accuracy, completeness, or timeliness of trash bin information.",
        section5_text2: "Actual conditions may differ from posted information.",
        section5_text3: "The operators are not responsible for damages resulting from use of this application.",

        section6_title: "6. Copyright",
        section6_text1: "Copyright of uploaded text and images belongs to the user who posted them.",
        section6_text2: "However, content may be used for operation, improvement, or promotion of the application.",

        section7_title: "7. Service Changes and Suspension",
        section7_text: "The operators may modify, suspend, or terminate the application without prior notice.",

        section8_title: "8. Changes to Terms",
        section8_text1: "The operators may revise these terms when necessary.",
        section8_text2: "Updated terms become effective once published within the application.",

        section9_title: "9. Contact",
        section9_text: "For inquiries regarding this application, please contact the Trash App Development Team.",

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
        lang_ja: "Tiếng Nhật",
        lang_en: "Tiếng Anh",
        lang_vi: "Tiếng Việt",


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
        translate: "🌐 Dịch",
        translated: "✅ Đã dịch",
        original: "↩ Bản gốc",
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


        // ---- 詳細画面 ----
        comments: "Bình luận",
        comment_list: "Danh sách bình luận",
        edit: "Chỉnh sửa",
        delete: "Xóa",
        back_to_list: "Quay lại danh sách",


        // ---- プライバシー ----
        privacy_title: "📄 Điều khoản sử dụng & Chính sách bảo mật",
        policy_date: "Ngày ban hành: 03/06/2026",

        section1_title: "1. Về dịch vụ",
        section1_text: "Ứng dụng này cho phép người dùng chia sẻ vị trí các thùng rác xung quanh khu du lịch nhằm góp phần giữ gìn vệ sinh môi trường và ngăn chặn hành vi xả rác bừa bãi.",

        section2_title: "2. Về bài đăng",
        section2_intro: "Người dùng có thể đăng vị trí thùng rác, hình ảnh và bình luận.",
        section2_prohibited: "Các nội dung sau bị nghiêm cấm:",
        prohibited1: "Nội dung xúc phạm hoặc phỉ báng người khác",
        prohibited2: "Nội dung chứa thông tin cá nhân",
        prohibited3: "Thông tin sai sự thật hoặc không chính xác",
        prohibited4: "Nội dung vi phạm pháp luật hoặc thuần phong mỹ tục",
        prohibited5: "Nội dung không liên quan đến mục đích của ứng dụng",
        prohibited6: "Các nội dung khác mà quản trị viên cho là không phù hợp",
        section2_footer: "Quản trị viên có quyền xóa các bài đăng thuộc các trường hợp trên mà không cần thông báo trước.",

        section3_title: "3. Thông tin cá nhân",
        section3_text1: "Ứng dụng này thu thập một số thông tin như địa chỉ email để phục vụ chức năng đăng ký và đăng nhập.",
        section3_text2: "Thông tin thu thập được chỉ được sử dụng cho việc vận hành dịch vụ và xác thực người dùng.",
        section3_text3: "Vui lòng không đăng tải thông tin cá nhân trong nội dung bài viết.",

        section4_title: "4. Hình ảnh được đăng tải",
        section4_text1: "Hình ảnh do người dùng đăng tải sẽ được hiển thị trong ứng dụng.",
        section4_text2: "Vui lòng đảm bảo rằng hình ảnh không chứa thông tin có thể xác định danh tính cá nhân.",

        section5_title: "5. Miễn trừ trách nhiệm",
        section5_text1: "Chúng tôi không đảm bảo tính chính xác, đầy đủ hoặc cập nhật của thông tin về vị trí thùng rác.",
        section5_text2: "Tình trạng thực tế có thể khác với thông tin được đăng tải.",
        section5_text3: "Ban quản lý không chịu trách nhiệm đối với bất kỳ thiệt hại nào phát sinh từ việc sử dụng ứng dụng này.",

        section6_title: "6. Bản quyền",
        section6_text1: "Bản quyền đối với văn bản và hình ảnh do người dùng đăng tải thuộc về chính người đăng.",
        section6_text2: "Tuy nhiên, nội dung có thể được sử dụng cho mục đích vận hành, cải thiện hoặc giới thiệu ứng dụng.",

        section7_title: "7. Thay đổi hoặc ngừng dịch vụ",
        section7_text: "Ban quản lý có thể thay đổi, tạm ngừng hoặc chấm dứt dịch vụ mà không cần thông báo trước.",

        section8_title: "8. Thay đổi điều khoản",
        section8_text1: "Ban quản lý có quyền sửa đổi các điều khoản này khi cần thiết.",
        section8_text2: "Các điều khoản mới sẽ có hiệu lực kể từ thời điểm được đăng tải trên ứng dụng.",

        section9_title: "9. Liên hệ",
        section9_text: "Nếu có thắc mắc liên quan đến ứng dụng này, vui lòng liên hệ với Nhóm phát triển Ứng dụng Thùng rác.",

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