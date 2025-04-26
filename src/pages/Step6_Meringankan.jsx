import { useNavigate } from 'react-router-dom';
import { useMPJHD } from '../context/MPJHDContext';

const Step6_Meringankan = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useMPJHD();
  const meringankan = state.meringankan;

  const toggle = (key) => {
    dispatch({ type: 'SET_MERINGANKAN', key, value: !meringankan[key] });
  };

  const handleNext = () => {
    navigate('/step/7');
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Faktor Meringankan</h1>
      <div className="space-y-2">
        <label><input type="checkbox" checked={meringankan.kooperatif} onChange={() => toggle('kooperatif')} /> Kooperatif selama pemeriksaan</label><br />
        <label><input type="checkbox" checked={meringankan.mengakui} onChange={() => toggle('mengakui')} /> Mengakui kesalahan secara jujur</label><br />
        <label><input type="checkbox" checked={meringankan.menyesal} onChange={() => toggle('menyesal')} /> Menunjukkan rasa penyesalan</label><br />
        <label><input type="checkbox" checked={meringankan.tekanan} onChange={() => toggle('tekanan')} /> Ada tekanan psikis atau kondisi khusus</label><br />
      </div>
      <button onClick={handleNext} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Lanjut</button>
    </div>
  );
};

export default Step6_Meringankan;
