
import React from 'react';

const formatPembobotan = (obj) => {
  const map = {
    banyakPasal: "Lebih dari 1 pasal dilanggar",
    pernahDihukum: "Pernah dijatuhi hukuman sebelumnya",
    kesengajaan: "Dilakukan dengan unsur kesengajaan",
    hambatPemeriksaan: "Menghambat proses pemeriksaan"
  };
  return Object.entries(obj)
    .filter(([_, val]) => val)
    .map(([key]) => `✔ ${map[key]}`)
    .join(', ') || 'Tidak ada';
};

const formatMeringankan = (obj) => {
  const map = {
    kooperatif: "Kooperatif",
    mengakui: "Mengakui kesalahan",
    menyesal: "Menunjukkan penyesalan",
    tekanan: "Ada tekanan psikis"
  };
  return Object.entries(obj)
    .filter(([_, val]) => val)
    .map(([key]) => `✔ ${map[key]}`)
    .join(', ') || 'Tidak ada';
};

const HasilTabel = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Ringkasan Hasil Perhitungan</h2>
      <table className="w-full text-sm border border-collapse">
        <thead className="bg-blue-100 text-left">
          <tr>
            <th className="border px-4 py-2">Komponen</th>
            <th className="border px-4 py-2">Nilai</th>
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-gray-50"><td className="border px-4 py-2">Kategori</td><td className="border px-4 py-2">{data.kategori}</td></tr>
          <tr className="even:bg-gray-50"><td className="border px-4 py-2">Pasal Utama</td><td className="border px-4 py-2">{data.pasalUtama}</td></tr>
          <tr className="even:bg-gray-50"><td className="border px-4 py-2">Kelompok</td><td className="border px-4 py-2">{data.kelompok}</td></tr>
          <tr className="even:bg-gray-50"><td className="border px-4 py-2">Nilai Pokok</td><td className="border px-4 py-2">{data.nilaiPokok}</td></tr>
          <tr className="even:bg-gray-50"><td className="border px-4 py-2">Status</td><td className="border px-4 py-2">{data.status}{data.status === 'bersama' ? ` (${data.peran})` : ''}</td></tr>
          <tr className="even:bg-gray-50"><td className="border px-4 py-2">Pembobotan</td><td className="border px-4 py-2">{formatPembobotan(data.pembobotan)}</td></tr>
          <tr className="even:bg-gray-50"><td className="border px-4 py-2">Meringankan</td><td className="border px-4 py-2">{formatMeringankan(data.meringankan)}</td></tr>
          <tr className="even:bg-gray-50"><td className="border px-4 py-2">Nilai Akhir</td><td className="border px-4 py-2">{data.nilaiAkhir}</td></tr>
          <tr className="even:bg-gray-50"><td className="border px-4 py-2">Grade</td><td className="border px-4 py-2">{data.grade}</td></tr>
          <tr className="even:bg-gray-50"><td className="border px-4 py-2">Jenis Hukuman</td><td className="border px-4 py-2">{data.jenisHukuman}</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default HasilTabel;
