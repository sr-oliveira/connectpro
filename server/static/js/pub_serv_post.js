
var firebaseConfig = {
  apiKey: "AIzaSyBE7gVDMkvuxlL3U66xLlaOhDbycB1MZ4o",
  authDomain: "imed-8f451.firebaseapp.com",
  databaseURL: "https://imed-8f451-default-rtdb.firebaseio.com",
  projectId: "imed-8f451",
  storageBucket: "imed-8f451.appspot.com",
  messagingSenderId: "865781797198",
  appId: "1:865781797198:web:751a0974d141be7a5a4e1f",
  measurementId: "G-ZQ1Z13BWHP"
};

 // Inicializar o Firebase
 firebase.initializeApp(firebaseConfig);

 // Inicializar o Firestore (banco de dados)
 var db = firebase.firestore();


 function publicarServico() {
    // Obter os valores dos campos
    var nomeServico = document.getElementById('nome-servico').value;
    var categoriaServico = document.getElementById('categoria-servico').value;
    var localizacaoServico = document.getElementById('localizacao-servico').value;
    var precoServico = document.getElementById('preco-servico').value;
    var descricaoServico = document.getElementById('descricao-servico').value;
  
    // Adicionar os dados ao Firestore
    db.collection("servicos").add({
      nome: nomeServico,
      categoria: categoriaServico,
      localizacao: localizacaoServico,
      preco: precoServico,
      descricao: descricaoServico
    })
    .then(function(docRef) {
      console.log("Documento adicionado com ID: ", docRef.id);
      // Limpar os campos após adicionar ao Firestore (opcional)
      limparCampos();
    })
    .catch(function(error) {
      console.error("Erro ao adicionar documento: ", error);
    });
  }
  
  function limparCampos() {
    // Limpar os campos do formulário após adicionar ao Firestore
    document.getElementById('nome-servico').value = '';
    document.getElementById('categoria-servico').value = '';
    document.getElementById('localizacao-servico').value = '';
    document.getElementById('preco-servico').value = '';
    document.getElementById('descricao-servico').value = '';
  }
  
