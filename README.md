# Weather Report to Slack

![image](https://user-images.githubusercontent.com/1274151/75952123-14b2df80-5e6b-11ea-9c37-3db0b532b73f.png)

Sends weather updates to a Slack channel.

# Install

1. Install [`serverless`](https://serverless.com/), which I use to configure the AWS Lambda function that runs daily.

   ```
   npm install -g serverless
   npm install
   ```

1. Configure your AWS credentials, follow the instructions [here](https://serverless.com/framework/docs/providers/aws/guide/credentials#using-aws-profiles).

1. Create an [incoming webhook](https://www.slack.com/apps/new/A0F7XDUAZ) that will post to the channel of your choice on your Slack workspace. Grab the URL for use in the next step.

1. Deploy the system into your AWS account, replacing the webhook URL below with the one you generated above.

   ```
   serverless deploy --aws-profile YOUR_AWS_PROFILE_NAME --slack_url="https://hooks.slack.com/services/xxx/yyy/zzzz"
   ```

   You can also run it once to verify that it works:

   ```
   serverless invoke --aws-profile YOUR_AWS_PROFILE_NAME --function weather --slack_url="https://hooks.slack.com/services/xxx/yyy/zzzz"
   ```
