require('dotenv').config()

module.exports = {
  "development": {
    "username":  "postgres",
    "password": "viviana14",
    "database":  "imdb",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username":  "postgres",
    "password": "viviana14",
    "database":  "imdb",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    use_env_variable: 'DATABASE_URL',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
}
