//lets declare a method on an object

//first declare an object
var obj = {
	'firstName': 'Segun',
	'lastName': " Code Center",
	//this is a method
	myName: function () {
		return this.firstName
	}
}



obj.myName()