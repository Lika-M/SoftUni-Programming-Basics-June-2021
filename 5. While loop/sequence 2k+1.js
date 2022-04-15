function sequense(input) {

    let n = Number(input[0]);
    let a = 1;
    // while(true){
    //     if(a > n){
    //         break;
    //     }
    //     console.log(a); 
    //     a = a*2 + 1;     
    // }

    while (a <= n) {
        console.log(a);
        a = a * 2 + 1;
       
    }
    
}
sequense(["31"])