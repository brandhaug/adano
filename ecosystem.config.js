module.exports = {
  apps : [
    {
      name: 'oslowebsolutions',
      script: './server.js',
      watch: true,
      env: {
        'NODE_ENV': 'production',
      }
    }
  ]
};
