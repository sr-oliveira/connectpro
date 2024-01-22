# Arquivo de modelo para especialistas (expert_model.py)

class Expert:
    def __init__(self, id, name, expertise):
        self.id = id
        self.name = name
        self.expertise = expertise

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'expertise': self.expertise
        }
