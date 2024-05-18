```
{
    "Version": "2008-10-17",
    "Statement": [
        {
            "Effect": "Deny",
            "Principal": "*",
            "Action": "s3:*",
            "Resource": [
                "arn:aws:s3:::node-aws-lambda-crud-dev-serverlessdeploymentbucke-js4zavzoj3ay/*",
                "arn:aws:s3:::node-aws-lambda-crud-dev-serverlessdeploymentbucke-js4zavzoj3ay"
            ],
            "Condition": {
                "Bool": {
                    "aws:SecureTransport": "false"
                }
            }
        }
    ]
}
```
