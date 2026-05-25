UPDATE posts
SET image_path = '/' || image_path
WHERE image_path NOT LIKE '/%';
