export default function Card({ children }) {
    return (
      <div className="bg-white shadow-md rounded-xl p-6 mx-auto w-[400px] md:w-[480px]">
        {children}
      </div>
    )
  }
  