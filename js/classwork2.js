var a = document.getElementById('main')
var x = document.getElementById('card');
var y = document.getElementById('btn');
y.addEventListener ('click',  () => {
    a.classList.add('blank')
    // a.classList.add('rotate');
    // x.classList.add('blank');
});

y.addEventListener('mouseover', () => {
    y.classList.toggle('buttoncolor')
});

// y.addEventListener('mouseout', () => {
//     y.classList.add('button2color')
// });



// document.getElementById('btnsubmit').onclick = function(e){
//     e.preventDefault();

//     var input = document.getElementById('exampleFormControlInput1').value;
//     var msg = document.getElementById('errormsg');
    
//     if (input == "") {
//         msg.style.color = 'red'
//         msg.innerHTML = "kindly fill the form"
//     } else {
//         // msg.style.color = 'green'
//         // msg.innerHTML = "Thanks"
      
//             // a.classList.add('rotate');
//             // x.classList.add('blank');
        
//     }    
//     setTimeout(() => {
//         msg.innerHTML = "";
//     }, 3000)
// }

function handleSubmit(){
    var form = document.getElementById('login');
    form.addEventListener('submit', function (e){
        e.preventDefault()
        var elements = this.elements;
        var name = elements.name.value;
        var category = elements.select.value;
        console.log('your name is ' + name + ' and your category is ' + category);
    })

    document.getElementById('btnsubmit').onclick = function(e){
    var input = document.getElementById('exampleFormControlInput1').value;
    var msg = document.getElementById('errormsg');
    
    if (input == "") {
        msg.style.color = 'red'
        msg.innerHTML = "kindly fill the form"
    } else {
        // msg.style.color = 'green'
        // msg.innerHTML = "Thanks"
      
            // a.classList.add('rotate');
            // x.classList.add('blank');
        
    }    
    setTimeout(() => {
        msg.innerHTML = "";
    }, 3000)
}
}
handleSubmit()



