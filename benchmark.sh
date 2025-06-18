#!/bin/bash

echo "Starting benchmark...\n"



# --- pnpm ---
start_pnpm=$(date +%s)
echo "Running pnpm..."
pnpm create vite test-pnpm --template react > pnpm.log 2>&1
cd test-pnpm
pnpm install
end_pnpm=$(date +%s)
duration_pnpm=$((end_pnpm - start_pnpm))
echo "✅ pnpm completed in $duration_pnpm seconds"

# --- Summary ---
echo -e "\n⚡️ Benchmark Results:"
echo "pnpm: $duration_pnpm seconds"
