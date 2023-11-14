function calculaNumeros()
{
    let n1 = parseInt(document.getElementById("usuario").value)
    let n2 = parseInt(document.getElementById("senha").value)
    let op = (document.getElementById("operation").value)

    if(op === "+")
    {
        resultado = (n1 + n2)
        alert("soma: "+n1+" "+op+" "+n2+" = "+resultado)
    }
    else if (op === "-")
    {
        resultado = (n1 - n2)
        alert("subtração: "+n1+" "+op+" "+n2+" = "+resultado)
    }
    else if (op === "*")
    {
        resultado = (n1 * n2)
        alert("multipicação: "+n1+" "+op+" "+n2+" = "+resultado)
    }
    else if (op === "/")
    {
        resultado = (n1 / n2)
        alert("divisão: "+n1+" "+op+" "+n2+" = "+resultado)
    }
    else if (op === "sqrt")
    {
        resultado = Math.sqrt(n1 + n2)
        alert("Raiz : "+n1+" "+op+" "+n2+" = "+resultado)
    }
    else if (op === "sqrt")
    {
        resultado = Math.sqrt()
        alert(" : "+n1+" "+op+" "+n2+" = "+resultado)
    }
}