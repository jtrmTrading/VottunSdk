const axios = require('axios');

class VottunSDK {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.vottun.tech';
  }

  async estimateGasForContractDeployment(contractSpecsId, sender, blockchainNetwork, params) {
    try {
      const response = await axios.post(`${this.baseURL}/core/v1/evm/contract/deploy/estimategas`, {
        contractSpecsId,
        sender,
        blockchainNetwork,
        params,
      });
      return response.data;
    } catch (error) {
      console.error('Error estimating gas for contract deployment:', error.message);
      throw error;
    }
  }

  async estimateGasForTransaction(contractAddress, sender, blockchainNetwork, value, method, params) {
    try {
      const response = await axios.post(`${this.baseURL}/core/v1/evm/transact/mutable/estimategas`, {
        contractAddress,
        sender,
        blockchainNetwork,
        value,
        method,
        params,
      });
      return response.data;
    } catch (error) {
      console.error('Error estimating gas for transaction:', error.message);
      throw error;
    }
  }

  async estimateGasForNativeTransfer(sender, recipient, blockchainNetwork, value) {
    try {
      const response = await axios.post(`${this.baseURL}/core/v1/evm/chain/transfer/estimategas`, {
        sender,
        recipient,
        blockchainNetwork,
        value,
      });
      return response.data;
    } catch (error) {
      console.error('Error estimating gas for native transfer:', error.message);
      throw error;
    }
  }

  
  

///////////// 20
async deployContractErc20(name, symbol, alias, initialSupply, network, gasLimit ) {
    try {
      const response = await axios.post(`${this.baseURL}/erc/v1/erc20/deploy`, {
        name, 
        symbol, 
        alias, 
        initialSupply, 
        network, 
        gasLimit

      });
      return response.data;
    } catch (error) {
      console.error('Error contract deployment Erc-20 :', error.message);
      throw error;
    }
  }


  async transferContractErc20(contractAddress, recipient, network, royaltyRecipient, amount, gasLimit) {
    try {
      const response = await axios.post(`${this.baseURL}/erc/v1/erc20/transfer`, {
        contractAddress, 
        recipient, 
        network, 
        royaltyRecipient, 
        amount, 
        gasLimit
      });
      return response.data;
    } catch (error) {
      console.error('Error contract Transfer Erc-20 :', error.message);
      throw error;
    }
  }


async transferFromContractErc20(contractAddress, sender, recipient, network, amount, gasLimit) {
    try {
      const response = await axios.post(`${this.baseURL}/erc/v1/erc20/transferFrom`, {
        contractAddress, 
        sender, 
        recipient, 
        network, 
        amount, 
        gasLimit
      });
      return response.data;
    } catch (error) {
      console.error('Error contract Transfer from Erc-20 :', error.message);
      throw error;
    }
  }


async increaseAllowanceContractErc20(contractAddress, spender, network, gasLimit, addedValue) {
    try {
      const response = await axios.post(`${this.baseURL}/erc/v1/erc20/increaseAllowance`, {
        contractAddress, 
        spender, 
        network, 
        gasLimit, 
        addedValue
      });
      return response.data;
    } catch (error) {
      console.error('Error contract Increase Allowance Erc-20 :', error.message);
      throw error;
    }
  }


async decreaseAllowanceContractErc20(contractAddress, spender, network, gasLimit, subtractedValue) {
    try {
      const response = await axios.post(`${this.baseURL}/erc/v1/erc20/decreaseAllowance`, {
        contractAddress, 
        spender, 
        network, 
        gasLimit, 
        subtractedValue
      });
      return response.data;
    } catch (error) {
      console.error('Error contract Decrease Allowance Erc-20 :', error.message);
      throw error;
    }
  }


async allowanceContractErc20(contractAddress, network, owner, spender) {
    try {
      const response = await axios.get(`${this.baseURL}/erc/v1/erc20/allowance`, {
        contractAddress, 
        network, 
        owner, 
        spender
      });
      return response.data;
    } catch (error) {
      console.error('Error contract Allowance Erc-20 :', error.message);
      throw error;
    }
  }


async nameContractErc20(contractAddress, network) {
    try {
      const response = await axios.get(`${this.baseURL}/erc/v1/erc20/name`, {
        contractAddress, 
        network
      });
      return response.data;
    } catch (error) {
      console.error('Error contract Name Erc-20 :', error.message);
      throw error;
    }
  }


async nameContractErc20(contractAddress, network) {
    try {
      const response = await axios.get(`${this.baseURL}/erc/v1/erc20/symbol`, {
        contractAddress, 
        network
      });
      return response.data;
    } catch (error) {
      console.error('Error contract symbol Erc-20 :', error.message);
      throw error;
    }
  }


async totalSupplyContractErc20(contractAddress, network) {
    try {
      const response = await axios.get(`${this.baseURL}/erc/v1/erc20/totalSupply`, {
        contractAddress, 
        network
      });
      return response.data;
    } catch (error) {
      console.error('Error contract Total supply Erc-20 :', error.message);
      throw error;
    }
  }



async decimalsContractErc20(contractAddress, network) {
    try {
      const response = await axios.get(`${this.baseURL}/erc/v1/erc20/decimals`, {
        contractAddress, 
        network
      });
      return response.data;
    } catch (error) {
      console.error('Error contract decimals Erc-20 :', error.message);
      throw error;
    }
  }

async balanceOfContractErc20(contractAddress, network, address) {
    try {
      const response = await axios.get(`${this.baseURL}/erc/v1/erc20/balanceOf`, {
        contractAddress, 
        network, 
        address
      });
      return response.data;
    } catch (error) {
      console.error('Error contract Balance Of Erc-20 :', error.message);
      throw error;
    }
  }



/////////// 721
async deployContractErc721(name, symbol, alias, network, gasLimit, alias ) {
    try {
      const response = await axios.post(`${this.baseURL}/erc/v1/erc721/deploy`, {
        name, 
        symbol, 
        alias, 
        network, 
        gasLimit, 
        alias

      });
      return response.data;
    } catch (error) {
      console.error('Error contract deployment Erc-721 :', error.message);
      throw error;
    }
  }

  async transferContractErc721(contractAddress, network, id, from, to) {
    try {
      const response = await axios.post(`${this.baseURL}/erc/v1/erc721/transfer`, {
        contractAddress, 
        network, 
        id, 
        from, 
        to
      });
      return response.data;
    } catch (error) {
      console.error('Error contract Transfer Erc-721:', error.message);
      throw error;
    }
  }

async balanceOfContractErc721(contractAddress, network, address) {
    try {
      const response = await axios.get(`${this.baseURL}/erc/v1/erc721/balanceOf`, {
        contractAddress, 
        network, 
        address
      });
      return response.data;
    } catch (error) {
      console.error('Error contract Balance Of Erc-721 :', error.message);
      throw error;
    }
  }


async mintContractErc721(recipientAddress, tokenId, ipfsUri, ipfsHash, network, contractAddress, royaltyPercentage, gas) {
    try {
      const response = await axios.post(`${this.baseURL}/erc/v1/erc721/mint`, {
        recipientAddress, 
        tokenId, 
        ipfsUri, 
        ipfsHash, 
        network, 
        contractAddress, 
        royaltyPercentage, 
        gas
      });
      return response.data;
    } catch (error) {
      console.error('Error contract Mint Erc-721 :', error.message);
      throw error;
    }
  }

  async tokenUriContractErc721(contractAddress, network, id) {
    try {
      const response = await axios.post(`${this.baseURL}/erc/v1/erc721/tokenUri`, {
        contractAddress, 
        network, 
        id
      });
      return response.data;
    } catch (error) {
      console.error('Error contract Token Uri Erc-721 :', error.message);
      throw error;
    }
  }

  async ownerOfContractErc721(contractAddress, network, id) {
    try {
      const response = await axios.get(`${this.baseURL}/erc/v1/erc721/ownerOf`, {
        contractAddress, 
        network, 
        id
      });
      return response.data;
    } catch (error) {
      console.error('Error contract Owner Of Erc-721 :', error.message);
      throw error;
    }
  }


////////////1155
async deployContractErc1155(name, symbol, ipfsUri, royaltyRecipient, royaltyValue, network,  gasLimit, alias) {
    try {
      const response = await axios.post(`${this.baseURL}/erc/v1/erc1155/deploy`, {
        name, 
        symbol, 
        ipfsUri, 
        royaltyRecipient, 
        royaltyValue, 
        network,  
        gasLimit, 
        alias
      });
      return response.data;
    } catch (error) {
      console.error('Error contract deployment Erc-1155 :', error.message);
      throw error;
    }
  }

async transferContractErc1155(contractAddress, network, to, id, amount) {
    try {
      const response = await axios.post(`${this.baseURL}/erc/v1/erc1155/transfer`, {
        contractAddress, 
        network, 
        to, 
        id, 
        amount
      });
      return response.data;
    } catch (error) {
      console.error('Error contract Transfer Erc-1155:', error.message);
      throw error;
    }
  }


async transferBatchContractErc1155(contractAddress, network, to, ids, amount) {
    try {
      const response = await axios.post(`${this.baseURL}/erc/v1/erc1155/transferBatch`, {
        contractAddress, 
        network, 
        to, 
        ids, 
        amount
      });
      return response.data;
    } catch (error) {
      console.error('Error contract Transfer batch Erc-1155 :', error.message);
      throw error;
    }
  }


async balanceOfContractErc1155(contractAddress, network, address, id) {
    try {
      const response = await axios.get(`${this.baseURL}/erc/v1/erc1155/balanceOf`, {
        contractAddress, 
        network, 
        address, 
        id
      });
      return response.data;
    } catch (error) {
      console.error('Error contract Balance Of Erc-1155 :', error.message);
      throw error;
    }
  }


async mintContractErc1155(contractAddress, network, to, id, amount) {
    try {
      const response = await axios.post(`${this.baseURL}/erc/v1/erc1155/mint`, {
        contractAddress, 
        network, 
        to, 
        id, 
        amount
      });
      return response.data;
    } catch (error) {
      console.error('Error contract Mint Erc-1155 :', error.message);
      throw error;
    }
  }


async mintBatchContractErc1155(contractAddress, network, to, amount, ids) {
    try {
      const response = await axios.post(`${this.baseURL}/erc/v1/erc1155/mintbatch`, {
        contractAddress, 
        network, 
        to, 
        amount, 
        ids
      });
      return response.data;
    } catch (error) {
      console.error('Error contract Mint batch Erc-1155 :', error.message);
      throw error;
    }
  }


async tokenUriContractErc1155(contractAddress, network, id) {
    try {
      const response = await axios.post(`${this.baseURL}/erc/v1/erc1155/tokenUri`, {
        contractAddress, 
        network, 
        id
      });
      return response.data;
    } catch (error) {
      console.error('Error contract Token Uri Erc-1155 :', error.message);
      throw error;
    }
  }


/////////////////////////
//Custodied Wallets

async newHashCustodiedWallet(username, strategies, callbackUrl, fallbackUrl, cancelUrl) {
    try {
      const response = await axios.post(`${this.baseURL}/cwll/v1/hash/new`, {
        username, 
        strategies, 
        callbackUrl, 
        fallbackUrl, 
        cancelUrl
      });
      return response.data;
    } catch (error) {
      console.error('Error Custodied Wallets Get New Hash :', error.message);
      throw error;
    }
  }


async getAdressCustodiedWallet(userEmail) {
    try {
      const response = await axios.get(`${this.baseURL}/cwll/v1/evm/wallet/custodied/address`, {
        userEmail
      });
      return response.data;
    } catch (error) {
      console.error('Error Get Custodied Wallet Address:', error.message);
      throw error;
    }
  }

async getCustomerCustodiedWallet() {
    try {
      const response = await axios.get(`${this.baseURL}/cwll/v1/evm/wallet/custodied/list`, {
        
      });
      return response.data;
    } catch (error) {
      console.error('Error Get Customer Custodied Wallets:', error.message);
      throw error;
    }
  }

async createOtpCustodiedWallet(userEmail) {
    try {
      const response = await axios.post(`${this.baseURL}/cwll/v1/2fa/signature/otp/new?email=<user_email>`, {
        
      });
      return response.data;
    } catch (error) {
      console.error('Error Create Signature Email OTP:', error.message);
      throw error;
    }
  }


async sendTransactionCustodiedWallet(contractAddress, myReference, sender, blockchainNetwork, gas, method, params, pin) {
    try {
      const response = await axios.post(`${this.baseURL}/core/v1/evm/wallet/custodied/transact/mutable?strategy=<value>`, {
        contractAddress, 
        myReference, 
        sender, 
        blockchainNetwork, 
        gas, 
        method, 
        params, 
        pin
      });
      return response.data;
    } catch (error) {
      console.error('Error Send Transaction from Custodied Wallet:', error.message);
      throw error;
    }
  }


async transferNativeAssetsFromCustodiedWallet(myReference, recipient, sender, blockchainNetwork, gas, value, pin) {
    try {
      const response = await axios.post(`${this.baseURL}/core/v1/evm/wallet/custodied/transfer?strategy=<strategy>`, {
        myReference, 
        recipient, 
        sender, 
        blockchainNetwork, 
        gas, 
        value, 
        pin
      });
      return response.data;
    } catch (error) {
      console.error('Error Transfer native assets from Custodied Wallet:', error.message);
      throw error;
    }
  }


  // Example usage:
  async main() {
    const apiKey = 'YOUR_API_KEY';
    const vottun = new VottunSDK(apiKey);

    // Call the methods as needed
    // ...

    console.log('SDK initialized successfully.');
  }
}

// Initialize the SDK with your API key
const apiKey = 'YOUR_API_KEY';
const vottunSDK = new VottunSDK(apiKey);

// Call the example method
vottunSDK.main();
