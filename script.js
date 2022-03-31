function totalPrice(argument) {
	price = document.getElementById('price').value;

discount = document.getElementById('discount').value;


document.getElementById('total').innerHTML=Number(price-discount);

}

btnAdd = document.getElementById('btnAdd');

btnAdd.onclick=function(argument) {



name = document.getElementById('name').value;
price = document.getElementById('price').value;
discount = document.getElementById('discount').value;
number = document.getElementById('number').value;
address = document.getElementById('address').value





all=[name,price,discount,number,total]

document.getElementById('body').innerHTML+="<div id='h1'></div><h1>كشف حساب</h1><div id='container'><li>الأسم  : "+name
document.getElementById('body').innerHTML+="<div id='container'><li>مبلغ  : "+price
document.getElementById('body').innerHTML+="<div id='container'><li>خصم  : "+discount
document.getElementById('body').innerHTML+="<div id='container'><li> رقم هاتف  :"+number
document.getElementById('body').innerHTML+="<div id='container'><li> عنوان  : "+address;
document.getElementById('body').innerHTML+="<button id='btnDelete' onclick='deletePro'>حذف  </button>"

if (name==0) {
document.getElementById('container').display='none'

const speaker = new SpeechSynthesisUtterance('You have to add a name atleast')

speechSynthesis.speak(speaker)

name.classList.toggle('name')
}


//end of coding

document.getElementById('name').value=''
document.getElementById('price').value=''
document.getElementById('discount').value=''
document.getElementById('number').value=''
document.getElementById('address').value=''
document.getElementById('total').innerHTML='المبلغ الكلي'

}

function deletePro(argument) {
	// body...
}


function searchFilter(argument) {
	

}

