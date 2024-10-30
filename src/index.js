// Deliverables: 
/*As a user, I should be able to type a task into the input field.
As a user, I should be able to click some form of a submit button.
As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.*/

document.addEventListener("DOMContentLoaded", () => {
// grab the form 

const form = document.querySelector("#create-task-form"); 
// event listener for form 
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  handleInputButton(e.target.addtodo.value);//passing what the user-input value will input 

  // reset the form 
  form.reset();

}); 

// handleinput event / that holds the input and the button
function handleInputButton(todo){
  // grap the ul element
// const divList = document.querySelector('#list')
// divList.appendChild(ultag);
const ultag = document.querySelector("#tasks");
const litag = document.createElement('li');

//litag will hold the contents 
litag.textContent = todo; 
ultag.appendChild(litag); 

// create a button: 
const button = document.createElement('button'); 
// named the button 
button.textContent = 'Done';

//event listener button 
button.addEventListener('click', handleButton)

//append the button to the li tag.l
litag.appendChild(button); 

}

// event handler for the button 
function handleButton(e){
  e.target.parentNode.remove(); 
}

});

