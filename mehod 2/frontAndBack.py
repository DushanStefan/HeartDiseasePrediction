from flask import Flask, request, jsonify
import joblib
import numpy as np
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)#instantiate flask application
CORS(app)  # This will enable CORS for all routes

# Load the model and scaler
model = joblib.load('logistic_regression_model.pkl')
scaler = joblib.load('scaler.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    features = np.array([data['age'], data['sex'], data['cp'], data['trestbps'],
                         data['chol'], data['restecg'], data['thalach'], data['exang'],
                         data['oldpeak'], data['slope'], data['ca'], data['thal']])
    
    features_reshaped = features.reshape(1, -1)
    features_scaled = scaler.transform(features_reshaped)
    
    prediction = model.predict(features_scaled)
    
    result = "Heart Disease" if prediction == 1 else "No Heart Disease"
    
    return jsonify({'prediction': result})

if __name__ == '__main__':
    app.run(debug=True)


# __name__ in app = Flask(__name__) is used to set up paths for the Flask app.
# __name__ in if __name__ == '__main__': is used to check if the script is being run directly and to start the Flask server.

# The __name__ variable in Python is a special built-in variable that represents the name of the current module. When a module is run directly, the __name__ variable is set to '__main__'. When a module is imported, __name__ is set to the name of the module.

# In the context of your Flask application, __name__ serves different purposes depending on where it is used:

# app = Flask(__name__):

# Here, __name__ is passed to the Flask class to help Flask locate resources like templates and static files. When the Flask application is instantiated, it uses the name of the module to set up paths for these resources correctly.
# if __name__ == '__main__'::

# This line checks whether the module is being run directly (as opposed to being imported). If the module is run directly, __name__ will be '__main__', and the block of code inside this if statement will be executed. This is typically where you start the Flask application using app.run().