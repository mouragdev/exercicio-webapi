// 1. Ouvir o Evento de quando o usuario sair do campo de CEP
document.getElementById("cep").addEventListener("blur", (event) => {
    const elemento = event.target;
    const cepInserido = elemento.value;




    if (!(cepInserido.length === 8)) {
        return;
    }

    fetch(`https://viacep.com.br/ws/${cepInserido}/json/`)
        .then(response => response.json())
        .then(data => {

            if (!data.erro) {
                document.getElementById("logradouro").value = data.logradouro;
                document.getElementById("bairro").value = data.bairro;
                document.getElementById("cidade").value = data.localidade;
                document.getElementById("estado").value = data.uf;

                localStorage.setItem("cep", cepInserido)
                localStorage.setItem("logradouro", data.logradouro)
                localStorage.setItem("bairro", data.bairro)
                localStorage.setItem("cidade", data.localidade)
                localStorage.setItem("estado", data.uf)
            } else {
                alert("CEP não encontrado, verifique se digitou corretamente.")
                elemento.value = "";
            }

        })
})

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("cep").value = localStorage.getItem("cep");
    document.getElementById("logradouro").value = localStorage.getItem("logradouro");
    document.getElementById("bairro").value = localStorage.getItem("bairro");
    document.getElementById("cidade").value = localStorage.getItem("cidade");
    document.getElementById("estado").value = localStorage.getItem("estado");
})
