-- yt-thumb-view is a simple script to show the video
-- thumbnail instead of the video itself, useful for
-- listening to music and only showing the album cover

function thumbnail_as_cover()
	-- ensure the video is from YouTube
	path = mp.get_property("path")
	is_yt = string.find(path, "www.youtube.com")
	if ( is_yt == nil ) then
		is_yt = string.find(path, "youtu.be")
	end
	if ( is_yt ==nil ) then
		is_yt = string.find(path, "redirect.invidious.io")
	end
	if ( is_yt == nil ) then return end

	vid_id = string.match(path, "[%w-_]+$")
	thumb_url_maxres1 = string.format("https://i.ytimg.com/vi/%s/maxresdefault.jpg", vid_id)
	thumb_url_hq = string.format("https://i.ytimg.com/vi/%s/hqdefault.jpg", vid_id)

	-- ensure we only grab the audio
	mp.set_property("ytdl-format", "bestaudio")

	thumb_urls = thumb_url_maxres1 .. ":" .. thumb_url_hq
	thumb_urls = string.gsub(thumb_urls, "://", [[\://]])
	mp.set_property("cover-art-files", thumb_urls)
end

-- start on every new file in a playlist
mp.register_event("start-file", thumbnail_as_cover)
