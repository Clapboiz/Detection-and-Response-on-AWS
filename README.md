# Detection-and-Response-on-AWS
## SOLUTION ARCHITECTURE
![architecture](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/af6e12ee-aaa2-43d4-9b3c-e275f4c77349)

| Criteria                                | Slack Integration                | SNS Integration                | SIEM (GuardDuty)                   |
|-----------------------------------------|----------------------------------|--------------------------------|-----------------------------------|
| **Ease of Setup**                       | Easy to set up Slack webhook.   | Simple integration with SNS.   | Requires configuration within AWS.|
| **Real-time Notifications**             | Real-time alerts in Slack.      | Real-time alerts through SNS. | Real-time detection and alerts.   |
| **Customization**                       | Limited customization options.  | Limited customization options.| Highly customizable configurations.|
| **Scalability**                         | Scalable for small to medium teams. | Scalable for various team sizes. | Scalable for enterprise-level needs. |
| **Cost**                                | Free, but may incur Slack costs. | Minimal cost for SNS usage.    | Included in AWS GuardDuty pricing.|
| **Event Correlation**                   | Limited event correlation.       | Limited event correlation.     | Advanced event correlation capabilities. |
| **Integration with Other Tools**        | Requires additional integration for analysis. | Requires additional integration for analysis. | Integration with various AWS services and third-party tools. |
| **Ease of Monitoring**                  | Easy monitoring within Slack.    | Limited monitoring options.    | Monitoring within AWS console and third-party tools. |
| **Management Overhead**                 | Low management overhead.         | Low management overhead.       | May require additional management effort. |
| **Suitability for Serverless Architecture** | Suitable for serverless architecture. | Suitable for serverless architecture. | Native to AWS, fits well with serverless architecture. |
| **Overall Recommendation**              | Good for small teams with simple needs. | Suitable for medium-sized teams. | Best for large-scale deployments with complex requirements. |
## SOLUTION
| AWS Service | Description |
|-------------|-------------|
| Amazon GuardDuty | Protect AWS accounts with intelligent threat detection |
| Amazon Inspector | Automated and continual vulnerability management at scale |
| AWS Security Hub | Automate AWS security checks and centralize security alerts |
| Amazon Detective | Analyze and visualize security data to investigate potential security issues |
| AWS Config | Assess, audit, and evaluate configurations of your resources |
| Amazon CloudWatch | Observe and monitor resources and applications on AWS, on premises, and on other clouds |
| AWS CloudTrail | Track user activity and API usage |
## DEPLOYMENT ARCHITECTURE
![deployment](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/f3f7c86a-564a-4cfa-9808-e9b447374a93)
## CRUD WEB SERVERLESS USING NODEJS, SEVERLESS FRAMEWORK 
**Note: You must run our project on `cmd` or `git bash`, not on powershell because the error "Select-String: A positional parameter cannot be found that accepts argument '--migrate'" will appear because PowerShell confuses the sls command with Select-String. This happens because sls is an alias for Select-String in PowerShell**

Because we need to test locally before releasing it to the cloud, you need to install the serverless framework to test locally.

**Serverless plugin framework**

```
npm install -g serverless
```

**Install AWS CLI**

```
https://aws.amazon.com/vi/cli/
```

**Then install package**

```
npm install
```

**Deploy & run in cloud**

Go to `IAM Service` and create a user and you can give it full permissions or some permissions so you can operate with serverless architecture, then get the `Access Key ID` and `Secret access key` and Proceed with configuration to deploy from local to cloud

In this project, you open cmd and type

```
aws configure
```

then you enter `Access Key ID` , `Secret access key` and `region: us-west-2`

```
sls deploy --verbose
```

Then you access to `dynamodb service`, you copy `Amazon Resource Name (ARN)` and paste it into `serverless.yml` in local `(provider.iamRoleStatements.Resource)`

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/747f57bb-3d55-46f5-ad25-41e0369b84e2)

Next I will demo the create function for you (Use `postman` to demo), the update, read, delete functions are done similarly.

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/d6443cc6-3b58-4c62-8533-29eb589c9707)

### RUN IN LOCAL
```
serverless plugin install -n serverless-offline
```

```
sls offline
```

```
serverless invoke local --function hello
```
## AWS INSPECTOR
It offers two types of scanning for Lambda

1. Amazon Inspector Lambda Standard Scanning
2. Amazon Inspector Lambda Code Scanning

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/245f48be-e07c-443b-89a8-ee48da27e38d)

|                                | Amazon Inspector Lambda Standard Scanning | Amazon Inspector Lambda Code Scanning |
|--------------------------------|--------------------------------------------|----------------------------------------|
| Type of Assessment             | Security Assessment                        | Code Assessment                        |
| Description                    | Assesses the security posture of Lambda applications on AWS | Scans the source code of Lambda applications to detect programming errors and security vulnerabilities |
| Target                         | Lambda applications                        | Source code of Lambda applications    |
| Goal                           | Detect security vulnerabilities and provide detailed information to improve security | Detect programming errors, security vulnerabilities, and code quality issues |

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/cb769ddf-f434-47ec-bab1-e91649e988c8)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/025f9791-e2be-4262-b90c-6cd0975d49e6)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/32105169-6eca-4514-a465-f3e35c1003c8)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/1f89b5eb-db81-4242-a21a-84ceaf6279b3)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/e71ad894-6f8a-4bbb-bc1a-b759a7029111)

**codeguru library**

Inject some vulnerability

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/5281965b-0717-42cb-9c17-c82db7cdff31)

Result of scan `standard+code scan`

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/27324546-c8c0-4134-8691-d9d521e380c0)

## ANTIVIRUS FOR AMAZON S3

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/ebd7d1ef-26ad-4311-b3c1-d0b9ee5c147d)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/25aecc89-51a0-41a2-945a-fb5eb4361e41)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/d5943499-91a8-4423-aff7-27d98b5d2cc3)

Following this link to init & deploy

```
https://help.cloudstoragesec.com/getting-started/how-to-deploy/steps-to-deploy
https://help.cloudstoragesec.com/getting-started/initial-config#step-2-enable-bucket-scanning
```

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/8952664b-34e0-44c5-8115-756c59ea843b)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/57613e49-5f69-4187-a864-6402aaf40248)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/b28192d6-86a0-4be6-ae75-9d66290150a1)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/d2b998a0-063d-429d-b9c4-412adc9bfcdd)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/7ed4d49c-12d7-4631-a524-d18263624c89)

## AUTOMATICALLY REMEDIATE NON-COMPLIANT RESOURCES (AWS CONFIG RULES + AWS SYSTEMS MANAGER)
![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/25e42d3f-5f94-44b6-98d1-58eb1ac15328)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/2726b7f1-7d1e-411f-b8c8-cd35bc3dcd7e)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/36b1db2a-e899-4662-b0de-7242c49f36cd)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/04d0d580-bb3c-496e-9111-5fb0f9f99eb8)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/a25a03f7-9638-4e7e-8193-85519c700b31)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/35fb763f-996c-43a9-b2aa-c2ab6ee5cd4a)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/ada87b99-c1d1-431b-ae36-f86e98cab6f7)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/681ec492-8196-490d-b80f-a66959711f6f)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/325aa7de-92c5-419c-84ce-983930cb0609)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/ea89609f-2ab7-4340-a717-a3f32981b89e)

## IAM ACCESS ANALYZER
![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/b49f18ce-1420-4ec6-b8ce-d8f1b9988f23)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/a4686438-5540-44b1-a951-58727a6265ee)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/6374bcb0-5eda-4a0f-b463-55ab77edb8f0)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/ac4fa14c-5da1-426a-8d7f-fb42cb8a054c)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/e97eeeed-4ca0-46d2-bce1-287ca14639cf)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/a6b40b28-d86a-4013-89f0-9b555261d2c0)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/5324cc7d-7ff9-4741-9c8e-75fa817003b0)

## REFERENCES
[1] https://www.serverless.com/framework/docs/getting-started

[2] https://aws.amazon.com/vi/blogs/apn/integrating-malware-scanning-into-your-data-ingestion-pipeline-with-antivirus-for-amazon-s3/

[3] https://help.cloudstoragesec.com/console-overview/protection/protected-buckets

[4] https://help.cloudstoragesec.com/getting-started/initial-config

[5]. https://www.youtube.com/watch?v=2Bdxh9WXDX8
