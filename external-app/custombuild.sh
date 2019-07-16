#!/bin/sh
ng build external-app --prod --output-hashing=none && cat dist/external-app/runtime-es2015.js dist/external-app/polyfills-es2015.js dist/external-app/scripts.js dist/external-app/main-es2015.js > preview/externalapp.js
