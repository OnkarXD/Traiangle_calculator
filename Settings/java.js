// let option =document.querySelectorAll('option');
// let angle = document.getElementById('Angle') 

let num =document.querySelectorAll('button');
let string ="";

Array.from(num).forEach((button)=>{
	button.addEventListener('click',(e)=>{
		
		if(e.target.innerHTML === 'Hypotenus')
		{
			console.log("Hypotenus");
			string ='Hypotenus';
			// string = eval(string);
			// document.querySelector('input').value = string;
			document.getElementById('len').innerHTML = "Enter : "+ string; 
	
		}
		else if(e.target.innerHTML == 'Ajacent')
		{
			console.log("Ajacent");
			string = 'Ajacent';
			document.getElementById('len').innerHTML =  "Enter : "+ string; 
	
		}
		else if(e.target.innerHTML =='Opposite')
		{
			console.log("Opposite");
			string = 'Opposite';
			document.getElementById('len').innerHTML = "Enter : "+ string; 
	
		}
		else if(e.target.innerHTML =='Clear')
		{
		document.getElementById('Answer').innerHTML	 = "0.0000" ;
		document.getElementById('Answer1').innerHTML	 = "0.0000" ;
		document.getElementById('Ans').innerHTML	 = "Answer :" ;
		document.getElementById('Ans1').innerHTML	 = "Ansewr :" ;
		document.getElementById('len').innerHTML	 = "Select Side" ;
		
		}
		
	})
})

// cal.addEventListener('click',(a)=>{

// 	const angle = document.getElementById("angle");
// 	const length = document.getElementById("length");

// 	if(string == "Hypotenus")
// 	{
// 		const radian = angle * Math.PI / 180 ;

// 		const opposite = length * Math.tan(radian);

// 		document.getElementById("Answer").value = opposite ;
// 	}

// })

function Calculat(){
const angle = document.getElementById('angle').value;
const length = document.getElementById("length").value;


	if(string == 'Ajacent')
	{
		const radian = angle * Math.PI / 180 ;

		const opposite = length * Math.tan(radian);

		const hypotenus = Math.sqrt(length * length + opposite * opposite);
		document.getElementById('Answer').innerHTML	 = opposite.toFixed(4) ;
		document.getElementById('Answer1').innerHTML	 = hypotenus.toFixed(4) ;
		document.getElementById('Ans').innerHTML	 = "Opposite :" ;
		document.getElementById('Ans1').innerHTML	 = "Hypotenus :" ;
			
	
	}
	else if(string == 'Hypotenus')
	{
		const opposite = Math.sin(angle * Math.PI / 180 )* length;
		const ajacent = Math.cos(angle * Math.PI / 180 )* length;
		
		document.getElementById('Answer').innerHTML	 = opposite.toFixed(4) ;
		document.getElementById('Answer1').innerHTML	 = ajacent.toFixed(4) ;
		document.getElementById('Ans').innerHTML	 = "Opposite :" ;
		document.getElementById('Ans1').innerHTML	 = "Ajacent :" ;
			
	}
	else if(string == 'Opposite')
	{
		const radian = angle * Math.PI / 180 ;

		const hypotenus = length / Math.sin(radian);
		const ajacent = length / Math.tan(radian);

		document.getElementById('Answer').innerHTML	 = hypotenus.toFixed(4) ;
		document.getElementById('Answer1').innerHTML	 = ajacent.toFixed(4) ;
		document.getElementById('Ans').innerHTML	 = "Hypotenus :" ;
		document.getElementById('Ans1').innerHTML	 = "Ajacent :" ;

	}
	else{
		document.getElementById('Answer').innerHTML = "..." ;
		document.getElementById('Answer1').innerHTML	 = "..." ;
	}
	
}