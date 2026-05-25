/*テーブル作成用*/
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    post_id INTEGER NOT NULL,
    comment_text VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_post
        FOREIGN KEY(post_id)
        REFERENCES posts(id)
        ON DELETE CASCADE
);

/*ダミーデータ用*/
INSERT INTO comments (
    post_id,
    comment_text,
    created_at
)
VALUES
(
    1,
    '入口近くにごみ箱がありました。',
    CURRENT_TIMESTAMP
),
(
    1,
    '夜でも利用できました。',
    CURRENT_TIMESTAMP
),
(
    2,
    '駐車場側にも設置されていました。',
    CURRENT_TIMESTAMP
);
