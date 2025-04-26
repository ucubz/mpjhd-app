import { useNavigate } from 'react-router-dom'
import { useMPJHD } from '../context/MPJHDContext'
import HasilTabel from '../components/HasilTabel'
import SalinClipboardButton from '../components/SalinClipboardButton'
import PageWrapper from '../components/PageWrapper'
import Card from '../components/Card'
import Button from '../components/Button'
import BackButton from '../components/BackButton'
import Stepper from '../components/Stepper'

const Step9_HasilOutput = () => {
  const { state, dispatch } = useMPJHD()
  const navigate = useNavigate()

  const formatTable = (type = 'text') => {
    const pembobotan = Object.entries(state.pembobotan)
      .filter(([_, v]) => v)
      .map(([k]) => k)
      .join(', ') || 'Tidak ada'
    const meringankan = Object.entries(state.meringankan)
      .filter(([_, v]) => v)
      .map(([k]) => k)
      .join(', ') || 'Tidak ada'

    if (type === 'html') {
      return `
        <table border="1" cellspacing="0" cellpadding="6" style="border-collapse: collapse; font-family: sans-serif;">
          <thead>
            <tr style="background-color:#e5e7eb;">
              <th>Komponen</th>
              <th>Nilai</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Kategori Pelanggaran</td><td>${state.kategori}</td></tr>
            <tr><td>Pasal Utama</td><td>${state.pasalUtama || '-'}</td></tr>
            <tr><td>Kelompok Pelanggaran</td><td>${state.kelompok}</td></tr>
            <tr><td>Nilai Pokok</td><td>${state.nilaiPokok}</td></tr>
            <tr><td>Status Pelanggaran</td><td>${state.status}${state.status === 'bersama' ? ` (${state.peran})` : ''}</td></tr>
            <tr><td>Pembobotan Tambahan</td><td>${pembobotan}</td></tr>
            <tr><td>Faktor Meringankan</td><td>${meringankan}</td></tr>
            <tr><td>Nilai Akhir</td><td>${state.nilaiAkhir}</td></tr>
            <tr><td>Grade Hukuman</td><td>${state.grade}</td></tr>
            <tr><td>Jenis Hukuman Disiplin</td><td>${state.jenisHukuman}</td></tr>
          </tbody>
        </table>
      `
    }

    return `| Komponen                 | Nilai                                |
|---------------------------|-------------------------------------|
| Kategori Pelanggaran     | ${state.kategori}
| Pasal Utama              | ${state.pasalUtama || '-'}
| Kelompok Pelanggaran     | ${state.kelompok}
| Nilai Pokok              | ${state.nilaiPokok}
| Status Pelanggaran       | ${state.status}${state.status === 'bersama' ? ` (${state.peran})` : ''}
| Pembobotan Tambahan      | ${pembobotan}
| Faktor Meringankan       | ${meringankan}
| Nilai Akhir              | ${state.nilaiAkhir}
| Grade Hukuman            | ${state.grade}
| Jenis Hukuman Disiplin   | ${state.jenisHukuman}`
  }

  const handleReset = () => {
    const confirmReset = window.confirm('Yakin ingin mengulang dari awal? Semua data akan dihapus.')
    if (confirmReset) {
      dispatch({ type: 'RESET' })
      navigate('/')
    }
  }

  return (
    <PageWrapper>
      <h1 className="text-2xl font-bold text-center mb-8">
        Tabel Hasil MPJHD
      </h1>

      <Card>
        <div className="flex flex-col gap-6">
          <HasilTabel data={state} />

          <div className="flex justify-between gap-4">
            <BackButton className="flex-1" />
            <SalinClipboardButton formatFunction={formatTable} className="flex-1" />
          </div>

          <Button
            onClick={handleReset}
            className="w-full bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800"
          >
            Ulang dari Awal
          </Button>
        </div>
      </Card>

      <Stepper />
    </PageWrapper>
  )
}

export default Step9_HasilOutput
