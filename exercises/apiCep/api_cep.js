function fnBuscaCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then((res) => res.json())
      .then((dados) => {
        // console.log(dados);
  
        document.querySelector("#txtEndereco").value = dados.logradouro;
        document.querySelector("#txtBairro").value = dados.bairro;
        document.querySelector("#txtCidade").value = dados.localidade;
        document.querySelector("#txtUF").value = dados.uf;
  
        document.querySelector("#txtNumero").focus();
      });
  }