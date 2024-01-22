import firebase_admin
from firebase_admin import credentials, auth

cred = credentials.Certificate('chave.json')

def criar_usuario(email, senha):
    try:
        # Verificar se o email já está em uso
        existe_usuario = auth.get_user_by_email(email)
        print(f"Erro ao criar usuário: E-mail já está em uso.")
        return None
    except auth.AuthError as e:
        # Se o email não estiver em uso, continuar com a criação do usuário
        if isinstance(e, auth.EmailNotFoundError):
            try:
                user = auth.create_user(
                    email=email,
                    password=senha
                )
                print(f"Usuário criado: {user.uid}")
                return user
            except auth.AuthError as create_error:
                print(f"Erro ao criar usuário: {create_error}")
                return None
        else:
            # Outros erros de autenticação
            print(f"Erro ao criar usuário: {e}")
            return None

def fazer_login(email, senha):
    try:
        user = auth.sign_in_with_email_and_password(email, senha)
        print(f"Usuário autenticado: {user['localId']}")
        return user
    except auth.AuthError as e:
        print(f"Erro ao fazer login: {e}")
        return None
