import * as a from './a.js';
import * as b from './b.js';

window.c1 = await a.loadComponent1();
window.key = b.getKey();