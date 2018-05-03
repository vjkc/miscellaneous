import angular from 'angular';
import $ from 'jquery';

// Import our app config files
import constants from './config/app.constants';
import appConfig from './config/app.config';
import appRun from './config/app.run';
import nwConfig from './config/nw.js';

// Import Angular modules
import '@uirouter/angularjs';
import 'angular-animate';
import 'angular-sanitize';
import 'ng-toast';
import 'ngstorage';
import 'angular-translate';
import 'angular-chart.js';

// Testing
import 'angular-mocks';

// Import our templates file (generated by Gulp)
import './config/app.templates';

// Import our app functionalities
import './layout';
import './directives';
import './components';
import './filters';
import './services';

// Import our app modules
import './modules/home';
import './modules/dashboard';
import './modules/signup';
import './modules/login';
import './modules/languages';
import './modules/transferTransaction';
import './modules/portal';
import './modules/account';
import './modules/multisignature';
import './modules/namespaces';
import './modules/mosaics';
import './modules/addressBook';
import './modules/importanceTransfer';
import './modules/faq';
import './modules/trezor';
import './modules/apostille';
import './modules/exchanges';
import './modules/explorer';
import './modules/offlineTransaction';
import './modules/voting';
import './modules/invoice';
import './modules/signedMessage';

// Create and bootstrap application
const requires = [
    'ui.router',
    'templates',
    'app.layout',
    'app.directives',
    'app.components',
    'app.filters',
    'app.home',
    'app.dashboard',
    'app.transferTransaction',
    'app.createMultisig',
    'app.editMultisig',
    'app.signMultisig',
    'app.namespaces',
    'app.renewNamespaces',
    'app.createMosaic',
    'app.editMosaic',
    'app.portal',
    'app.signup',
    'app.login',
    'app.services',
    'app.account',
    'ngAnimate',
    'ngSanitize',
    'ngToast',
    'ngStorage',
    'chart.js',
    'pascalprecht.translate',
    'app.lang',
    'app.changelly',
    'app.addressBook',
    'app.importanceTransfer',
    'app.multisigImportanceTransfer',
    'app.faq',
    'app.trezor',
    'app.createApostille',
    'app.auditApostille',
    'app.apostilleHistory',
    'app.shapeshift',
    'app.explorerHome',
    'app.explorerApostilles',
    'app.accountsExplorer',
    'app.explorerNamespacesMosaics',
    'app.offlineTransactionCreate',
    'app.offlineTransactionSend',
    'app.votingPolls',
    'app.votingCreatePoll',
    'app.apostilleMessage',
    'app.invoice',
    'app.signedMessageCreation',
    'app.signedMessageVerification'
];

window.$ = window.jQuery = $;

// Load twitter bootstrap with require or jQuery is not defined
require('bootstrap');

// Apply nw.js config if using Chrome
if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
    nwConfig();
}

// Mount on window
window.app = angular.module('app', requires);

angular.module('app').constant('AppConstants', constants);
angular.module('app').config(appConfig);
angular.module('app').run(appRun);

angular.bootstrap(document, ['app'], {
    strictDi: true
});