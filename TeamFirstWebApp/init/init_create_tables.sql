CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    place_name VARCHAR(100) NOT NULL,
    location_text VARCHAR(100) NOT NULL,
    image_path VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



