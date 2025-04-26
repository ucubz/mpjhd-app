import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useMPJHD } from '../context/MPJHDContext';

const kelompokOpsi = ['Kelompok I', 'Kelompok II', 'Kelompok III', 'Kelompok IV', 'Kelompok V', 'Kelompok VI'];

const Step2_Pengelompokan = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useMPJHD();
  const [kelompok, setKelompok] = useState(state.kelompok || '');

  const handleNext = () => {
    if (kelompok) {
      dispatch({ type: 'SET', key: 'kelompok', value: kelompok });
      navigate('/step/3');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Kelompokkan Pelanggaran</h1>
      <p className="mb-2">Berdasarkan pasal utama, pilih kelompok pelanggaran:</p>
      {kelompokOpsi.map((k, i) => (
        <label key={i} className="block">
          <input type="radio" name="kelompok" value={k} checked={kelompok === k} onChange={(e) => setKelompok(e.target.value)} /> {k}
        </label>
      ))}
      <button onClick={handleNext} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Lanjut</button>
    </div>
  );
};

export default Step2_Pengelompokan;
