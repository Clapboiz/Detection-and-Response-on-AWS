# Detection-and-Response-on-AWS
You can see all reports as well as how we deploy them in the folder **[Report](https://github.com/Clapboiz/Detection-and-Response-on-AWS/tree/main/Report)**
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
## REFERENCES
[1] https://www.serverless.com/framework/docs/getting-started

[2] https://aws.amazon.com/vi/blogs/apn/integrating-malware-scanning-into-your-data-ingestion-pipeline-with-antivirus-for-amazon-s3/

[3] https://help.cloudstoragesec.com/console-overview/protection/protected-buckets

[4] https://help.cloudstoragesec.com/getting-started/initial-config

[5]. https://www.youtube.com/watch?v=2Bdxh9WXDX8
