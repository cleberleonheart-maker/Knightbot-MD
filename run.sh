#!/usr/bin/env bash
# Knight Bot - simple launcher
# Usage: ./run.sh [start|clean|fresh|logs|pm2]
set -e
cd "$(dirname "$0")"

NODE_CMD="node --max-old-space-size=512 --optimize-for-size --gc-interval=100 index.js"

case "${1:-start}" in
  start)
    echo "🚀 Starting Knight Bot..."
    exec $NODE_CMD
    ;;
  clean)
    echo "🧹 Cleaning temp files..."
    npm run cleanup
    echo "🚀 Starting Knight Bot..."
    exec $NODE_CMD
    ;;
  fresh)
    echo "🔄 Resetting session (new login required)..."
    npm run reset-session
    echo "🚀 Starting Knight Bot..."
    exec $NODE_CMD
    ;;
  logs)
    exec tail -f -n 50 nohup.out 2>/dev/null || echo "No logs file found. Run: ./run.sh start"
    ;;
  pm2)
    if ! command -v pm2 >/dev/null 2>&1; then
      echo "📦 Installing pm2..."
      npm install -g pm2
    fi
    pm2 start ecosystem.config.js && pm2 save && pm2 logs knightbot
    ;;
  *)
    echo "Usage: ./run.sh [start|clean|fresh|logs|pm2]"
    exit 1
    ;;
esac