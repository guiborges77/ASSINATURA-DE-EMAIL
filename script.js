function atualizarDados() {
  // Atualiza a foto principal pela URL
  let fotoUrl = document.getElementById("input-foto").value;
  if (fotoUrl) {
    document.getElementById("foto-principal").src = fotoUrl;
  }

  // Atualiza a foto principal pelo arquivo
  let fotoFile = document.getElementById("input-file").files[0];
  if (fotoFile) {
    let reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("foto-principal").src = e.target.result;
    };
    reader.readAsDataURL(fotoFile);
  }

  // Atualiza o nome completo
  let nome = document.getElementById("input-nome").value;
  if (nome) {
    document.getElementById("nome-completo").textContent = nome;
  }

  // Atualiza a especialização
  let especializacao = document.getElementById("input-especializacao").value;
  if (especializacao) {
    document.getElementById("especializacao").textContent = especializacao;
  }

  // Atualiza o telefone
  let telefone = document.getElementById("input-telefone").value;
  if (telefone) {
    document.getElementById("telefone").textContent = telefone;
  }

  // Atualiza o email
  let email = document.getElementById("input-email").value;
  if (email) {
    document.getElementById("email").textContent = email;
  }
}

function copiarAssinatura() {
  const assinaturaContainer = document.querySelector(".output-container table");
  const range = document.createRange();
  range.selectNode(assinaturaContainer);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  try {
    const successful = document.execCommand("copy");
    if (successful) {
      alert("Assinatura copiada com sucesso!");
    } else {
      alert("Falha ao copiar a assinatura.");
    }
  } catch (err) {
    console.error("Erro ao copiar a assinatura: ", err);
  }

  selection.removeAllRanges();
}
