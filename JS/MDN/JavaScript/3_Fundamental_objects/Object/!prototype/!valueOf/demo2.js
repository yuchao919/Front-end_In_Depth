function MyNumberType(n) {
  this.number = n;
}

MyNumberType.prototype.valueOf = function() {
  return this.number;
};

var myObj = new MyNumberType(4);
console.log(myObj + 3); // 7
