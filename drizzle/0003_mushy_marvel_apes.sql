CREATE TABLE `episodes` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`audio` text NOT NULL
);
--> statement-breakpoint
ALTER TABLE `playlists` DROP COLUMN `created_at`;--> statement-breakpoint
ALTER TABLE `playlists` DROP COLUMN `updated_at`;