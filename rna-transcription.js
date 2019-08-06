//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (val) => {



  var inputMap =
  {
    "G":"C",
    "C":"G",
    "T":"A",
    "A":"U"
  }
  var ans="";
  for(var i=0;i<val.length;i++)
  {
    var ans = ans+inputMap[val.charAt(i)];
  }
  
  return ans;
  

};
