import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useMPJHD } from '../context/MPJHDContext';

const Step4_StatusPelaku = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useMPJHD();
  const [status, setStatus] = useState(state.status || 'sendiri');
  const [peran, setPeran] = useState(state.peran || '');

  const handleNext = () => {
    dispatch({ type: 'SET', key: 'status', value: status });
    dispatch({ type: 'SET', key: 'peran', value: status === 'bersama' ? peran : '' });
    navigate('/step/5');
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Status Pelaku</h1>
      <label className="block mb-2">
        <input type="radio" name="status" value="sendiri" checked={status === 'sendiri'} onChange={(e) => setStatus(e.target.value)} />
        {' '}Pelanggaran dilakukan sendiri
      </label>
      <label className="block mb-4">
        <input type="radio" name="status" value="bersama" checked={status === 'bersama'} onChange={(e) => setStatus(e.target.value)} />
        {' '}Pelanggaran dilakukan bersama-sama
      </label>

      {status === 'bersama' && (
        <div className="mb-4">
          <label className="block mb-1 font-medium">Pilih peran:</label>
          <select value={peran} onChange={(e) => setPeran(e.target.value)} className="border px-2 py-1">
            <option value="">-- Pilih --</option>
            <option value="utama">Pelaku Utama</option>
            <option value="penyerta">Pelaku Penyerta</option>
            <option value="inisiator">Inisiator</option>
            <option value="aktif">Pelaku Aktif</option>
            <option value="pasif">Pelaku Pasif</option>
          </select>
        </div>
      )}

      <button onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded">Lanjut</button>
    </div>
  );
};

export default Step4_StatusPelaku;
