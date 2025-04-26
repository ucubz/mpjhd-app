import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useMPJHD } from '../context/MPJHDContext';
import PasalSelector from '../components/PasalSelector';

const Step1_PilihKategori = () => {
  const navigate = useNavigate();
  const { dispatch } = useMPJHD();
  const [kategori, setKategori] = useState('');
  const [pasal, setPasal] = useState('');

  const handleSubmit = () => {
    if (kategori && pasal) {
      dispatch({ type: 'SET', key: 'kategori', value: kategori });
      dispatch({ type: 'SET', key: 'pasalUtama', value: pasal });
      navigate('/step/2');
    } else {
      alert('Silakan pilih kategori dan pasal terlebih dahulu.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Pilih Kategori Pelanggaran</h1>
      <div className="mb-4">
        <label><input type="radio" name="kategori" value="kewajiban" onChange={(e) => setKategori(e.target.value)} /> Melanggar KEWAJIBAN</label><br />
        <label><input type="radio" name="kategori" value="larangan" onChange={(e) => setKategori(e.target.value)} /> Melakukan LARANGAN</label>
      </div>

      {/* Hanya tampil jika kategori sudah dipilih */}
      {kategori && (
        <PasalSelector
          kategori={kategori}
          selected={pasal}
          onChange={(val) => setPasal(val)}
        />
      )}

      <button onClick={handleSubmit} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Lanjut</button>
    </div>
  );
};

export default Step1_PilihKategori;
