
var account=
    {
        title: "Sohail Fida",
        currency:"PKR",
        IBAN:100100100377684300,
        balance:53000



    };
var CurrentAmount=0;
function show()
{
    document.getElementById("title").innerHTML=account.title;
    document.getElementById("currency").innerHTML=account.currency;
    document.getElementById("IBAN").innerHTML=account.IBAN;
    CurrentAmount=account.balance;
    document.getElementById("balance").innerHTML=account.balance;

}
show();
function displayDeposit(a)
{
    if(a.keyCode==13)
    {
        var b=parseInt(document.getElementById("deposit").value);
        if(isNaN(b))
        {
            document.getElementById("deposit-msg").innerText="Please Enter SomeThing";
        }
        else
        {

            CurrentAmount=CurrentAmount+b;
            document.getElementById("balance").innerText=CurrentAmount;
            let AB=document.getElementById("transaction-table");
            AB.innerHTML+='<tr>'
                +' <th align="left" valign="middle" scope="col">'+new Date()+'</th>'
                +' <th align="left" valign="middle" scope="col">'+'Deposit'+'</th>'
                +' <th align="left" valign="middle" scope="col">'+document.getElementById("deposit").value+'</th>'
                +'</tr>'
        }
        document.getElementById("deposit").value="";
    }

}
function displaywithdraw(a)
{
    if(a.keyCode==13)
    {
        var b=parseInt(document.getElementById("withdraw").value);
        if(isNaN(b))
        {
            document.getElementById("withdraw-msg").innerText="Please Enter SomeThing";
        }
        else if(b>CurrentAmount)
        {
            document.getElementById("withdraw-msg").innerText="Not Enough Balance";
        }
        else
        {
            document.getElementById("withdraw-msg").innerText="";
            CurrentAmount=CurrentAmount-b;
            document.getElementById("balance").innerText=CurrentAmount;
            let AB=document.getElementById("transaction-table");
            AB.innerHTML+='<tr>'
                +' <th align="left" valign="middle" scope="col">'+new Date()+'</th>'
                +' <th align="left" valign="middle" scope="col">'+'WithDraw'+'</th>'
                +' <th align="left" valign="middle" scope="col">'+document.getElementById("withdraw").value+'</th>'
                +'</tr>'
        }
        document.getElementById("withdraw").value="";
    }
}
