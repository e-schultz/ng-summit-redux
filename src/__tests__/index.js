
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);
global.localStorage = require('localStorage')
global.expect = chai.expect;
