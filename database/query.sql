CREATE TABLE users (
    user_id         BIGSERIAL PRIMARY KEY,
    username        VARCHAR(50) NOT NULL UNIQUE,
    password_hash   TEXT NOT NULL,
    email           VARCHAR(255) UNIQUE,
    is_active       BOOLEAN NOT NULL DEFAULT TRUE,
    created_at      TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at      TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_users_username ON users (username);
CREATE INDEX idx_users_active ON users (is_active);

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_users_updated
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

INSERT INTO users (username, password_hash, email)
VALUES (
  'admin',
  '$2y$10$examplehashedpasswordstring',
  'admin@example.com'
);

SELECT user_id, username, password_hash, is_active
FROM users
WHERE username = $1
LIMIT 1;

CREATE TABLE login_attempts (
    attempt_id  BIGSERIAL PRIMARY KEY,
    user_id     BIGINT REFERENCES users(user_id),
    ip_address  INET,
    success     BOOLEAN,
    attempted_at TIMESTAMPTZ DEFAULT NOW()
);

