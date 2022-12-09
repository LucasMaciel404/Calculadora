var resp = [];
function add(data){

    if (data !== 'c' && data !== '=' && data !== 'x' && data !== '÷'){
        resp.push(data);
    }else if(data === 'c'){
        resp.pop();
    }else if(data === 'x'){
        resp.push('*');
    }else if(data === '÷'){
        resp.push('/');
    }else{
        if(data != '='){
            alert(`caractere: ${data} não reconhecido.`);
        }
    }

    if(data == '='){
        var calc = eval(resp.join('').toString());
        resp = [calc];
    }

    $('#resultado').val(resp.join(' '));

}; 
function calcular(data){
    eval(`${data}`);
    alert(data);
    return a;
}
$('#resultado').blur(function(){
    var data = $('#resultado').val()
    var calc = eval(data.toString());
    $('#resultado').val(calc);
});