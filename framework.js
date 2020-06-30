var click_reg=document.getElementById('click_reg');
var checkAge_btn = document.querySelector('#checkAge_btn');
var age_input = document.getElementById('age_input');
var age = 0;
console.log(click_reg)

click_reg.addEventListener('click', function(){
    if(age < 18){
        // $('.alert').alert()
        if(age != 0){
            alert('Sorry ... You should be 18+.')
        }else {
            alert('Enter first your age.')
        }
    } else {
        window.location.href = '/html2.html'
    }
})

var click_sub=document.getElementById('click_sub')
console.log(click_sub)

// click_sub.addEventListener('click', function(){
//     alert('Register first ... Then Submit here.')
// })

checkAge_btn.addEventListener('click', function(){
    age = age_input.value
    if(age < 18){
        alert('You can not access here !!')
    }else {
        alert('Access allowed ... You can register now.')
    }
    console.log(age)
})

// var input=0;
// var ipt=document.getElementsByClassName('input')






