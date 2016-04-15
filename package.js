/* jshint ignore:start */
Package.describe({
    name: 'bigmoby:ethereumjs-accounts',
    version: '0.0.15',
    summary: 'A simple module for creating, managing and using Ethereum accounts in browser',
    git: 'https://github.com/bigmoby/ethereumjs-accounts.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0.3.2');

    api.export(['WalletAccounts'], ['client']);

    api.addFiles('dist/ethereumjs-accounts.js', 'client');
    api.addFiles('package-init.js', 'client');
});