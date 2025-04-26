import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useMPJHD } from '../context/MPJHDContext';

const Step3_NilaiPokok = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useMPJHD();
  const [nilai, setNilai] = useState(state.nilaiPokok || 0);

  const handleNext = () => {
    dispatch({ type: 'SET', key: 'nilaiPokok', value: parseInt(nilai) });
    navigate('/step/4');
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Nilai Pokok Pelanggaran</h1>
      <p className="mb-2">Masukkan nilai pokok berdasarkan dampak pelanggaran atau kelompok yang telah dipilih.</p>
      <input
        type="number"
        className="border px-2 py-1 w-32"
        value={nilai}
        onChange={(e) => setNilai(e.target.value)}
        min={0}
      />
      <button onClick={handleNext} className="ml-4 bg-blue-600 text-white px-4 py-2 rounded">Lanjut</button>
    </div>
  );
};

export default Step3_NilaiPokok;
