const ob = {
    varia: function sum(a) {
      return a + 2;
    }
  };
  
  console.log(ob.varia(2)); // Access using dot notation
  console.log(ob["varia"](2));