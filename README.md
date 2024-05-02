# Detection-and-Response-on-AWS

## HOW TO RUN THIS PROJEECT (Follow step by step)
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
## ARCHITECTURE

![architecture](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/90b32d6c-7c92-4146-8f3d-aa75013b9f6b)

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

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/da341f64-3d69-40b2-ab29-bee2eb5cd4f7)

Result of scan `standard+code scan`

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/1d7a456a-34b4-4650-85f6-cd00c88cc257)


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
| AWS Elastic Disaster Recovery | Scalable, cost-effective application recovery to AWS |

## REFERENCES
[1] https://www.serverless.com/framework/docs/getting-started
