from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)

# 🔥 PERMITE peticiones desde Angular (localhost:4200)
CORS(app)

@app.route("/api/saludo", methods=["POST"])
def saludo():
    data = request.get_json()
    nombre = data.get("nombre", "")
    return jsonify({"mensaje": f"Hola {nombre}"})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)