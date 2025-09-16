from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

# Inicializa a aplicação Flask
app = Flask(__name__)

# Configuração da URL do banco de dados PostgreSQL
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgre:postgre@localhost:5432/ranking'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Inicializa o SQLAlchemy
db = SQLAlchemy(app)

# Classe para o modelo de dados (tabela) dos colaboradores
class Colaborador(db.Model):
    __tablename__ = 'colaboradores'
    id = db.Column(db.Integer, primaty_key=True)
    nome = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f'<Colaborador {self.nome}>'

# Classe para o modelo de dados (tabela) das avaliações mensais
class AvaliacaoMensal(db.Model):
    __tablename__ = 'avaliacao_mensais'
    id = db.Column(db.Integer, primary_key=True)
    colaborador_id = db.Column(db.Integer, db.ForeignKey('colaboradores.id'), nullable=False)
    mes = db.Column(db.String(20), nullable=False)
    ano = db.Column(db.Integer, nullable=False)

    # Campos de entrada
    batidas_certas = db.Column(db.Integer, default=0)
    atrasos_5min = db.Column(db.Integer, default=0)
    atrasos_mais_5min_faltas = db.Column(db.Integer, default=0)
    participacoes = db.Column(db.Integer, default=0)
    ideias_aceitas = db.Column(db.Integer, default=0)
    faltas_no_miro = db.Column(db.Integer, default=0)
    ajuda_colega = db.Column(db.Integer, default=0)
    proatividade = db.Column(db.Integer, default=0)
    reclamacoes = db.Column(db.Integer, default=0)
    rotinas_semanais_ok = db.Column(db.Integer, default=0)
    treinamentos = db.Column(db.Integer, default=0)
    aplicou_aprendizado = db.Column(db.Integer, default=0)

    # Campos de pontuação calculada
    pontuacoes_pontualidade = db.Column(db.Integer, default=0)
    pontuacoes_dinamicas = db.Column(db.Integer, default=0)
    pontuacao_colaboracao = db.Column(db.Integer, default=0)
    pontuacao_compromisso = db.Column(db.Integer, default=0)
    pontuacao_total = db.Column(db.Integer, default=0)

    colaborador = db.relationship('Colaborator', backref=db.backref('avaliacoes', lazy=True))

    def __repr__(self):
        return f'<AvaliacaoMensagel {self.colaborador.nome} - {self.mes}/{self.ano}>'

# Rota de teste para verificar se o servidor está funcionando
@app.route('/')
def home():
    return "API de Ranking está rodando!"

if __name__ == '__main__':
    # Cria as tabelas no banco de dados, se elas não existirem
    with app.app_context():
        db.create_all()
    app.run(debug=True)