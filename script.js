
$(document).ready(function(){
    $("#form11").validate({
        rules:{
            email:{
                required:true,
                email:true   
            }
        },
        messages:{
            email:{
                required:"Email address required...",
                email:"Email address is not valid..."
            }
        }

    })
})

$(document).ready(function(){
    $("#form12").validate({
        rules:{
            email:{
                required:true,
                email:true   
            }
        },
        messages:{
            email:{
                required:"Email address required...",
                email:"Email address is not valid..."
            }
        }

    })
})