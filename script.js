function myfunction(){

    document.getElementById("lstbtn").style.display="grid";
    document.getElementById("lstbtn").style.listStyle="none";
    document.getElementById("lstbtn").style.color="#ffff";
}
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