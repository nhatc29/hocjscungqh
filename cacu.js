var a = document.querySelector('#a')
var b = document.querySelector('#b')

var bt=document.querySelector('#bt')
bt.addEventListener('click', function(){
    if(isNaN(parseInt(a.value)) || isNaN(parseInt(b.value))) {
        alert('vui long nhap so')
    } else {
        var kt = document.querySelector('#operator').value
        
        if(kt=='add') {
            document.querySelector('#c').value=Number(a.value)+Number(b.value)
        }
        else if(kt=='subtract') {
            document.querySelector('#c').value=Number(a.value)-Number(b.value)
        }
        else if(kt=='multiply') {
            document.querySelector('#c').value=Number(a.value)*Number(b.value)
        }else {
            document.querySelector('#c').value=Number(a.value)/Number(b.value)
        }
    }
})