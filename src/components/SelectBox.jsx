export default function SelectBox({ label, value, onChange, options }) {
    return (
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
        <select
          value={value}
          onChange={onChange}
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
        >
          <option value="">Pilih...</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    )
  }
  