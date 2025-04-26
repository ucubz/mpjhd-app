import { useNavigate } from 'react-router-dom';
import { useMPJHD } from '../context/MPJHDContext';

const Step5_Pembobotan = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useMPJHD();
  const pembobotan = state.pembobotan;

  const toggle = (key) => {
    dispatch({ type: 'SET_PEMBOBOTAN', key, value: !pembobotan[key] });
  };

  const handleNext = () => {
    navigate('/step/6');
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Faktor Pembobotan Tambahan</h1>
      <div className="space-y-2">
        <label><input type="checkbox" checked={pembobotan.banyakPasal} onChange={() => toggle('banyakPasal')} /> Lebih dari 1 pasal dilanggar</label><br />
        <label><input type="checkbox" checked={pembobotan.pernahDihukum} onChange={() => toggle('pernahDihukum')} /> Pernah dijatuhi hukuman disiplin sebelumnya</label><br />
        <label><input type="checkbox" checked={pembobotan.kesengajaan} onChange={() => toggle('kesengajaan')} /> Pelanggaran dilakukan dengan unsur kesengajaan</label><br />
        <label><input type="checkbox" checked={pembobotan.hambatPemeriksaan} onChange={() => toggle('hambatPemeriksaan')} /> Menghambat proses pemeriksaan</label><br />
      </div>
      <button onClick={handleNext} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Lanjut</button>
    </div>
  );
};

export default Step5_Pembobotan;
