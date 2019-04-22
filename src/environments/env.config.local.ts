import { EnvConfig } from './env-config.interface';

export const Config: EnvConfig = {
  ENV: 'LOCAL',
  API: '<API_ENDPOINT>',
  TITLE_MAIN: 'Open360',
  TITLE_NAV: 'Open360',
  PROVIDERS: {
    'google': {
      authorizationUrlBase: 'https://accounts.google.com/o/oauth2/auth',
      getParams: {
        response_type: 'code',
        client_id: '<CLIENT_ID>',
        scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
        redirect_uri: '<REDIRECT_URI>'
      }
    }
  },
  FIREBASE_URL: '<FIREBASE_URL>',
  DEFAULT_LANG: 'en',
  AGREEMENTS: '/assets/agreement'
};
