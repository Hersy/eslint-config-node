import sdlPlugin from '@microsoft/eslint-plugin-sdl';

export default {
  plugins: { '@microsoft/sdl': sdlPlugin },
  rules: {
    '@microsoft/sdl/no-angular-bypass-sanitizer': 'error',
    '@microsoft/sdl/no-angular-sanitization-trusted-urls': 'warn',
    '@microsoft/sdl/no-angularjs-bypass-sce': 'error',
    '@microsoft/sdl/no-angularjs-enable-svg': 'error',
    '@microsoft/sdl/no-angularjs-sanitization-whitelist': 'error',
    '@microsoft/sdl/no-cookies': 'error',
    '@microsoft/sdl/no-document-domain': 'error',
    '@microsoft/sdl/no-document-write': 'error',
    '@microsoft/sdl/no-electron-node-integration': 'error',
    '@microsoft/sdl/no-html-method': 'error',
    '@microsoft/sdl/no-inner-html': 'error',
    '@microsoft/sdl/no-insecure-random': 'warn',
    '@microsoft/sdl/no-insecure-url': 'error',
    '@microsoft/sdl/no-msapp-exec-unsafe': 'error',
    '@microsoft/sdl/no-postmessage-star-origin': 'error',
    '@microsoft/sdl/no-unsafe-alloc': 'error',
    '@microsoft/sdl/no-winjs-html-unsafe': 'error',
  },
};
