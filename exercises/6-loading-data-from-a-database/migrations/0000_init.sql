-- ./migrations/0000_init.sql

-- Migration number: 0000 	 2023-11-09T07:38:31.903Z
CREATE TABLE IF NOT EXISTS note (
	id INTEGER PRIMARY KEY,
	title TEXT NOT NULL,
	body TEXT NOT NULL,
	created_at TEXT DEFAULT CURRENT_TIMESTAMP,
	updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);