# Detection-and-Response-on-AWS

## HOW TO RUN THIS PROJEECT
**Note: You must run our project on cmd, not on powershell because the error "Select-String: A positional parameter cannot be found that accepts argument '--migrate'" will appear because PowerShell confuses the sls command with Select-String. This happens because sls is an alias for Select-String in PowerShell**

Because we need to test locally before releasing it to the cloud, you need to install the serverless framework to test locally.

**Serverless plugin framework**

```
npm install -g serverless
```

**Serverless dynamodb local (plugin)**

```
npm install --save serverless-dynamodb-local
```

Then in `serverless.yml` add following entry to the plugins array: `serverless-dynamodb-local`

plugins:
  - serverless-dynamodb-local


## ARCHITECTURE

![architecture](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/90b32d6c-7c92-4146-8f3d-aa75013b9f6b)

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
