ALTER TABLE posts
ADD COLUMN user_id INTEGER;

UPDATE posts
SET user_id = 1
WHERE user_id IS NULL;
