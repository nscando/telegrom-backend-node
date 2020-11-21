const config = {
     dbUrl: process.env.DB_URL || 'mongodb+srv://db_telegrom:tH7PPwKskvZI5sSC@cluster0.pp3cm.mongodb.net/test',
     port: process.env.PORT || 3000,
     host: process.env.HOST || 'http://localhost',
     publicRoute: process.env.PUBLIC_ROUTE || '/app',
     filesRoute: process.env.FILES_ROUTE || 'files'

};

module.exports = config;