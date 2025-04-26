import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/step/1');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Aplikasi Perhitungan MPJHD</h1>
      <p className="mb-6 max-w-xl text-gray-700">
        Alat bantu ini dirancang untuk membantu menghitung jenis hukuman disiplin berdasarkan PMK 123 Tahun 2023 dan PP 94 Tahun 2021. 
        Jawablah pertanyaan langkah demi langkah, dan sistem akan menampilkan jenis hukuman yang sesuai.
      </p>
      <button
        onClick={handleStart}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow"
      >
        Mulai Hitung MPJHD
      </button>
    </div>
  );
};

export default LandingPage;
