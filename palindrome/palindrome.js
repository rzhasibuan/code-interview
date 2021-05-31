const palindrome = (str) => {
  str = str.toLowerCase();
  // jadikan str menjadi lowercase

  return str === str.split("").reverse().join("");
  // split('') berfungsi membuat string setiap hurufnya menjadi array
  // reverse berfungsi merotasi array
  // join('') menggabungkan array menjadi string
  // tambah comment
};
