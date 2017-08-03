# OriginalMy Public ETC/ETH Addresses

### On 2017-06-16 we moved *signing contracts*, *document authenticity* and *id repositories* smart-contracts to **Ethereum Classic** because the Ethereum prices, block times and disapearing transactions.

How to load under *geth*:
    
    loadScript('<path>/contract_addresses.js')
    loadScript('<path>/utils/utils.js')

## Converting wallets
For saving space purposes, we decode bitcoin addresses from bs58 and store the hex representation. Bitcoin wallets normally uses 34 chars and because of that it cant fit on a `bytes32` var.

## Methods

### Document Authenticity - DocAuth()

**storeAuthenticity**

    docAuth.storeAuthenticity('SHA256')
Stores the authenticity (sha256) for a file

**checkAuthenticity**

    docAuth.checkAuthenticity.call('SHA256')
Check the timestamp for documento authenticity stored

### Document signing - DocSign()

**newDocument**

    docSign.newDocument('SHA256', convertedSigners[], convertedWallets[])
Register a document, listing the signers (CPF Id's) with the wallets which will be used for signing

**registerSignature**

    docSign.registerSignature('SHA256', SIGNER_INDEX, SIGNATURE)
Register the signature (created with [OriginalMy LibCrypto](https://github.com/originalmy/originalmy-libcrypto)) for a signer. You can check the SIGNER_INDEX using the method `docSign.getSignerBySignerId`.

**checkCompleted** 
  
    docSign.checkCompleted.call('SHA256')
Check if a document is already signed by all signers

**checkDocSigner**

    docSign.checkDocSigner.call('SHA256', "0x"+toHex(CPF_ID)) 
Check if the signer already signed a document

**checkTimestamp**

    docSign.checkTimestamp.call('SHA256')
Check the timestamp for a document authenticity stored

**countSignatures**

    docSign.countSignatures.call('SHA256')
Count the total of signatures already registered for a document

**countSigners**

    docSign.countSigners.call('SHA256')
Count the total of signers for a document

**getSignerBySignerId**

    docSign.getSignerBySignerId.call('SHA256', "0x"+toHex(CPF_ID))
Read information for a signer for a document, using their CPF Id.

**getSignerBySignerIndex**

    docSign.getSignerBySignerIndex.call('SHA256', INDEX)
Read information for a signer for a document, using the signer index
    
**getSignerIdByWallet**

    docSign.getSignerIdByWallet.call('SHA256', "0x"+toHex(walletConverted))
Read information for a signer for a document, using their converted wallet information.


### CPF Ids Repository - IdRepo()

**newUser**

    idRepo.newUser(CPF_ID, 'WALLET')
Register a new wallet for a user (CPF Id)

**checkUserByWallet**

    idRepo.checkUserByWallet.call('WALLET')
Returns the user_id (CPF Id) giving the wallet address

**getLastWallet**

    idRepo.idRepo.getLastWallet.call(CPF_ID)
Returns the last wallet registered for a user

**getWalletsFromUser**

    idRepo.getWalletsFromUser.call(CPF_ID)
Returns all wallets already used by an user

**isWalletFromUser**

    idRepo.isWalletFromUser.call(CPF_ID, 'WALLET')
Check if a wallet belongs to an user (bool)

**totalUsers**

    idRepo.totalUsers.call()
Return the # total of users registered

**totalWallets**

    idRepo.totalWallets.call()
Returns the # total of wallets registered

