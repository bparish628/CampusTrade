killall -9 node > /dev/null 2>&1 &
npm prune && npm install 
npm start > /dev/null 2>&1 &
cd server
npm run reseed > /dev/null 2>&1 &
cd ../
sleep 10
npm run start-selenium-server > /dev/null 2>&1 &
./node_modules/protractor/bin/protractor protractor-config.js
killall -9 node > /dev/null 2>&1 &
