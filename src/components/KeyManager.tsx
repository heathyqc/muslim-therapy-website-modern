
import React, { useState, useEffect } from 'react';
import { Key, Eye, EyeOff, Trash2, CheckCircle } from 'lucide-react';
import { keyManager } from '../utils/keyManager';
import { Input } from './ui/input';

const KeyManager = () => {
  const [hasKey, setHasKey] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const [keyInput, setKeyInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setHasKey(keyManager.hasPrivateKey());
  }, []);

  const handleSaveKey = () => {
    if (keyInput.trim() && keyManager.validateRSAKey(keyInput)) {
      keyManager.storePrivateKey(keyInput.trim());
      setHasKey(true);
      setIsEditing(false);
      setKeyInput('');
    } else {
      alert('Invalid RSA key format');
    }
  };

  const handleRemoveKey = () => {
    if (confirm('Are you sure you want to remove the RSA private key?')) {
      keyManager.removePrivateKey();
      setHasKey(false);
      setShowKey(false);
    }
  };

  const getCurrentKey = () => {
    return keyManager.getPrivateKey() || '';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl">
      <div className="flex items-center space-x-3 mb-6">
        <Key className="w-6 h-6 text-law-navy" />
        <h3 className="text-xl font-semibold text-law-navy">RSA Private Key Management</h3>
      </div>

      {hasKey && !isEditing ? (
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-green-600">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">RSA Private Key is configured</span>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={() => setShowKey(!showKey)}
              className="flex items-center space-x-2 px-4 py-2 bg-law-navy text-white rounded-lg hover:bg-opacity-90 transition-colors"
            >
              {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{showKey ? 'Hide Key' : 'Show Key'}</span>
            </button>

            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-law-gold text-white rounded-lg hover:bg-law-gold-dark transition-colors"
            >
              Update Key
            </button>

            <button
              onClick={handleRemoveKey}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              <span>Remove</span>
            </button>
          </div>

          {showKey && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <pre className="text-sm font-mono text-gray-800 whitespace-pre-wrap break-all">
                {getCurrentKey()}
              </pre>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-gray-600">
            {hasKey ? 'Update your RSA private key:' : 'Enter your RSA private key:'}
          </p>

          <textarea
            value={keyInput}
            onChange={(e) => setKeyInput(e.target.value)}
            placeholder="-----BEGIN RSA PRIVATE KEY-----
...
-----END RSA PRIVATE KEY-----"
            className="w-full h-40 p-3 border border-gray-300 rounded-lg font-mono text-sm"
          />

          <div className="flex space-x-3">
            <button
              onClick={handleSaveKey}
              className="px-6 py-2 bg-law-gold text-white rounded-lg hover:bg-law-gold-dark transition-colors font-medium"
            >
              Save Key
            </button>

            {isEditing && (
              <button
                onClick={() => {
                  setIsEditing(false);
                  setKeyInput('');
                }}
                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default KeyManager;
