export default function SalinClipboardButton({ formatFunction, className = "" }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formatFunction())
      alert('Tabel berhasil disalin ke clipboard!')
    } catch (err) {
      alert('Gagal menyalin!')
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={`px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-sm transition-all text-sm md:text-base font-medium ${className}`}
    >
      Salin ke Clipboard
    </button>
  )
}
