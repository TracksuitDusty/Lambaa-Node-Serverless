# Serverless Seed

A simple serverless seed project to get things going quickly


## Dev Setup

This project is developed against NodeJS 12.0.  To install, run 

``` 
npm install
```

Required configuration:
```
create a deploy.env.yml file with the following keys:

* IAM_ROLE - the injected IAM role for the lambda function which should include appropriate permissions
* IS_SERVERLESS - Set to true for local execution, can be helpful for troubleshooting
* LIFECYCLE - dev, test, prod, etc
    
```

Additional helpful commands:

```
npm run start - start the project using the Serverless Offline module for local testing.  Not very useful since there are no events hooked up to, but you can add a simple HTTP get to test invocation locally.

npm run test - run all unit tests

npm run deploy - deploy the project using your locally configured AWS credentials
```