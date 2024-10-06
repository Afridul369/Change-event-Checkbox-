let input = document.querySelectorAll('input[name=abir]');


Array.from(input).map((item)=>{

 item.addEventListener('change', handler);
 function handler (e){
    if (e.target.checked) {
        console.log(e.target.value);
    }

}

})



