#!/usr/bin/env bash
# Boondock Walker — local preview server
# Double-click this file to start a local web server.
# Then open the URL it prints in your browser.
# Press Ctrl+C in the Terminal window to stop the server.

set -e
cd "$(dirname "$0")"

PORT=8000

# If 8000 is taken, walk up a few ports.
while lsof -i ":$PORT" > /dev/null 2>&1; do
  PORT=$((PORT + 1))
  if [ "$PORT" -gt 8010 ]; then
    echo "All preview ports 8000-8010 are in use. Close other servers first."
    exit 1
  fi
done

echo ""
echo "──────────────────────────────────────────"
echo "  Boondock Walker — local preview server"
echo "──────────────────────────────────────────"
echo ""
echo "  Open one of these in your browser:"
echo ""
echo "    http://localhost:$PORT/index.html"
echo "    http://localhost:$PORT/benchmarks.html"
echo "    http://localhost:$PORT/benchmarks-archive.html"
echo "    http://localhost:$PORT/work.html"
echo "    http://localhost:$PORT/about.html"
echo "    http://localhost:$PORT/field-notes.html"
echo "    http://localhost:$PORT/capabilities.html"
echo ""
echo "  Press Ctrl+C in this window to stop the server."
echo ""

python3 -m http.server "$PORT"
