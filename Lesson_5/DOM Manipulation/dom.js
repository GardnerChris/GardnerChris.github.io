const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click', FavBoM); 

function FavBoM(){
 
  if (input.value.length==0){ 
       alert("Please Enter a Scripture!")  	 
    }  	
  else{
  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');
 
  let myItem = input.value;
  input.value = '';

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = 'X';
  list.appendChild(listItem);

  
  listBtn.onclick = function(e) {
  list.removeChild(listItem);
}
input.focus();
}
}
