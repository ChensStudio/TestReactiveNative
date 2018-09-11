rm -rf ./node_modules
rm -rf $TMPDIR/react-*
npm install
react-native link react-native-randombytes
./node_modules/.bin/rn-nodeify --hack --install
npm start -- --reset-cache