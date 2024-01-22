# Rotas para a API REST
from flask import Blueprint, jsonify
from server.controllers.expert_controller import ExpertController

api_routes = Blueprint('api_routes', __name__)

@api_routes.route('/api/experts', methods=['GET'])
def get_expert_list_route():
    experts = ExpertController.get_expert_list()
    return jsonify({'experts': experts})

@api_routes.route('/api/experts/<int:expert_id>', methods=['GET'])
def get_expert_details_route(expert_id):
    details = ExpertController.get_expert_details(expert_id)
    return jsonify(details)

