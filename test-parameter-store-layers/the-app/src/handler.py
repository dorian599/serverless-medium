import os
import json
from ssm_parameter_store import SSMParameterStore



def hello(event, context):
    store = SSMParameterStore(prefix="/"+os.environ['APP_ENV'])
    my_token = store['api']['Token']

    body = {
        "message": "The value of the variable is",
        "value": my_token
    }

    response = {
        "statusCode": 200,
        "body": json.dumps(body)
    }

    return response
