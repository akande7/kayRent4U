# Introduction
This project establishes a dynamic system employing AWS services to manage user-submitted data through a front-end interface.

## Architecture Overview
The project architecture comprises the following AWS services and components:

![Architecture Diagram](https://github.com/akande7/kayRent4U/blob/master/Architecture%20Diagram.png)

### AWS Services Used
- **Amazon S3 (Simple Storage Service)**: Hosts the static website files facilitating user interaction.
- **AWS API Gateway**: Acts as the entry point, managing and routing HTTP requests.
- **AWS Lambda**: Executes serverless functions in response to API Gateway events.
- **Amazon DynamoDB**: Serves as the database for storing user-submitted data.
- **IAM (Identity and Access Management)**: Manages access and permissions within AWS services.
- **Amazon CloudWatch**: Monitors and logs API calls, Lambda executions, and system metrics.

### Components Overview
- **Static Website**: Hosted on Amazon S3, providing the front-end for user interaction.
- **API Gateway**: Defines and manages RESTful endpoints to trigger Lambda functions.
- **Lambda Functions**: Executing logic to process user requests and interact with DynamoDB.
- **DynamoDB**: Stores and manages user-submitted data.
- **IAM Roles and Policies**: Controls permissions for accessing AWS resources.
- **CloudWatch Logs**: Captures logs for monitoring and troubleshooting.

## Step-by-Step Guide to Integrating AWS Services
### Design Your Website
- **Design or Prepare Your Website**: Create your website's content or choose an existing template.

### Set Up Amazon S3 Bucket for Website Hosting
- **Go to AWS Management Console**: Open the Amazon S3 console.
- **Create a Bucket**: Click "Create bucket" and provide a unique name for your bucket.
- **Enable Static Website Hosting**: In the bucket properties, enable "Static website hosting."
- **Upload Website Files**: Upload your website files to the S3 bucket.
- **Set Bucket Permissions**: Set bucket policies to allow public access for website hosting.

### Configure IAM Roles for Lambda and API Gateway
- **Navigate to IAM Console**: Access the IAM console.
- **Create Lambda Execution Role**: Create a role for Lambda execution with necessary permissions to interact with SNS, CloudWatch, and other resources.
- **Define API Gateway Execution Role**: Define a role granting permissions for API Gateway to trigger Lambda and handle requests.

### Set Up DynamoDB Table
-  **Access AWS DynamoDB Console**: Open the DynamoDB console.
-  **Create a Table**: Define a table schema to store user-submitted data.

### Set Up AWS Lambda Function
- **Access AWS Lambda Console**: Open the Lambda console.
- **Create a New Lambda Function**: Define the function triggered by API Gateway, providing necessary permissions using the roles created in IAM.
- **Code Logic**: Write code logic within Lambda to process requests and interact with SNS for email subscriptions.
- **Test the Function**: Test the function within the Lambda console or using sample events.

### Configure API Gateway
- **Open API Gateway Console**: Access the API Gateway console.
- **Create a New API**: Define a new REST API with endpoints triggering the Lambda function.
- **Set Endpoint Methods**: Set up methods (OPTION, POST) and integrate them with the Lambda function.
- **Deploy API**: Deploy the API to make it accessible via the generated endpoint.

### Enable CloudWatch for Monitoring
- **Access CloudWatch Console**: Open the CloudWatch console.
- **Set Up Logs and Monitoring**: Configure CloudWatch to capture logs from Lambda functions and API Gateway for monitoring and troubleshooting purposes.
