//this is an implementation with the swutch statement
switch(new Date().getDay())
	case 0:
		return "Today is Monday"
		break
	case 1:
		return "Today is Tuesday"
		break
	case 2:
		return "Today is Wednesday"
		break
	default 
	return "This is April Fool"


//this is an implementation with the if else statement

	var day = new Date().getDay()
	if(day === 0){
		return 'Monday'
	}
	else if( day === 1){
		return 'Tuesday'
	}
	else if (day === 2){
		return "Wednesday"
	}
	else{
		return 'April fool'
	}