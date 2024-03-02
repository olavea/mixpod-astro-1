CREATE TABLE `playlists_episodes` (
	`playlist_id` integer NOT NULL,
	`episode_id` text NOT NULL,
	PRIMARY KEY(`episode_id`, `playlist_id`),
	FOREIGN KEY (`playlist_id`) REFERENCES `playlists`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`episode_id`) REFERENCES `episodes`(`id`) ON UPDATE no action ON DELETE no action
);
