function isPrime(number){
    let n = number;
    let kiemtra=true;
    if (n<2)
        kiemtra=false;
    else if (n===2)
        kiemtra=true;
    else {
        for (let i=2; i<n; i++){
            if (n %i ===0){
                kiemtra=false;
            }
        }
    }
    if (kiemtra){
        document.write(n +' la so nguyen to');
    }
    else
        document.write(n+ ' khong phai so nguyen to')
}
isPrime();


