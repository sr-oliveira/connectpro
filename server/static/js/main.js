 // Importe a biblioteca do Firebase
 import firebase from 'firebase/app';
 import 'firebase/auth';


// Lógica do lado do cliente para a aplicação ConnectPro

document.addEventListener('DOMContentLoaded', function () {
    // Lógica de inicialização, se necessário
  });
  



 

// Use a configuração do firebaseConfig
const firebaseConfig = {
  apiKey: "AIzaSyBE7gVDMkvuxlL3U66xLlaOhDbycB1MZ4o",
  authDomain: "imed-8f451.firebaseapp.com",
  databaseURL: "https://imed-8f451-default-rtdb.firebaseio.com",
  projectId: "imed-8f451",
  storageBucket: "imed-8f451.appspot.com",
  messagingSenderId: "865781797198",
  appId: "1:865781797198:web:751a0974d141be7a5a4e1f",
  measurementId: "G-ZQ1Z13BWHP"
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

// Obtenha uma referência para o módulo de autenticação
const auth = firebase.auth();

// Adicione um ouvinte para monitorar o estado de autenticação do usuário
auth.onAuthStateChanged((user) => {
  if (user) {
    // O usuário está autenticado
    console.log('Usuário autenticado:', user.uid);
  } else {
    // O usuário não está autenticado
    console.log('Usuário não autenticado');
  }
});

// Exemplo de criação de conta
const criarConta = (email, senha) => {
  auth.createUserWithEmailAndPassword(email, senha)
    .then((userCredential) => {
      // Usuário criado com sucesso
      const user = userCredential.user;
      console.log('Usuário criado:', user.uid);
    })
    .catch((error) => {
      // Lidar com erros
      console.error('Erro ao criar usuário:', error.message);
    });
};

// Exemplo de login
const fazerLogin = (email, senha) => {
  auth.signInWithEmailAndPassword(email, senha)
    .then((userCredential) => {
      // Login bem-sucedido
      const user = userCredential.user;
      console.log('Login bem-sucedido:', user.uid);
    })
    .catch((error) => {
      // Lidar com erros
      console.error('Erro ao fazer login:', error.message);
    });
};

// Exemplo de logout
const fazerLogout = () => {
  auth.signOut()
    .then(() => {
      // Logout bem-sucedido
      console.log('Logout bem-sucedido');
    })
    .catch((error) => {
      // Lidar com erros
      console.error('Erro ao fazer logout:', error.message);
    });
};

