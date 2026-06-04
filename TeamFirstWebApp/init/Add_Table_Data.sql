INSERT INTO posts
(place_name, location_text, image_path, created_at, user_id)
VALUES
(
'地下鉄ベンタイン駅',
'近くの観光地：地下鉄ベンタイン駅（地上広場ロータリー北側）
通り：Lê Lợi通り と Phan Chu Trinh通りの交差点付近
住所：Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh, Vietnam',
'/images/IMG_1769.jpg',
NOW(),
2
),
(
'ベンタイン市場',
'近くの観光地：ベンタイン市場（南西角・横断歩道手前）
通り：Lê Lai通り と Phan Bội Châu通りの交差点
住所：Chợ Bến Thành, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh, Vietnam',
'/images/IMG_1772.jpg',
NOW(),
2
),
(
'9月23日公園',
'近くの観光地：9月23日公園 北側
通り：Lê Lai通り沿い
住所：Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh, Vietnam',
'/images/IMG_1775.jpg',
NOW(),
2
),
(
'ベンタイン・バスターミナル',
'近くの観光地：ベンタイン・バスターミナル／地下鉄駅付近
通り：Lê Lai通り と Phạm Hồng Thái通りの合流地点付近
住所：Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh, Vietnam',
'/images/IMG_1777.jpg',
NOW(),
2
),
(
'ベンタイン警察署',
'近くの観光地：ベンタイン警察署 南側
通り：Phạm Hồng Thái通り と Lê Anh Xuân通りの交差点付近
住所：Phạm Hồng Thái, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh, Vietnam',
'/images/IMG_1779.jpg',
NOW(),
2
),
(
'ニューワールド・サイゴンホテル',
'近くの観光地：ニューワールド・サイゴンホテル北側交差点
通り：Phạm Hồng Thái通り と Nguyễn Thị Nghĩa通りの交差点角
住所：76A Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh, Vietnam',
'/images/IMG_1781.jpg',
NOW(),
2
),
(
'Circle K レタントン店',
'近くの観光地：Circle K レタントン通り店 前
通り：Lê Thánh Tôn通り
住所：273 Lê Thánh Tôn, Bến Thành, Hồ Chí Minh, Vietnam',
'/images/IMG_1784.jpg',
NOW(),
2
),
(
'CoCo壱番屋 ベンタイン店',
'近くの観光地：CoCo壱番屋 ベンタイン店
通り：Lý Tự Trọng通り（Trương Định通りとの交差点付近）
住所：256 Lê Thánh Tôn, Bến Thành, Hồ Chí Minh 70000 Vietnam',
'/images/IMG_1786.jpg',
NOW(),
2
),
(
'ハムギ通り中央バス乗り場',
'近くの観光地：サイゴンスクエア1側シェルター
通り：Hàm Nghi通り
住所：136 Hàm Nghi, Bến Thành, Hồ Chí Minh 700000 Vietnam',
'/images/IMG_1788.jpg',
NOW(),
2
),
(
'ハムギ通り中央バス乗り場',
'近くの観光地：カオタン技術専門学校側シェルター
通り：Hàm Nghi通り（Nam Kỳ Khởi Nghĩa通りとの交差点付近）
住所：87A Hàm Nghi, Hồ Chí Minh 70000 Vietnam',
'/images/IMG_1791.jpg',
NOW(),
2
),
(
'The Odys Boutique Hotel付近',
'近くの観光地：The Odys Boutique Hotel付近の交差点
通り：Nguyễn Thái Bình通り と Phùng Khắc Khoan通り付近
住所：43 Nguyễn Thái Bình, Bến Thành, Hồ Chí Minh, Vietnam',
'/images/IMG_1793.jpg',
NOW(),
2
),
(
'The Odys Boutique Hotel付近',
'近くの観光地：The Odys Boutique Hotel付近の交差点
通り：Phó Đức Chính通り
住所：51 Nguyễn Thái Bình, Bến Thành, Hồ Chí Minh, Vietnam',
'/images/IMG_1795.jpg',
NOW(),
2
),
(
'OKKIO レロイ店前',
'近くの観光地：ベンタイン市場東側広場交差点
通り：Lê Lợi通り（Phan Bội Châu通りとの交差点）
住所：120-122 Lê Lợi, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh, Vietnam',
'/images/IMG_1800.jpg',
NOW(),
2
);


ALTER TABLE posts
ALTER COLUMN location_text TYPE varchar(300);
