#!/usr/bin/bash
apt-get update && apt-get upgrade -y
apt-get install nodejs -y
npm install --save colors boxen jsome
node quotes.js
