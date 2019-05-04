var arr = ['lape', 'dennis', 'sunkanmi', 'dapo', 'james', 'williams']

var newArray = new Array('car', 'lorry', 'vehicle', 5, true)


console.log(arr)
console.log(newArray)

console.log('--------------------------')
console.log(arr.length)

console.log('*******************************************************************')


arr.forEach(myFunc)

var myFunc = function(name){
	console.log('Welcome ' + name + '.')
}


arr.toString()


arr.join('**')

