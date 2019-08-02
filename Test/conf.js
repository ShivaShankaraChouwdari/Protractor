exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //specs: ['Test.js'],


  multiCapabilities: [{
    browserName: 'chrome',
    specs: ['Dropdown.js'],

  }, {
    browserName: 'firefox',
    specs: ['Chainlocator.js']

  }]

};