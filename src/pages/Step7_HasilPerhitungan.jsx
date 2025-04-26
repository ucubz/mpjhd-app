import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useMPJHD } from '../context/MPJHDContext';

const Step7_HasilPerhitungan = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useMPJHD();

  const getPembobotanValue = () => {
    let value = 0;
    if (state.pembobotan.banyakPasal) value += 10;
    if (state.pembobotan.pernahDihukum) value += 10;
    if (state.pembobotan.kesengajaan) value += 10;
    if (state.pembobotan.hambatPemeriksaan) value += 10;
    return value;
  };

  const getMeringankanValue = () => {
    let value = 0;
    if (state.meringankan.kooperatif) value += 5;
    if (state.meringankan.mengakui) value += 5;
    if (state.meringankan.menyesal) value += 5;
    if (state.meringankan.tekanan) value += 5;
    return value;
  };

  const nilaiPokok = state.nilaiPokok || 0;
  const tambahan = getPembobotanValue();
  const pengurang = getMeringankanValue();
  const nilaiAkhir = nilaiPokok + tambahan - pengurang;

  useEffect(() => {
    dispatch({ type: 'SET', key: 'nilaiAkhir', value: nilaiAkhir });
  }, [nilaiAkhir, dispatch]);

  const handleNext = () => {
    navigate('/step/8');
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Hasil Perhitungan Nilai</h1>
      <p><strong>Nilai Pokok:</strong> {nilaiPokok}</p>
      <p><strong>Nilai Tambahan (Pembobotan):</strong> {tambahan}</p>
      <p><strong>Nilai Pengurang (Meringankan):</strong> {pengurang}</p>
      <hr className="my-2" />
      <p><strong>Nilai Akhir:</strong> {nilaiAkhir}</p>
      <button onClick={handleNext} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Lanjut</button>
    </div>
  );
};

export default Step7_HasilPerhitungan;
