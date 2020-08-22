const fs = require('fs');
const data = `
REACT_APP_FIREBASE_API_KEY=${process.env.FIREBASE_API_KEY}
REACT_APP_FIREBASE_AUTH_DOMAIN=${process.env.FIREBASE_AUTH_DOMAIN}
`
fs.writeFileSync('./.env', data);
