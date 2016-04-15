// Browser environment
if(typeof window !== 'undefined') {
    WalletAccounts = (typeof window.WalletAccounts !== 'undefined') ? window.WalletAccounts : require('ethereumjs-accounts');
}


// Node environment
if(typeof global !== 'undefined') {
    WalletAccounts = (typeof global.WalletAccounts !== 'undefined') ? global.WalletAccounts : require('ethereumjs-accounts');
}