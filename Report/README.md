# SOLUTION
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

First, you need to enable `AWS Inspector`

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/025f9791-e2be-4262-b90c-6cd0975d49e6)

This is `Dashboard of AWS Inspector`. In this project, i use `Serverless Architecture`, so i only use lambda scanning

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/32105169-6eca-4514-a465-f3e35c1003c8)

As mentioned above, this is `Lambda Standard Scanning`

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/1f89b5eb-db81-4242-a21a-84ceaf6279b3)

You need to enable two options for lambda scanning because of the benefits it brings, as I mentioned above.

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/e71ad894-6f8a-4bbb-bc1a-b759a7029111)

When i turn on two options of lambda scanning

**codeguru library**


The `Amazon CodeGuru Detector Library` is a resource containing detailed information about CodeGuru's code quality and security detectors to help developers build secure and productive applications on AWS. Each detection page in the Detection Kit Library contains a description, non-compliant and compliant code snippets, severity level, and additional information to help developers minimize their risk.

`Amazon CodeGuru Detector Library` provides vulnerabilities and patching

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/5281965b-0717-42cb-9c17-c82db7cdff31)

Inject some vulnerability

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/27324546-c8c0-4134-8691-d9d521e380c0)

Result of scan `standard+code scan`

## USE AWS MACIE TO DETECT AND PROTECT SENSITIVE DATA
![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/a06f5647-8ee0-4269-8c1f-1193f06444cd)

We will enable these two options to pass input to `Security Hub'.

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/bfb9f2ac-fea2-4223-afd9-ac9bcb108964)

Enable the “Automated sensitive data discovery” feature in Amazon Macie, which will automatically select samples from S3 objects and examine them for sensitive data.

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/93bd7adb-30c4-4b5f-934f-2dada34229d6)

This is 'sensitive data` that AWS Macie scans.

## USE AWS CLOUDTRAIL TO TRACK USER ACTIVITY AND API USAGE
![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/ee113335-a1b5-40fb-a4d8-282bb0fc8ded)

This is the rule to track the API.

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/163cce5a-db1d-44a4-bf01-6546c2be2662)

I set it up to send it to AWS SNS (gmail).

## GUARDDUTY WITH (CLOUD TRAIL + S3 LOGS)
![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/e03a9704-39db-4c3e-b671-0551db9ba2f4)

This will be the input that Guardduty receives

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/384be450-a1bc-47c4-a8e2-84c8e56340ff)

Enable logs from `S3 buckets`

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/a1eaacc1-1003-4cd7-9600-93ed237c7c2b)

`Guardduty` will receive input from `CloudTrail`

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/16bc83b1-856a-40a5-8b9b-efae14658e11)

`GuardDuty` has scanned 3 threats

The `PolicyIAMUser/RootCredentialUsage` error you see in the image is a warning from AWS GuardDuty. It turns out that the ListRoles API was called using root privileges from a specific IP address

**`Patch:`**

+ Use MFA: Secure accounts by requiring multi-factor authentication for root access.

+ Check and modify IAM policies: Ensure that IAM policies do not grant too many unnecessary permissions and update them according to the principle of least permissions.

## ANTIVIRUS FOR AMAZON S3
In this project, we use a third party to detect malware because of the following benefits:

+ In-depth and customizable: Third-party antivirus software is often specifically designed for malware detection and removal. They offer many customization features that allow users to configure them to their specific needs, including deep scanning, scheduled scanning, and handling of infected files.

+ Versatile detection: Many antivirus software programs are capable of detecting many different types of malware, including viruses, trojans, ransomware, spyware, and other threats. This can provide a more comprehensive layer of security.

+ Diversity of different architectures

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/ebd7d1ef-26ad-4311-b3c1-d0b9ee5c147d)

We click here to see the `document` about configuration, and this is the login account for `ANTIVIRUS FOR AMAZON S3'.

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/25aecc89-51a0-41a2-945a-fb5eb4361e41)

It uses `CloudFormations` to automate the creation of services on AWS. You can fill in the information about your serverless web here.

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/d5943499-91a8-4423-aff7-27d98b5d2cc3)

This is the dashboard after we created the third party using 'CloudFormations'.

Following this link to init & deploy

```
https://help.cloudstoragesec.com/getting-started/how-to-deploy/steps-to-deploy
https://help.cloudstoragesec.com/getting-started/initial-config#step-2-enable-bucket-scanning
```

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/8952664b-34e0-44c5-8115-756c59ea843b)

This is the UI of `Antivirus for S3'.

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/57613e49-5f69-4187-a864-6402aaf40248)

Here, i can scan manually or scan by time range.

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/b28192d6-86a0-4be6-ae75-9d66290150a1)

As you can see, I can take action on `virus` after I scan it.

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/d2b998a0-063d-429d-b9c4-412adc9bfcdd)

This is the dashboard after one day of scanning. The two charts above show us the total number of GBs and objects scanned over a period of time.

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/7ed4d49c-12d7-4631-a524-d18263624c89)

Above are the scanning options, and after scanning, it can detect malware when in exe form, and when I zip it again, it can still detect it.

## USE AWS SECURITY HUB TO DETECT INCIDENTS AND RESPOND QUICKLY
![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/fe650085-735b-4ae3-a2e3-014723509848)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/300f6b69-c8c6-4c45-8a51-d3def9f742ea)

Above are the evaluation rules for the security hub.

| **Standard** | **Evaluation Criteria** |
| --- | --- |
| **AWS Foundational Security Best Practices** | - IAM: Manage access permissions, control access, and ensure proper use of IAM. <br> - Logging and Monitoring: Set up and configure logging and monitoring services such as AWS CloudTrail, AWS Config. <br> - Infrastructure Protection: Protect network and services using security groups, VPC, and firewall. <br> - Data Protection: Protect data through encryption and key management. <br> - Incident Response: Prepare and respond to security incidents. |
| **AWS Resource Tagging Standard** | - Tag Consistency: Use consistent keys and values for tags. <br> - Tag Completeness: Ensure all necessary resources are tagged. <br> - Tag Governance: Establish and maintain policies and rules for resource tagging. <br> - Tag Usage: Use tags for cost management, security, and compliance. |
| **CIS AWS Foundations Benchmark** | - Identity and Access Management: Ensure proper configuration and use of IAM. <br> - Logging: Set up logging to monitor activities and security. <br> - Monitoring: Monitor resources and activities to detect security issues. <br> - Networking: Secure the network and properly configure security groups and VPC. <br> - Account Management: Manage AWS accounts and configure security settings. |
| **NIST Special Publication 800-53 Revision 5** | - Access Control: Manage access permissions and ensure only authorized individuals can access the system. <br> - Audit and Accountability: Record and track system activities to detect and investigate incidents. <br> - Security Assessment and Authorization: Assess and authorize security measures. <br> - Configuration Management: Manage and secure system configurations. <br> - Contingency Planning: Plan and prepare for security incidents and system recovery. |
| **PCI DSS** | - Build and Maintain a Secure Network and Systems: Build and maintain a secure network and systems. <br> - Protect Cardholder Data: Protect cardholder data through encryption and access management. <br> - Maintain a Vulnerability Management Program: Manage security vulnerabilities and update software. <br> - Implement Strong Access Control Measures: Implement strong access control measures. <br> - Regularly Monitor and Test Networks: Regularly monitor and test networks. <br> - Maintain an Information Security Policy: Maintain an information security policy. |

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/4d38b796-163e-49df-addd-3bccc075d92a)

You can see the total score as well as the score, failed, and passed of each type of evaluation rule.

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/a0e654e3-554b-4412-b89d-fcef1abfb3dd)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/54c7a63b-980b-4e69-9d70-ae122abfd0af)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/fe1598f9-39e3-4427-a197-c8f8eda146c1)

You can see details of vulnerabilities as well as the number of all, failed, passed, or 1 type of assessor.

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/29048f9e-1310-4348-8799-1f7a8cc2091a)

You can view details about the vulnerability and patching.

This error is related to an S3 bucket allowing public read access, which is not secure and can lead to data in the bucket being accessed illegally. To fix it, you need to change the settings to block public access to this bucket. You can follow the instructions at the URL provided in the recommendations section to fix this error.
## AUTOMATICALLY REMEDIATE NON-COMPLIANT RESOURCES (AWS CONFIG RULES + AWS SYSTEMS MANAGER)
In this project, I will see which resources do not comply with the rule I provided. If they do not comply, it will be a violation, and the administrator will be notified.

It will then be automatically fixed using the custom rule I provide.

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/25e42d3f-5f94-44b6-98d1-58eb1ac15328)

I will check to see if the server log is enabled or not.

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/2726b7f1-7d1e-411f-b8c8-cd35bc3dcd7e)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/36b1db2a-e899-4662-b0de-7242c49f36cd)

Provide resources for it to check compliance or non-compliance

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/04d0d580-bb3c-496e-9111-5fb0f9f99eb8)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/a25a03f7-9638-4e7e-8193-85519c700b31)

Seeing that there are 4 non-compliant resources

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/35fb763f-996c-43a9-b2aa-c2ab6ee5cd4a)

This is a manual remediate

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/ada87b99-c1d1-431b-ae36-f86e98cab6f7)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/681ec492-8196-490d-b80f-a66959711f6f)

This is the rule and policy to auto-remediate

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/325aa7de-92c5-419c-84ce-983930cb0609)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/ea89609f-2ab7-4340-a717-a3f32981b89e)

Information configuration and automatic remediation
## IAM ACCESS ANALYZER
IAM Access Analyzer is designed to:

+ External access detection: Identify and alert when any resources in your AWS account are accessible from outside the organization, including other AWS accounts or public services.

+ Access analytics: Provides detailed information about policies and access so you can better understand who has access to your resources and under what conditions.

+ Access rights management: Helps you manage and adjust access rights to ensure safety and compliance with security policies.

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/b49f18ce-1420-4ec6-b8ce-d8f1b9988f23)

Create analyzer

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/a4686438-5540-44b1-a951-58727a6265ee)

Here, I create a threat by enabling public access. In this project, i do not have a registration or login system with authentication and authorization, so i use the context `public access'.

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/6374bcb0-5eda-4a0f-b463-55ab77edb8f0)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/ac4fa14c-5da1-426a-8d7f-fb42cb8a054c)

After creating analyzer

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/e97eeeed-4ca0-46d2-bce1-287ca14639cf)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/a6b40b28-d86a-4013-89f0-9b555261d2c0)

Some permissions for users to access Dynamodb

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/5324cc7d-7ff9-4741-9c8e-75fa817003b0)

Total number of findings, based on public access and cross-account access

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/40c397a4-b861-4987-b227-a17e52e54b7e)

Detail
## AWS DETECTIVE
AWS Detective uses data from services like AWS CloudTrail and VPC Flow Logs to build graphs and analyze behavior, helping you quickly identify unusual patterns and take appropriate preventative measures.

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/88c95c2d-bf8f-436d-8908-b50219b684ba)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/4673e8a5-2579-41b4-871b-3e75aacdcb35)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/449a49b1-e9d7-420e-97e7-7614e02af239)

You can get input from the security hub, and after viewing the details, you can see what role this account uses to access what, success, failure, or total number of times.

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/548a87b9-26a0-4667-a965-7415527d1f7a)

You can adjust the investigation period (up to 1 month)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/c4b0f5d2-0e08-4a58-9ca9-d016f1bdd805)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/8ad8fd18-3dfe-4dcf-8142-ccf563ef85cf)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/b0268e74-3f05-41fc-948d-4c11ed279728)

After investigating, you can view detailed results as above. You can also view the IP as well as threats coming from this IP
