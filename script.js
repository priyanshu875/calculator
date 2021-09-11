// alert('helo');
let get=0;
let ans;
let textarea = document.getElementById('text');
// textarea.value =ans;
let btn_id=[];
let i=0;
let html="";
// function clicked(button){
//     if(button != 'add'){
//         btn_id[i]=" "+button;
//         // textarea.value=btn_id[i];
        
//     }
//    else{
//         i++;
//         // textarea.value=btn_id[i-1];
//         btn_id[i]=button;
//         textarea.value=btn_id[i];
//         console.log(btn_id[i-1]) ;

//     } 
//     // textarea.value=btn_id[i];
//     // i++;
//     // if(i==3){
//     //     console.log(btn_id[0],btn_id[1],btn_id[2]);
//     //     calculator(btn_id[0],btn_id[1],btn_id[2])
//     // }
// }
// textarea.value=btn_id[i];
// function calculator(num1,add,num2){
    
//     //  add(num1,num2);
//      ans= num1+num2;
//     console.log(num1+num2);    
//     textarea.value=ans;

    

// function add(num1,num2){
//     ans = (num1 + num2);
//     console.log(ans);    
// }
// function equal(ans){
//     textarea.value=ans;
// }

// html="hey";
function clicked(button){
    if(button!='+' && button!='clear' && button!='-' && button!='X' && button!='/' && button!='equal' ){
        html+=button;
        textarea.value=html;
    }
    else if(button=='+' || button=='-' || button=='X' || button=='/' && button!='clear' ){
        btn_id[i]=Number(html);
        i++;
        html="";
        html=button;
        textarea.value=html;
        btn_id[i]=html;
        i++;
        html="";
    }
    else if(button=='equal' && button!='clear'){
        btn_id[i]=Number(html);
        console.log(html);
        ans=calculator(btn_id[0], btn_id[1],btn_id[2]);
        textarea.value=ans;
        html=ans;
        btn_id[0]=0;
        btn_id[1]=0;
        btn_id[2]=0;
        i=0;

    }
    else if(button=='clear' ){
        html="";
        textarea.value=html;
        btn_id[0]=0;
        btn_id[1]=0;
        btn_id[2]=0;
        i=0;
    }

}

function calculator(num1,operator, num2){
    switch (operator) {
        case '+':
            return num1+num2;
            break;
        case '-':
            return num1-num2;
            break;
        case 'X':
            return num1*num2;
            break;
        case '/':
            return num1/num2;
            break;
    
        default:
            break;
    }
    
}

// function clear(){
//     html="";
//     textarea.value=html;
// }







