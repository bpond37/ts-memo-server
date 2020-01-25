export default {
  auth: {
    key: process.env.AUTH_KEY || 'bbe3007c4d11c27f0ace36dc9baf21f33be7410c13f37e292b82027348f2414b73c461ace5420c76c1be6d7ebbe256b85037cca7530ddaeb854f3baad9e6721e',
  },
  db: {
    url: process.env.DATABASE_URL || 'mysql://ulendo:ulendo@localhost:3306/note',
  },
};
