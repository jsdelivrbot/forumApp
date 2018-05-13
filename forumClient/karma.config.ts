
module.exports = (config) => {
  config.set({

    basePath: '',

    frameworks: ['mocha', 'chai', 'sinon'],


    files: [
      'tests/**/*.test.tsx'
    ],

    preprocessors: {
      'tests/**/*.test.tsx': ['webpack'],
    },

    webpack: {
      devtool: 'inline-source-map',
      performance: {
        hints: false
      },
      mode: 'none',
      module: {
        rules: [
          { test: /\.tsx$/, loader: 'awesome-typescript-loader' }
        ]
      },
      resolve: {
        extensions: ['.js', '.ts', '.tsx']
      }
    },

    logLevel: config.LOG_INFO,

    plugins: [
      "karma-*"
    ],


    reporters: ['mocha'],


    port: 9876,


    colors: true,


    autoWatch: true,


    browsers: ['Chrome'],


    singleRun: false,


    concurrency: Infinity
  });
};
