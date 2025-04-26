import { useNavigate } from "react-router-dom"

export default function BackButton({ label = "Kembali" }) {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(-1)}
      className="px-4 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100 transition-all text-sm md:text-base"
    >
      {label}
    </button>
  )
}
