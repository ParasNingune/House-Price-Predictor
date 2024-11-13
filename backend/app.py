from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS

model = joblib.load("house_price_model.pkl")

important_features = ["OverallQual", "GrLivArea", "TotalBsmtSF", "OverallCond", "GarageCars", "LotArea", "GarageArea", "YearBuilt", "PoolArea", "OpenPorchSF"]
default_values = {"OverallQual": 6, "GrLivArea": 1515, "TotalBsmtSF": 1050, "OverallCond": 6, "GarageCars": 1, "LotArea": 10510, "GarageArea": 470, "YearBuilt": 2003, "PoolArea": 2.75, "OpenPorchSF": 60}

app = Flask(__name__)
CORS(app)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    features = [data.get(f, default_values[f]) for f in important_features]

    prediction = model.predict([features])
    return jsonify({"prediction": prediction[0]})

if __name__ == "__main__":
    app.run(debug=True)