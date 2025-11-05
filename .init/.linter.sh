#!/bin/bash
cd /home/kavia/workspace/code-generation/recipe-explorer-183466-183485/frontend_web
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

