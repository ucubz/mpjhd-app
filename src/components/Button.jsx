export default function Button({ children, onClick, type = "button" }) {
    return (
      <button
        type={type}
        onClick={onClick}
        className="px-4 py-2 bg-primary text-white rounded-xl shadow-sm hover:bg-primary-dark transition-all text-sm md:text-base font-medium"
      >
        {children}
      </button>
    )
  }
  