function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var txtAno = document.getElementById("txtAno")
    var txtAnoNum = txtAno.value
    var res = document.getElementById("res")
    if (txtAnoNum.length == 0 || txtAnoNum > ano) {
        alert("Verifique os dados e tente novamente!")
    }
    else {
        var fsex = document.getElementsByName("radSex")
        var idade = ano - Number(txtAnoNum)
        res.innerHTML = `A idade é ${idade}`
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            genero = "masculino"
            if (idade >=0 && idade < 6) {
                img.setAttribute("src", "imagens/homem-bebe.png")
            }
            else if (idade < 15){
                img.setAttribute("src", "imagens/homem-criança.png")
            }
            else if (idade < 25) {
                img.setAttribute("src", "imagens/homem-jovem.png")
            }
            else if (idade < 50) {
                img.setAttribute("src", "imagens/homem-adulto.png")
            }
            else {
                img.setAttribute("src", "imagens/homem-idoso.png")
            }
        }
        else if (fsex[1].checked) {
            genero = "feminino"
            if (idade >=0 && idade < 6) {
                img.setAttribute("src", "imagens/mulher-bebe.png")
            }
            else if (idade < 15){
                img.setAttribute("src", "imagens/mulher-criança.png")
            }
            else if (idade < 25) {
                img.setAttribute("src", "imagens/mulher-jovem.png")
            }
            else if (idade < 50) {
                img.setAttribute("src", "imagens/mulher-adulta.png")
            }
            else {
                img.setAttribute("src", "imagens/mulher-idosa.png")
            }
        }
        res.innerHTML = `Detectamos uma pessoa do gênero ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }
    
}