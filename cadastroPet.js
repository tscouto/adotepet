function adicionarPet(event) {
  event.preventDefault(); // evita da tela recarregar :)

  const foto = document.getElementById('foto').value;
  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  const descricao = document.getElementById('descricao').value;
  const tipo = document.getElementById('tipo').value;

  if (nome === '') {
    // alert("Nome é obrigatório")
    document.getElementById('nome').style.borderColor = 'red';
    document.getElementById('nome').style.borderWidth = '2px';
    document.getElementById('error-nome').innerText = 'Nome é obrigatório';
    document.getElementById('error-nome').style.color = 'red';
  } else {
    document.getElementById('nome').style.borderColor = '';
    document.getElementById('error-nome').innerText = '';
    document.getElementById('error-nome').style.color = '';
  }

  if (foto === '') {
    document.getElementById('foto').style.borderWidth = '2px';
    document.getElementById('foto').style.borderColor = 'red';
    document.getElementById('error-foto').innerText =
      'Foto do Pet é obrigatória';
    document.getElementById('error-foto').style.color = 'red';
  } else {
    document.getElementById('foto').style.borderColor = '';
    document.getElementById('error-foto').innerText = '';
    document.getElementById('error-foto').style.color = '';
  }

  if (idade === '') {
    document.getElementById('idade').style.borderWidth = '2px';
    document.getElementById('idade').style.borderColor = 'red';
    document.getElementById('error-idade').innerText =
      'Idade do Pet é obrigatória';
    document.getElementById('error-idade').style.color = 'red';
  } else {
    document.getElementById('idade').style.borderColor = '';
    document.getElementById('error-idade').innerText = '';
    document.getElementById('error-idade').style.color = '';
  }

  if (descricao === '') {
    document.getElementById('descricao').style.borderWidth = '2px';
    document.getElementById('descricao').style.borderColor = 'red';
    document.getElementById('error-descricao').innerText =
      'Descricao do Pet é obrigatória';
    document.getElementById('error-descricao').style.color = 'red';
  } else {
    document.getElementById('descricao').style.borderColor = '';
    document.getElementById('error-descricao').innerText = '';
    document.getElementById('error-descricao').style.color = '';
  }

  if (tipo === '') {
    document.getElementById('tipo').style.borderWidth = '2px';
    document.getElementById('tipo').style.borderColor = 'red';
    document.getElementById('error-tipo').innerText =
      'Tipo do Pet é obrigatória';
    document.getElementById('error-tipo').style.color = 'red';
  } else {
    document.getElementById('tipo').style.borderColor = '';
    document.getElementById('error-tipo').innerText = '';
    document.getElementById('error-tipo').style.color = '';
  }
  if (nome && foto && descricao && tipo) {
    const pet = {
      id: Date.now(),
      foto: foto,
      nome: nome,
      idade: idade,
      cor: cor,
      descricao: descricao,
      tipo: tipo,
    };

    let listaContatos = JSON.parse(localStorage.getItem('pets'));

    if (listaContatos === null) listaContatos = [];
    listaContatos.push(pet);
    localStorage.setItem('pets', JSON.stringify(listaContatos));
    document.getElementById('form-pet').reset();
    console.log(pet);
  }
}

document // seu documento HTML
  .getElementById('form-pet') // ir no documento e localizar o elemento com id form-pet
  .addEventListener('submit', adicionarPet); // adicionar um evento de submissão vinculado a funcao adicionar pet
