from flask import Flask, render_template, redirect, url_for, request
from server.firebase_config import criar_usuario, fazer_login
import firebase_admin
from firebase_admin import credentials, auth
from flask import Flask, render_template, redirect, url_for, request



app = Flask(__name__)

# Configuração do Firebase
cred = credentials.Certificate('chave.json')
firebase_admin.initialize_app(cred, {'databaseURL': 'https://imed-8f451-default-rtdb.firebaseio.com/'})

# Rota para a página inicial
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        email = request.form['email']
        senha = request.form['senha']
        
        # Criar usuário no Firebase Authentication
        resultado = criar_usuario(email, senha)
        
        if resultado:
            # Adicione uma mensagem de confirmação ou redirecione para uma página de confirmação
            return redirect(url_for('index', mensagem='Cadastro realizado com sucesso!'))
        else:
            # Adicione uma mensagem de erro
            return render_template('register.html', mensagem_erro='Erro ao cadastrar usuário.')

    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        senha = request.form['senha']

        # Fazer login no Firebase Authentication
        resultado = fazer_login(email, senha)
        
        if resultado:
            # Adicione uma mensagem de confirmação ou redirecione para uma página de perfil
            return redirect(url_for('index', mensagem='Login realizado com sucesso!'))
        else:
            # Adicione uma mensagem de erro
            return render_template('login.html', mensagem_erro='Erro ao fazer login.')

    return render_template('login.html')

@app.route('/inicio')
def feed():
   return render_template('inicio.html')



if __name__ == '__main__':
    app.run(debug=True)
