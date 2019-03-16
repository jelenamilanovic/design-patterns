// A pattern which enables creating private properties and methods thus protecting information from accidental changes; namespace pollution etc.
// IIFE is the basic principle of implementation.  

var module = (function () {
  var privateVar = 'I am private variable';

  function changePrivateVar() {
    privateVar = 'I am private variable with new value';
  }

  return {
    revealPrivateVar: function () {
      console.log("Value of private var: ", privateVar);
    },
    callChangePrivateVar: function () {
      changePrivateVar();
    }
  }
})()

module.revealPrivateVar();
module.callChangePrivateVar();
module.revealPrivateVar();

