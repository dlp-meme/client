-- Add up migration script here
CREATE TABLE IF NOT EXISTS "config" (
  "id" INTEGER NOT NULL PRIMARY KEY,
  "server_host" TEXT
);