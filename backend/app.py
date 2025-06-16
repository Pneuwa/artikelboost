from flask import Flask
from flask_cors import CORS
from blueprints.artikelboost import artikel_boost_bp

app = Flask(__name__)
CORS(artikel_boost_bp, origins=["http://localhost:5173"])

app.register_blueprint(artikel_boost_bp, url_prefix='/api')

if __name__ == '__main__':
    app.run(port=5000, debug=True)
