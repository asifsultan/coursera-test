function Person(){
  this.fullName = "Asif Sultan";
  this.fav="Cookies";
  this.describe= function(){
    console.log("'this' keyword value is: ", this);
    console.log(this.fullName  + " likes " + this.fav);
  };
}

var asif = new Person();
asif.describe();

var describe =  asif.describe;
describe();
describe.call(asif);
