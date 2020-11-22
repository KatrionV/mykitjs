var colors = ['green','grey','red','blue','black'];

setInterval(function(){
	
	var rand = mtRand(0, colors.length - 1);
	console.log(colors[rand]);
}, 1000);
function mtRand(min,max){
	return Math.floor(Math.random()*(max - min + 1));
}

class Maus{
	constructor(age, color){
		this.age = age;
		this.color = color;
	}
}
 var mause = new mause(2, 'gray');
