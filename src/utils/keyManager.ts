
export interface RSAKeyData {
  privateKey: string;
  timestamp: number;
}

const RSA_KEY_STORAGE_KEY = 'employment_law_rsa_key';

export const keyManager = {
  // Store the RSA private key
  storePrivateKey: (privateKey: string): void => {
    const keyData: RSAKeyData = {
      privateKey,
      timestamp: Date.now()
    };
    localStorage.setItem(RSA_KEY_STORAGE_KEY, JSON.stringify(keyData));
  },

  // Retrieve the RSA private key
  getPrivateKey: (): string | null => {
    try {
      const stored = localStorage.getItem(RSA_KEY_STORAGE_KEY);
      if (!stored) return null;
      
      const keyData: RSAKeyData = JSON.parse(stored);
      return keyData.privateKey;
    } catch (error) {
      console.error('Error retrieving private key:', error);
      return null;
    }
  },

  // Check if key exists
  hasPrivateKey: (): boolean => {
    return !!keyManager.getPrivateKey();
  },

  // Remove the private key
  removePrivateKey: (): void => {
    localStorage.removeItem(RSA_KEY_STORAGE_KEY);
  },

  // Validate RSA key format
  validateRSAKey: (key: string): boolean => {
    const rsaKeyPattern = /-----BEGIN (RSA PRIVATE KEY|OPENSSH PRIVATE KEY|PRIVATE KEY)-----[\s\S]*?-----END (RSA PRIVATE KEY|OPENSSH PRIVATE KEY|PRIVATE KEY)-----/;
    return rsaKeyPattern.test(key.trim());
  },

  // Initialize with the provided key
  initializeKey: (): void => {
    const providedKey = `-----BEGIN OPENSSH PRIVATE KEY-----
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
-----END OPENSSH PRIVATE KEY-----`;

    if (!keyManager.hasPrivateKey()) {
      keyManager.storePrivateKey(providedKey);
      console.log('RSA private key initialized successfully');
    }
  }
};

// Initialize the key when the module loads
keyManager.initializeKey();
