/* importing our modules.
  this is almost always done first in your code, 
  you can't use a module if you haven't imported it
*/
const mymod = require('./mod1')
const words = require('./mod2')

// using mod1.js as mymod
console.log(mymod.add(2, 4))
console.log(mymod.subtract(4, 2))
console.log(mymod.subtract(2, 8))

// using the mod2.js as words
console.log(words.reverse('cat'))
console.log(words.upperC('dog'))