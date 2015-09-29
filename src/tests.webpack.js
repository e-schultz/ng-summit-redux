// This file is an entry point for angular tests
// Avoids some weird issues when using webpack + angular.

import 'babel/polyfill';
import 'angular';
import 'setimmediate';
import 'angular-mocks/angular-mocks';


var testsContext = require.context(".", true, /.js$/);
testsContext.keys().forEach(testsContext);
