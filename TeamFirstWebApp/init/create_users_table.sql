-- テーブル追加 --
CREATE TABLE users
(
    id SERIAL PRIMARY KEY,

    user_name VARCHAR(50) NOT NULL,
    
    email VARCHAR(100) NOT NULL UNIQUE,

    password VARCHAR(100) NOT NULL,

    role VARCHAR(20) NOT NULL
);

-- 仮データ--
INSERT INTO users
(
    user_name,
    email,
    password,
    role
)
VALUES
(
    'admin',
    'admin@test.com',
    'admin123',
    'Admin'
);
