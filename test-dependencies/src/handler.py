import json
import sys
sys.path.insert(0, 'src/vendor')
from jsonpath_rw import jsonpath, parse

def hello(event, context):
    body = {
        "message": "Python Function executed successfully!"
    }

    jsonpath.auto_id_field = 'id'
    data = [match.value for match in parse('foo[*].id').find({'foo': [{'id': 'bizzle'}, {'baz': 3}]})]

    response = {
        "statusCode": 200,
        "body": json.dumps(body),
        "data": json.dumps(data)
    }

    return response
