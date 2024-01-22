# Controlador para manipulação de especialistas
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db


def initialize_firebase():
    cred = credentials.Certificate('Área de Trabalho/connectpro/chave.json')
    firebase_admin.initialize_app(cred, {'databaseURL': 'https://imed-8f451-default-rtdb.firebaseio.com/'})

class ExpertController:
    @staticmethod
    def get_expert_list():
        initialize_firebase()  # Chama a função de inicialização
        experts_ref = db.reference('experts')
        experts = experts_ref.get()
        return experts

    @staticmethod
    def get_expert_details(expert_id):
        initialize_firebase()  # Chama a função de inicialização
        expert_ref = db.reference(f'experts/{expert_id}')
        expert_details = expert_ref.get()
        return expert_details
