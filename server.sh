#!/bin/bash

php artisan config:cache
npm install && npm run dev
php artisan serve
