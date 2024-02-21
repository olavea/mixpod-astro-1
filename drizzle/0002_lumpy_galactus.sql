ALTER TABLE `playlists` RENAME COLUMN `createdBy` TO `created_by`;--> statement-breakpoint
ALTER TABLE playlists ADD `created_at`;--> statement-breakpoint
ALTER TABLE playlists ADD `updated_at`;