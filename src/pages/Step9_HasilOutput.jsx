
import { useMPJHD } from '../context/MPJHDContext';
import HasilTabel from '../components/HasilTabel';
import SalinClipboardButton from '../components/SalinClipboardButton';

const Step9_HasilOutput = () => {
  const { state } = useMPJHD();

  const formatTable = () => {
    const pembobotan = Object.entries(state.pembobotan)
      .filter(([_, v]) => v)
      .map(([k]) => k)
      .join(', ') || 'Tidak ada';
    const meringankan = Object.entries(state.meringankan)
      .filter(([_, v]) => v)
      .map(([k]) => k)
      .join(', ') || 'Tidak ada';

    return `
| Komponen                 | Nilai                                |
|--------------------------|----------------------------------------|
| Kategori Pelanggaran     | ${state.kategori}
| Pasal Utama              | ${state.pasalUtama || '-'}
| Kelompok Pelanggaran     | ${state.kelompok}
| Nilai Pokok              | ${state.nilaiPokok}
| Status Pelanggaran       | ${state.status}${state.status === 'bersama' ? ` (${state.peran})` : ''}
| Pembobotan Tambahan      | ${pembobotan}
| Faktor Meringankan       | ${meringankan}
| Nilai Akhir              | ${state.nilaiAkhir}
| Grade Hukuman            | ${state.grade}
| Jenis Hukuman Disiplin   | ${state.jenisHukuman}
    `;
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Tabel Hasil MPJHD</h1>
      <HasilTabel data={state} />
      <SalinClipboardButton formatFunction={formatTable} />
    </div>
  );
};

export default Step9_HasilOutput;
