import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useMPJHD } from '../context/MPJHDContext';

const Step8_GradeHukuman = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useMPJHD();
  const [grade, setGrade] = useState('');
  const [jenisHukuman, setJenisHukuman] = useState('');

  useEffect(() => {
    const nilai = state.nilaiAkhir || 0;

    let g = '';
    let jenis = '';

    if (nilai <= 20) {
      g = 'Ringan 1';
      jenis = 'Teguran lisan';
    } else if (nilai <= 40) {
      g = 'Ringan 2';
      jenis = 'Teguran tertulis';
    } else if (nilai <= 60) {
      g = 'Sedang 1';
      jenis = 'Potong tunjangan kinerja 25% selama 3 bulan';
    } else if (nilai <= 80) {
      g = 'Sedang 2';
      jenis = 'Potong tunjangan kinerja 25% selama 6 bulan';
    } else if (nilai <= 100) {
      g = 'Sedang 3';
      jenis = 'Potong tunjangan kinerja 25% selama 9 bulan';
    } else if (nilai <= 120) {
      g = 'Berat 1';
      jenis = 'Penurunan jabatan';
    } else if (nilai <= 140) {
      g = 'Berat 2';
      jenis = 'Pembebasan dari jabatan';
    } else {
      g = 'Berat 3';
      jenis = 'Pemberhentian dengan hormat tidak atas permintaan sendiri';
    }

    setGrade(g);
    setJenisHukuman(jenis);

    dispatch({ type: 'SET', key: 'grade', value: g });
    dispatch({ type: 'SET', key: 'jenisHukuman', value: jenis });
  }, [state.nilaiAkhir, dispatch]);

  const handleNext = () => {
    navigate('/step/9');
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Konversi Grade Hukuman</h1>
      <p><strong>Nilai Akhir:</strong> {state.nilaiAkhir}</p>
      <p><strong>Grade Hukuman:</strong> {grade}</p>
      <p><strong>Jenis Hukuman Disiplin:</strong> {jenisHukuman}</p>
      <button onClick={handleNext} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Lanjut</button>
    </div>
  );
};

export default Step8_GradeHukuman;
