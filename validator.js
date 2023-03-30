
function validator(option) {

    function validate(inputElement, rule) {
        var errormessage = rule.test(inputElement.value)
        var errorElement = inputElement.parentElement.querySelector(option.errorselector)
        if(errormessage) {
            errorElement.innerText=errormessage
            inputElement.parentElement.classList.add('invalid')
        }else{
            errorElement.innerText='';
            inputElement.parentElement.classList.remove('invalid')
        }
    }

    var formElement = document.querySelector(option.form)

    if(formElement) {
       option.rules.forEach( function (rule) {
           var inputElement = formElement.querySelector(rule.selector)
           if(inputElement) {
            inputElement.onblur = function(){
               validate(inputElement, rule)
            }

            inputElement.oninput=function(){
                var errorElement = inputElement.parentElement.querySelector(option.errorselector)
                errorElement.innerText=''
                inputElement.parentElement.classList.remove('invalid')
            }
           }
       })
    }
}

// Định nghĩa rule

validator.isRequired= function(selector, message) {
    return {
        selector:selector,
        test:function(value) {
            return value ? undefined : message ||'Giá trị nhập vào không hợp lệ'
        }
    }
}

validator.isEmail= function(selector, message) {
    return {
            selector:selector,
            test:function(value) {
             var regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
             return regex.test(value) ? undefined : message ||'Giá trị nhập vào không hợp lệ'
            }
        }
}

validator.minLength= function(selector,min, message) {
    return {
            selector:selector,
            test:function(value) {
             return value.length>=min ? undefined : message ||'Giá trị nhập vào không hợp lệ'
            }
        }
}

validator.isConfirmed= function(selector,getConfirmvalue, message) {
    return {
            selector:selector,
            test:function(value) {
             return value === getConfirmvalue() ? undefined : message ||'Giá trị nhập vào không hợp lệ'
            }
        }
}



var btmode=document.querySelector('.light_mode')
btmode.addEventListener("click", function(){
    btmode.classList.replace("light_mode","dark_mode")
})


