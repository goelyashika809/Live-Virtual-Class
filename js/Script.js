function fun1(){
    var x=0;
    if(form1.name.value==""){
        alert("Please enter your Name");
        x=0;

    }
    else{
        x=1;
    }

    if(form1.gender.value==""){
        alert("Please enter Gender");
        x=0;

    }
    else{
        x=1;
    }

    if(form1.A.value=="")  {
        if(form1.J.value==""){
            if(form1.D.value==""){
        alert("Please select course");
        x=0;

    }}}
    else{
        x=1;
    }

    if(form1.selection.value==""){
        alert("Please select country");
        x=0;

    }
    else{
        x=1;
    }

    if(x==0){
        return false;
    }
    else{
        return true;
    }
}