async function getContent(){
    try {
        const response = await fetch("https://picsum.photos/v2/list")
        const data = await response.json()
        //console.log(data)
        show(data)
    } catch (error) {
        console.log(error)
    }
}

getContent()

function show(users){
    let output = ''
    var ativo = 2;

    for(var i = 0; i < users.length; i++){

      if(ativo == 2){
        if (window.matchMedia("(max-width: 436px)").matches){

          output +=`
                <div class="carousel-item active">
                    <div class="container  d-flex justify-content-center">
                        <img src="${users[i].download_url}" class="mr-3 figure-img img-fluid " style=" border: solid  3px  #fff; box-shadow: 2px 10px 12px -2px rgba(193,193,193,1);"  heigth="110px" width="110px">
                    </div>
                </div>
            `
            ativo = 0;
        }else{
            output +=`
                <div class="carousel-item active">
                    <div class="container  d-flex justify-content-center">
                        <img src="${users[i].download_url}" class="mr-3 figure-img img-fluid " style=" border: solid  3px  #fff; box-shadow: 2px 10px 12px -2px rgba(193,193,193,1);"  heigth="110px" width="110px">
                        <span style="display:none"> ${i++} </span>
                        <img src="${users[i].download_url}" class="ml-3 figure-img img-fluid " style=" border: solid  3px  #fff; box-shadow: 2px 10px 12px -2px rgba(193,193,193,1);" heigth="110px" width="110px">
                    </div>
                </div>
            `
            ativo = 0;
        }
      
    }else{
      if (window.matchMedia("(max-width: 436px)").matches){
            output +=`
                    <div class="carousel-item ">
                        <div class="container d-flex justify-content-center">
                            <img src="${users[i].download_url}" class="mr-3 figure-img img-fluid " style=" border: solid  3px  #fff; box-shadow: 2px 10px 12px -2px rgba(193,193,193,1);"  heigth="110" width="110">
                        </div>
                    </div>
                `

            }else{
                output +=`
                    <div class="carousel-item ">
                        <div class="container d-flex justify-content-center">
                            <img src="${users[i].download_url}" class="mr-3 figure-img img-fluid " style=" border: solid  3px  #fff; box-shadow: 2px 10px 12px -2px rgba(193,193,193,1);"  heigth="110" width="110">
                            <span style="display:none"> ${i++} </span>
                            <img src="${users[i].download_url}" class="ml-3 figure-img img-fluid " style=" border: solid  3px  #fff; box-shadow: 2px 10px 12px -2px rgba(193,193,193,1);" heigth="110px" width="110px">
                        </div>
                    </div>
                `
            }
        }
    }

    document.querySelector('#teste2').innerHTML = output
}

// Função do formulario
$("#telefone1, #telefone2").mask("(00) 00000-0000");
function enviar(){
    event.preventDefault()

    var nome = document.querySelector("#nome").value;
    var email = document.querySelector("#email").value;
    var telefone1 = document.querySelector("#telefone1").value;
    var telefone2 = document.querySelector("#telefone2").value;
    var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
    var padrao = /[^a-zà-ú- ]/gi;
    var valida_nome = nome.match(padrao);

    if( valida_nome || !nome ){
        document.querySelector("#span-nome").innerHTML = "Nome possui caracteres inválidos ou é vazio";
        document.querySelector("#span-nome").style.color = "red";
        document.querySelector("#nome").style.border = "solid  1px  red";
        return false; 
    }else{
        document.querySelector("#nome").style.border = "solid  1px green"; 
        document.querySelector("#span-nome").innerHTML = ""; 
        document.querySelector("#span-nome").style.color = "#c1c1c1";
    }
    if( email == '' || !er.test(email) ) { 
        document.querySelector("#span-email").innerHTML = "E-mail Invalido"; 
        document.querySelector("#span-email").style.color = "red";
        document.querySelector("#email").style.border = "solid  1px  red";
        return false; 
    }else{
        document.querySelector("#email").style.border = "solid  1px green"; 
        document.querySelector("#span-email").innerHTML = ""; 
        document.querySelector("#span-email").style.color = "#c1c1c1";
    }

    if(telefone1 == "" || telefone1.length < 15){
        document.querySelector("#span-telefone1").innerHTML = "Telefone invalido";
        document.querySelector("#span-telefone1").style.color = "red";
        document.querySelector("#telefone1").style.border = "solid  1px  red";
        return false; 
    }else{
        document.querySelector("#telefone1").style.border = "solid  1px green"; 
        document.querySelector("#span-telefone1").innerHTML = ""; 
        document.querySelector("#span-telefone1").style.color = "#c1c1c1";
    }

  if(telefone2 == ""){
        document.querySelector("#tel2").innerHTML = "Não informado"; 
        document.querySelector("#tel2").style.color = '#C4C8CC';
        document.querySelector("#telefone2").style.border = "solid  1px  #CED4DA";
    }else{
        if(telefone2.length < 15){
          document.querySelector("#span-telefone2").innerHTML = "Telefone invalido";
          document.querySelector("#span-telefone2").style.color = "red";
          document.querySelector("#telefone2").style.border = "solid  1px  red";
          return false;
        }else{
          document.querySelector("#span-telefone2").innerHTML = "";
          document.querySelector("#span-telefone2").style.color = "#000";
          document.querySelector("#telefone2").style.border = "solid  1px  green";
          document.querySelector("#tel2").innerHTML = telefone2
        }
      
    }
    document.querySelector('#aviso').style.display = "block";
    document.querySelector('#aviso1').innerHTML = "Candidatura enviada com sucesso!"    

    document.querySelector("#minhaDiv").style.display = 'block';
    document.querySelector("#preencha").style.display = 'none'
    document.querySelector("#form-sel").style.margin = '0%';

    document.querySelector("#nomeCompleto").innerHTML = nome;
    document.querySelector("#addEmail").innerHTML = email;
    document.querySelector("#tel1").innerHTML = telefone1;

    setTimeout(function () {
        document.querySelector('#aviso').style.display = "none"; // "aviso" é o id do elemento que seja manipular.
    }, 2500); // O valor é representado em milisegundos.

      
}