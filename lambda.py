import json
import time
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('FormData') 

def lambda_handler(event, context):
    try:

        
        name = event['name']
        phone = event ['phone'] 
        email = event['email']
        message = event ['message']
        
                    
        item = {
        #'id': str(int(time.time())),    
        'name': name,
        'phone': phone,
        'email': email,
        'message': message
        }

        response = table.put_item(Item=item)
        
        
        return {
            'statusCode': 200,
            'body': json.dumps({'message': 'Data added successfully'})
        }
    except ValueError as ve:
        return {
            'statusCode': 400,
            'body': json.dumps({'message': str(ve)})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'message': f'Error occured adding data to database: {str(e)}'})
        }
