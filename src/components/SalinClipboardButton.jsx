
import React from 'react';

const SalinClipboardButton = ({ formatFunction }) => {
  const handleCopy = () => {
    const text = formatFunction();
    navigator.clipboard.writeText(text);
    alert('Hasil telah disalin ke clipboard!');
  };

  return (
    <button
      onClick={handleCopy}
      className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
    >
      Salin ke Clipboard
    </button>
  );
};

export default SalinClipboardButton;
