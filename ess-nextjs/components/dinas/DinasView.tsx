"use client";

import { useState } from 'react';

export default function DinasView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [entries, setEntries] = useState(10);

  // Mock Data based on user screenshot
  const dinasData = [
    {
      id: 1,
      np: 'K594',
      nama: 'Mohammad Alda',
      perihal: 'Peserta Pelaksanaan Factory Acceptance Test (FAT) dan Training Pekerjaan Jasa Development Predictive Maintenance Application',
      tipe: 'DN',
      startDate: { d: '23', m: 'Juni 2025' },
      endDate: { d: '27', m: 'Juni 2025' },
      jenis: 'Perjalanan Dinas Tugas Belajar'
    },
    {
        id: 2,
        np: 'K594',
        nama: 'Mohammad Alda',
        perihal: 'Water Rescue Competition Bulan K3 Nasional Tahun 2025',
        tipe: 'DN',
        startDate: { d: '10', m: 'Juli 2025' },
        endDate: { d: '12', m: 'Juli 2025' },
        jenis: 'Perjalanan Dinas Tugas Kerja'
    },
    {
        id: 3,
        np: 'K594',
        nama: 'Mohammad Alda',
        perihal: 'Peserta Training Jasa Fungsional Aplikasi ERP SAP Tahun 2023',
        tipe: 'DN',
        startDate: { d: '15', m: 'Agustus 2025' },
        endDate: { d: '17', m: 'Agustus 2025' },
        jenis: 'Perjalanan Dinas Tugas Belajar'
    },
    {
        id: 4,
        np: 'K594',
        nama: 'Mohammad Alda',
        perihal: 'Dinas Rapat Kerja Divisi TI',
        tipe: 'DN',
        startDate: { d: '05', m: 'September 2025' },
        endDate: { d: '09', m: 'September 2025' },
        jenis: 'Perjalanan Dinas Tugas Kerja'
    },
    {
        id: 5,
        np: 'K594',
        nama: 'Mohammad Alda',
        perihal: 'Peserta Asesi Pelatihan dan Asesmen Calon Asesor Kompetensi (ACA) Tahun 2025',
        tipe: 'DN',
        startDate: { d: '20', m: 'Oktober 2025' },
        endDate: { d: '24', m: 'Oktober 2025' },
        jenis: 'Perjalanan Dinas Tugas Belajar'
    },
    {
        id: 6,
        np: 'K594',
        nama: 'Mohammad Alda',
        perihal: 'Security Printing Technology Forum 2025',
        tipe: 'DN',
        startDate: { d: '10', m: 'November 2025' },
        endDate: { d: '12', m: 'November 2025' },
        jenis: 'Perjalanan Dinas Tugas Belajar'
    },
    {
        id: 7,
        np: 'K594',
        nama: 'Mohammad Alda',
        perihal: 'Security Printing Technology Forum 2025Peserta Training Pekerjaan Jasa Pemeliharaan Aplikasi Portal NDE Tahun 2024-2025',
        tipe: 'DN',
        startDate: { d: '10', m: 'November 2025' },
        endDate: { d: '12', m: 'November 2025' },
        jenis: 'Perjalanan Dinas Tugas Belajar'
    }
  ];

  return (
    <div className="container-fluid p-0">
        {/* Filter Section */}
        <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4">
            <div className="card-body p-3">
                <div className="row g-2 align-items-end" style={{ fontSize: '0.85rem' }}>
                    <div className="col-md-2">
                        <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Nama</label>
                        <div className="input-group input-group-sm">
                            <select suppressHydrationWarning className="form-select form-select-sm border-0 border-secondary shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                <option>Filter</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>NP</label>
                        <div className="input-group input-group-sm">
                            <select suppressHydrationWarning className="form-select form-select-sm border-0 shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                <option>Filter</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Start Date</label>
                        <div className="input-group input-group-sm">
                            <select suppressHydrationWarning className="form-select form-select-sm border-0 shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                <option>Filter</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>End Date</label>
                        <div className="input-group input-group-sm">
                            <select suppressHydrationWarning className="form-select form-select-sm border-0 shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                <option>Filter</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Tahun</label>
                        <div className="input-group input-group-sm">
                            <select suppressHydrationWarning className="form-select form-select-sm border-0 shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                <option>Filter</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Jenis Perjalanan</label>
                        <div className="input-group input-group-sm">
                            <select suppressHydrationWarning className="form-select form-select-sm border-0 shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                <option>Filter</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button suppressHydrationWarning className="btn btn-sm btn-light border-0 border-secondary shadow-sm rounded-pill px-0 w-100 fw-bold text-secondary" style={{ fontSize: '0.8rem' }}>
                            Filter <i className="fas fa-filter ms-1 small"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Table */}
        <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="card-body p-0">
                <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                    <table className="table table-hover mb-0 text-center align-middle" style={{ fontSize: '0.8rem' }}>
                        <thead className="bg-light" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                            <tr>
                                <th className="py-3 border-end fw-bold text-bold">No</th>
                                <th className="py-3 border-end fw-bold text-bold">NP</th>
                                <th className="py-3 border-end fw-bold text-bold">Nama</th>
                                <th className="py-3 border-end fw-bold text-bold" style={{ minWidth: '250px' }}>Perihal</th>
                                <th className="py-3 border-end fw-bold text-bold">Tipe Perjalanan</th>
                                <th className="py-3 border-end fw-bold text-bold">Start Date</th>
                                <th className="py-3 border-end fw-bold text-bold">End Date</th>
                                <th className="py-3 border-end fw-bold text-bold">Jenis Perjalanan</th>
                            </tr>
                        </thead>
                        <tbody className="bg-transparent">
                            {dinasData.map((item, index) => (
                                <tr key={item.id} className="border-bottom hover-bg-light transition-all">
                                    <td className="py-3 border-end ">{index + 1}</td>
                                    <td className="py-3 border-end">{item.np}</td>
                                    <td className="py-3 border-end text-nowrap">{item.nama}</td>
                                    <td className="py-3 border-end text-start text-dark">{item.perihal}</td>
                                    <td className="py-3 border-end text-dark fw-bold">{item.tipe}</td>
                                    <td className="py-3 border-end">
                                        <div className="d-flex flex-column align-items-center" style={{ lineHeight: '1.2' }}>
                                            <span className="fw-bold text-dark text-nowrap" style={{ fontSize: '0.9rem' }}>{item.startDate.d}</span>
                                            <span className="text-muted small text-nowrap" style={{ fontSize: '0.7rem' }}>{item.startDate.m}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 border-end">
                                        <div className="d-flex flex-column align-items-center" style={{ lineHeight: '1.2' }}>
                                            <span className="fw-bold text-dark text-nowrap" style={{ fontSize: '0.9rem' }}>{item.endDate.d}</span>
                                            <span className="text-muted small text-nowrap" style={{ fontSize: '0.7rem' }}>{item.endDate.m}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 border-end text-dark">{item.jenis}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  );
}
