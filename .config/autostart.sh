#!/bin/sh

while true; do
	rescrobbled >> "$XDG_CACHE_HOME/rescrobbled.log" &
	sleep 2h
	pkill rescrobbled
	printf "[%s] killed rescrobbled, restarting...\n\n" "$(date -Is)" >> "$XDG_CACHE_HOME/rescrobbled.log"
done
