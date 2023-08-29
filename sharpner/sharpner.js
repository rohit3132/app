//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('my-form'));

//console.log(document.querySelectorAll('.item'))
//console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('li'));

//items.forEach((item) => console.log(item));

// const ul= document.querySelector('.items');

// //ul.remove();
// //ul.lastElementChild.remove();
//  ul.firstElementChild.textContent='Hello';
//  ul.firstElementChild.style.background='green'
//  ul.children[1].innerText='Item 2';
//  ul.children[1].style.background='yellow';
//  ul.lastElementChild.innerHTML='<h1>Hello</h1>';

// const btn= document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log('click');
//     console.log(e.target);
//      document.querySelector('#my-form').getElementsByClassName.background = '#ccc';
//      document.querySelector('body').classList.add('bg-dark');
// }); 

// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault()
//     console.log('click');
//     console.log(e.target);
//      document.querySelector('#my-form').getElementsByClassName.background = '#ccc';
//      document.querySelector('body').classList.add('bg-dark');
// }); 

// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault()
//     console.log('click');
//     console.log(e.target);
//      document.querySelector('#my-form').getElementsByClassName.background = '#ccc';
//      document.querySelector('body').classList.add('bg-dark');
// }); 

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList= document.querySelector('#users')

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value==='' || emailInput.value===''){
        msg.classList.add('error');
        msg.innerHTML= 'Please enter all fields';

        setTimeout(() => msg.remove(),3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        let myObj = {
            name:"Domenic",        
            age: 56
        }; 

        let myObj_serialized=JSON.stringify(myObj);
       

        localStorage.setItem("myoBj", myObj_serialized);
        
        let muObj_deserialized = JSON.parse(localStorage.getItem("myObj"));
        

        localStorage.setItem('userName',nameInput.value);
        localStorage.setItem('userEmail',emailInput.value);


        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}
