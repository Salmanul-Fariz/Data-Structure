///////////////////////////////
////// Check Palindrome ///////
///////////////////////////////

function checkPalindrome(str) {
  let el = str.toLowerCase();
  let lastIndex = el.length - 1;

  for (let i = 0; i < lastIndex / 2; i++) {
    if (el[i] !== el[lastIndex - i]) return 'It is not Palindrome';
  }
  return 'It is a Palindrome';
}

console.log('------------------------------');
console.log('Check Palindrome');
console.log('------------------------------');
console.log(checkPalindrome('Malayalam'));
// Big-O = O(n)
