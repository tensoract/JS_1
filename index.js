document.getElementById("containner").onclick = function(){
    const symbols = '~!@#$%^&*()_+{}":?;.,';
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let symboL_check = document.getElementById("sym").checked;
    let re = "";
    if(symboL_check){
        let chars_len = chars.length;
        let symbols_len = symbols.length;
        // console.log(symbols_len);
        for(let i = 1; i <= 10; i++){
            let ran = Math.floor(Math.random()*( chars_len + symbols_len ));
            if(ran > chars_len){
                re += symbols.charAt(ran - chars_len);
                console.log(re);
            }
            else {
                re += chars.charAt(ran);
            }
        }
    }
    else {
        let chars_len = chars.length;
        for(let i = 1; i <= 10; i++){
            let ran = Math.floor(Math.random()*(chars_len));
            re += chars.charAt(ran);
            console.log(re);

        }
    }
    document.getElementById("passwork").innerHTML = re;
    
}