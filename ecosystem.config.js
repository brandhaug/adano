module.exports = {
  apps: [
    {
      name: 'oslowebsolutions',
      script: './server.js',
      watch: true,
      env: {
        NODE_ENV: 'production',
        DATABASE_HOST: 'ds253959.mlab.com',
        DATABASE_PORT: 53959,
        DATABASE_NAME: 'oslowebsolutions',
        DATABASE_USERNAME: 'brandhaug',
        DATABASE_PASSWORD: 'bi93BALuN!!'
      }
    }
  ]
};
