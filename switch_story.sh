#!/usr/bin/env bash
# Point _workspace at a story under stories/. Usage: ./switch_story.sh [slug]
set -eu
cd "$(dirname "$0")"

if [ -e _workspace ] && [ ! -L _workspace ]; then
  echo "_workspace exists and is a real folder, not a link. Move it into stories/<slug>/ first." >&2
  exit 1
fi

active=""
[ -L _workspace ] && active="$(basename "$(readlink _workspace)")"

if [ $# -eq 0 ]; then
  echo "Stories (active marked with *):"
  for d in stories/*/; do
    s="$(basename "$d")"
    [ "$s" = "$active" ] && m="*" || m=" "
    echo "  $m $s"
  done
  exit 0
fi

if [ ! -d "stories/$1" ]; then
  echo "No such story: $1 (see ./switch_story.sh)" >&2
  exit 1
fi

ln -sfn "stories/$1" _workspace
echo "Active story: $1  (_workspace -> stories/$1)"
