function person(name, age) {
		this.name = name;
    this.age = age;
}
    var swaroop = new person ("Swaroop Raj ", 25);
    var seshi = new person ("Seshendra T", 26);
   console.log(swaroop.name + "'s age is " + swaroop.age);
   console.log(seshi.name+ "'s age is "+ seshi.age);
