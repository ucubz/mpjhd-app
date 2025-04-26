export default function InputField({ label, value, onChange, type = "text", placeholder = "" }) {
    return (
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
        />
      </div>
    )
  }
  