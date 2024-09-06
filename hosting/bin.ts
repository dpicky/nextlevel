import * as cdk from 'aws-cdk-lib';

import { AmplifyStack } from './stack';

const app = new cdk.App();

const CLOUDFORMATION_STACK_NAME = 'NextLevel';

new AmplifyStack(app, CLOUDFORMATION_STACK_NAME, {
  analyticsReporting: true,
  description: 'NextLevel NextJS App deployed with Amplify',
});
