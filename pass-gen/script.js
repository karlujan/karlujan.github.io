let btn = document.getElementById("create-pass");

btn.addEventListener("click", genPWD);

let displayPWD = document.getElementById("password-space");

function genPWD() {
    let u = Math.floor(Math.random() * 4) + 2;
    let uCounter = 0;

    let l = Math.floor(Math.random() * 4) + 2;
    let lCounter = 0;

    let n = Math.floor(Math.random() * 4) + 2;
    let nCounter = 0;

    let s = Math.floor(Math.random() * 4) + 2;
    let sCounter = 0;
    

    //arrays
    let numOfUCL = '';
    let numOfLCL = '';
    let numOfNums = '';

    let symList = [33,44,45,46,63];
    let symListAdded ='';

    while (uCounter < u) {
        numOfUCL += String.fromCharCode(Math.floor(Math.random() * (90-65)) + 65);
        uCounter++;
    }
    while (lCounter < l) {
        numOfLCL += String.fromCharCode(Math.floor(Math.random() * (123-97)) + 97);
        lCounter++;
    }
    while (nCounter < n) {
        numOfNums += String.fromCharCode(Math.floor(Math.random() * (57-48)) + 48);
        nCounter++;
    }
    while (sCounter < s) {
        let sl = Math.floor(Math.random() * 4);
        symListAdded += (String.fromCharCode(symList[sl]));
        sCounter++;
    }
    
    let pw = numOfUCL + numOfLCL + numOfNums + symListAdded;
    
    let pwd = shufflePWD(pw);

    function shufflePWD(pwd){
        let pwdList = pwd;
        
        for (j= 0; j < pwdList.length; j++){
            let q = Math.floor(Math.random() * pwdList.length);
            let temp = pwdList[j];
            pwdList[j] = pwdList[q];
            pwdList[q] = temp;
            console.log(q,j);
        }
        let newPWD = pwdList;
        displayPWD.innerHTML = newPWD;   
    }
}