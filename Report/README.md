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

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/025f9791-e2be-4262-b90c-6cd0975d49e6)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/32105169-6eca-4514-a465-f3e35c1003c8)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/1f89b5eb-db81-4242-a21a-84ceaf6279b3)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/e71ad894-6f8a-4bbb-bc1a-b759a7029111)

**codeguru library**

Inject some vulnerability

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/5281965b-0717-42cb-9c17-c82db7cdff31)

Result of scan `standard+code scan`

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/27324546-c8c0-4134-8691-d9d521e380c0)

## USE AWS MACIE TO DETECT AND PROTECT SENSITIVE DATA
![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/a06f5647-8ee0-4269-8c1f-1193f06444cd)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/bfb9f2ac-fea2-4223-afd9-ac9bcb108964)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/8c9a4af2-f8b5-462d-804b-29b20426221f)

### SENSITIVE DATA
![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/ee113335-a1b5-40fb-a4d8-282bb0fc8ded)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/93bd7adb-30c4-4b5f-934f-2dada34229d6)

## GUARDDUTY WITH (CLOUD TRAIL + S3 LOGS)
![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/e03a9704-39db-4c3e-b671-0551db9ba2f4)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/384be450-a1bc-47c4-a8e2-84c8e56340ff)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/a1eaacc1-1003-4cd7-9600-93ed237c7c2b)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/16bc83b1-856a-40a5-8b9b-efae14658e11)

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

## USE AWS SECURITY HUB TO DETECT INCIDENTS AND RESPOND QUICKLY
![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/611ca383-9213-43aa-ae75-cec6d1776b96)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/a0e654e3-554b-4412-b89d-fcef1abfb3dd)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/54c7a63b-980b-4e69-9d70-ae122abfd0af)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/fe1598f9-39e3-4427-a197-c8f8eda146c1)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/107ea7a4-4c9c-4267-827c-96f1c597e68b)

## TRACK USER ACTIVITY AND API USAGE
![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/a3bf5a8e-b922-4cd5-9a64-54f6ce68dcba)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/d54f68e8-f74e-401c-a4e0-d9f87b3176ae)

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

## AWS DETECTIVE
![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/88c95c2d-bf8f-436d-8908-b50219b684ba)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/4673e8a5-2579-41b4-871b-3e75aacdcb35)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/449a49b1-e9d7-420e-97e7-7614e02af239)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/548a87b9-26a0-4667-a965-7415527d1f7a)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/c4b0f5d2-0e08-4a58-9ca9-d016f1bdd805)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/8ad8fd18-3dfe-4dcf-8142-ccf563ef85cf)

![image](https://github.com/Clapboiz/Detection-and-Response-on-AWS/assets/112185647/b0268e74-3f05-41fc-948d-4c11ed279728)
