let a=5;
let b=10;
console.log("a+b",a+b);

function check(age) {
    if(age>=21)
    console.log("Can Marry");
    else
    console.log("Can not Marry");
}

function isPrime(num)
{
    c=0;
    for(i=1;i<=num;i++)
    {
        if(num%i==0)
        c++;
    }
    if(c==2)
    return true;
    else 
    return false;
}

x=prompt("Enter a number");
if(isPrime(x))
{
    console.log("Prime Number");
}
else
{
    console.log("Not a prime number");
}