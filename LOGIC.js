
function input(num){
    form1.result.value+=num;

}

function remAll(){
    form1.result.value='';
}

function backspace(){
    var temp = form1.result.value;
    form1.result.value = temp.substring(0, temp.length-1);
}

function hehe(){
    alert("Please click OK to continue");

    if(window.confirm("Almost there...")){
        window.location.href='https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran';
    }
}


function equal(){
    var check = form1.result.value;
    if(check){
        form1.result.value = eval(form1.result.value);
    }
}