ClassApp, based on Ionic Base
=====================
[![Build Status](https://travis-ci.org/pxai/classapp.svg?branch=master)](https://travis-ci.org/pxai/classapp)
ClassApp the base template for Ionic 2 starter apps.

## Add platforms

## Using this project

You'll need the Ionic CLI with support for v2 apps:

```bash
$ npm install -g ionic
```

Then run:

```bash
$ ionic start myApp
```

# Installing Karma
These are the packages we need so far
``` 
npm install --save-dev @types/jasmine @types/node angular-cli jasmine-core karma karma-chrome-launcher karma-cli karma-jasmine karma-mocha-reporter karma-remap-istanbul
```

# Codecov
Token: 
a9acdc2c-fee1-4839-bf4b-3062d1b4fa98
export CODECOV_TOKEN=":uuid-repo-token"


#Testing
##Karma:
Inside each controller
manually with watch:
```
karma start karma.watch.conf.js
```

##Protractor

e2e protractor
Check e2e folder and subfolders
```
protractor
```
