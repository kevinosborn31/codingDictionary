const dict = {
  // The nested object stores our actual words and their definitions,
  // as key-value pairs
  // This stops them getting mixed up with the methods that also live
  // in our main 'dict' object.
  definitions: {
      'method': 'a function which is defined inside an object',
      'scope': 'the visibility or lifetime of a variable',
      'variadic function' : 'a variadic function is one which accepts a variable number of arguments',
  },

  lookupWord: function ( term ) {
      const definition = this.definitions[ term ]; // use the term to get the definition
      // this.  definition.scope

      if( term in this.definitions ) {
        // Term IS defined
        console.log(`${term}: ${definition}`);
      } else {
        // Term is not defined in the dictionary
        console.log(`Sorry, '${term} is not defined in the dictionary.'`);
      }
  }, // look up word

  printAllDefinitions: function(){

    let totalEntries = 0;

    // Loop through all the keys of the definitions object, and print each
    for( const key in this.definitions ){
      // console.log( key, this.definitions[key] );
      this.lookupWord( key );
      totalEntries = totalEntries + 1;
    }

console.log(`Total entries: ${totalEntries}`);

}, // printALlDefinitions()

  addDefinition: function( term, definition ){
    if(term in this.definitions ){
      console.log(`This term is already defined.`);
      this.lookupWord( term ); //Show the existing definition for the Term
    } else {
      this.definitions[ term ] = definition;
      console.log(`Added ${term}: ${definition}`);
    }
  },
  removeDefinition: function ( term ) {

  },

  searchAllDefinitions:  function ( keyword ) {

  }

}; // dict object


dict.printAllDefinitions();
