const form = document.querySelector('.form-log-up');
const input = document.querySelectorAll('.form-input');
const togglePasswordBtn = document.querySelectorAll('.toggle-password');
const inputPassword = document.querySelectorAll('.form-input[type="password"]');
const btnSubmit =  document.querySelector('.btn-form');

function valid(item){
  if(item.value == ''){
    addErorStyle(item);
    return true;
  }
  else {
    removeErorStyle(item);
    return false;
  }
}

input.forEach(elem => {
  elem.addEventListener('input', event => {
   valid(event.target);
  })
})


function addErorStyle(elem){
  // console.log(elem.parentElement.classList)
  elem.parentElement.classList.add('no-valid');
}

function removeErorStyle(elem){
  elem.parentElement.classList.remove('no-valid');
}

togglePasswordBtn.forEach((elem, index) => {
  elem.addEventListener('click', () => {
    if(inputPassword[index].type == 'password'){
      inputPassword[index].type = 'text';
    }
    else inputPassword[index].type = 'password';
  })
})


btnSubmit.addEventListener('click', (e)=> {
  // e.preventDefault();
  input.forEach(item => valid(item))
  // passwordValid();
  // console.log(Array.from(input).some(item => valid(item)) || passwordValid())
  if(Array.from(input).some(item => valid(item)) || passwordValid()){
    e.preventDefault();
  }

})

function passwordValid(){
  console.log('ldlassadsda')
  if(inputPassword[0].value === inputPassword[1].value){
    return false;
  }
  else {
    alert('Пароли не совпадают')
    return true;
  }
}