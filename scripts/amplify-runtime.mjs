// Bundle Amplify and all Auth entry points together so configure() and Auth share
// one deduplicated @aws-amplify/core singleton in the browser.
export { Amplify } from 'aws-amplify';
export * from 'aws-amplify/auth';
export { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';
export { defaultStorage } from 'aws-amplify/utils';
