export default function PageWrapper({ children }) {
    return (
      <div className="flex justify-center bg-white text-gray-900 font-sans">
        <div className="w-full max-w-xl px-4 py-8">
          {children}
        </div>
      </div>
    )
  }
  