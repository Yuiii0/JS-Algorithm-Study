function reverse(str) {
  if (str.length === 1) return str;
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}

console.log(reverse("hello")); // "olleh"
console.log(reverse("world")); // "dlrow"

function reverse2(str) {
  if (str.length === 1) return str;

  return reverse(str.substirng(1)) + str.charAt(0);
}
