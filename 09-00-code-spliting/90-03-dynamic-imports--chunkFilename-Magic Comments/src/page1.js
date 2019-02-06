import dep1 from './dep1.js';
import com from './common.js';
import _ from 'lodash';

const commonTrimed = _.trim(com);

console.log('in page1: dep1: ', dep1);
console.log('in page1: common', commonTrimed);

import(/* webpackChunkName: "dep2" */ './dep2.js').then(({default: depTwo})=>{
  console.log('in page 1 dynamic import: dep2: ', depTwo)
})
