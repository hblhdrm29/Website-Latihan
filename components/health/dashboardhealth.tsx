"use client";

import React, { useState } from 'react';

export default function DashboardHealth() {
    const [entries, setEntries] = useState(10);
    const [search, setSearch] = useState('');
    const [month, setMonth] = useState('Semua');

    // Data from Screenshot
    const logs = [
        { 
            id: 1, 
            nik: 'K594',
            name: 'Yusron Cipto Ning Arie', 
            dept: 'Seksi Cetak Rata',
            date: '29 Juli 2024', 
            travel: 'Ya', 
            publicTransport: 'Ya',
            outOfTown: 'Tidak',
            crowd: 'Ya',
            contact: 'Tidak',
            symptoms: 'Ya',
            lastUpdate: '2024-07-31 10:58:47'
        },
        { 
            id: 2, 
            nik: 'K594',
            name: 'Mohamad Alda', 
            dept: 'Departemen Pengembangan Teknologi Informasi',
            date: '29 Oktober 2024', 
            travel: 'Tidak', 
            publicTransport: 'Tidak',
            outOfTown: 'Tidak',
            crowd: 'Tidak',
            contact: 'Tidak',
            symptoms: 'Tidak',
            lastUpdate: '2024-10-30 14:39:02'
        },
        { 
            id: 3, 
            nik: 'K594',
            name: 'Mohamad Alda', 
            dept: 'Departemen Pengembangan Teknologi Informasi',
            date: '06 Desember 2024', 
            travel: 'Tidak', 
            publicTransport: 'Tidak',
            outOfTown: 'Tidak',
            crowd: 'Tidak',
            contact: 'Tidak',
            symptoms: 'Tidak',
            lastUpdate: ''
        },
        { 
            id: 4, 
            nik: 'K594',
            name: 'Mohamad Alda', 
            dept: 'Departemen Pengembangan Teknologi Informasi',
            date: '09 Januari 2025', 
            travel: 'Tidak', 
            publicTransport: 'Tidak',
            outOfTown: 'Tidak',
            crowd: 'Tidak',
            contact: 'Tidak',
            symptoms: 'Tidak',
            lastUpdate: '2025-01-10'
        },
        { 
            id: 5, 
            nik: 'K594',
            name: 'Budi Santoso', 
            dept: 'Seksi Produksi',
            date: '12 Januari 2025', 
            travel: 'Ya', 
            publicTransport: 'Tidak',
            outOfTown: 'Ya',
            crowd: 'Ya',
            contact: 'Tidak',
            symptoms: 'Tidak',
            lastUpdate: '2025-01-13 09:15:00'
        },
        { 
            id: 6, 
            nik: 'K594',
            name: 'Siti Aminah', 
            dept: 'Seksi Keuangan',
            date: '15 Januari 2025', 
            travel: 'Tidak', 
            publicTransport: 'Ya',
            outOfTown: 'Tidak',
            crowd: 'Tidak',
            contact: 'Ya',
            symptoms: 'Ya',
            lastUpdate: '2025-01-16 14:20:30'
        },
        { 
            id: 7, 
            nik: 'K594',
            name: 'Rudi Hartono', 
            dept: 'Seksi Logistik',
            date: '18 Januari 2025', 
            travel: 'Ya', 
            publicTransport: 'Ya',
            outOfTown: 'Ya',
            crowd: 'Ya',
            contact: 'Tidak',
            symptoms: 'Tidak',
            lastUpdate: '2025-01-19 08:45:15'
        },
        { 
            id: 8, 
            nik: 'K594',
            name: 'Dewi Lestari', 
            dept: 'Seksi HRD',
            date: '20 Januari 2025', 
            travel: 'Tidak', 
            publicTransport: 'Tidak',
            outOfTown: 'Tidak',
            crowd: 'Tidak',
            contact: 'Tidak',
            symptoms: 'Tidak',
            lastUpdate: '2025-01-21 11:30:00'
        },
        { 
            id: 9, 
            nik: 'K594',
            name: 'Andi Wijaya', 
            dept: 'Seksi IT Support',
            date: '22 Januari 2025', 
            travel: 'Ya', 
            publicTransport: 'Tidak',
            outOfTown: 'Tidak',
            crowd: 'Ya',
            contact: 'Ya',
            symptoms: 'Ya',
            lastUpdate: '2025-01-23 16:10:45'
        },
    ];

    return (
        <div className="container-fluid px-4 py-4">
            
            <div className="d-flex align-items-center gap-3 mb-4">
                <h3 className="fw-bold mb-0" style={{ color: '#20288E' }}>Health Dashboard</h3>
                <div className="btn rounded-circle bg-white text-primary shadow-sm d-flex align-items-center justify-content-center border-0 btn-hover-success" style={{ width: '32px', height: '32px', cursor: 'pointer' }}>
                    <i className="fas fa-plus small"></i>
                </div>
            </div>

            {/* Filter Section */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4">
                <div className="card-body p-3">
                    <div className="row g-2 align-items-end" style={{ fontSize: '0.85rem' }}>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Nama</label>
                            <div className="input-group input-group-sm">
                                <select className="form-select form-select-sm border-0 border-secondary shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>NP</label>
                            <div className="input-group input-group-sm">
                                <select className="form-select form-select-sm border-0 shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Tanggal</label>
                            <div className="input-group input-group-sm">
                                <select className="form-select form-select-sm border-0 border-secondary shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Bulan</label>
                            <div className="input-group input-group-sm">
                                <select className="form-select form-select-sm border-0 border-secondary shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Tahun</label>
                            <div className="input-group input-group-sm">
                                <select className="form-select form-select-sm border-0 border-secondary shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                         <div className="col-md-2">
                            <button className="btn btn-sm btn-light border-0 border-secondary shadow-sm rounded-pill px-0 w-100 fw-bold text-secondary" style={{ fontSize: '0.8rem' }}>
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
                        <table className="table table-hover mb-0 text-start align-middle" style={{ fontSize: '0.85rem' }}>
                            <thead className="bg-light" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                                <tr>
                                    <th className="py-3 border-end fw-bold text-center ps-4" style={{ width: '50px' }}>No</th>
                                    <th className="py-3 border-end fw-bold ps-3" style={{ width: '80px' }}>NP</th>
                                    <th className="py-3 border-end fw-bold ps-3" style={{ minWidth: '200px' }}>Nama</th>
                                    <th className="py-3 border-end fw-bold ps-3" style={{ minWidth: '120px' }}>Tertanggal</th>
                                    <th className="py-3 border-end fw-bold ps-3">Pernah Keluar</th>
                                    <th className="py-3 border-end fw-bold ps-3">Transportasi Umum</th>
                                    <th className="py-3 border-end fw-bold ps-3">Luar Kota</th>
                                    <th className="py-3 border-end fw-bold ps-3">Kegiatan Orang Banyak</th>
                                    <th className="py-3 border-end fw-bold ps-3">Riwayat Kontak</th>
                                    <th className="py-3 border-end fw-bold ps-3">Pernah Gejala</th>
                                    <th className="py-3 border-end fw-bold ps-3" style={{ minWidth: '100px' }}>Last Update</th>
                                    <th className="py-3 fw-bold text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="bg-transparent">
                                {logs.map((log) => (
                                    <tr key={log.id} className="border-bottom">
                                        <td className="py-4 border-end text-center">{log.id}</td>
                                        <td className="py-4 border-end ps-3 fw-medium">{log.nik}</td>
                                        <td className="py-4 border-end ps-3">
                                            <div className="fw-bold">{log.name}</div>
                                            <div className="text-muted small">({log.dept})</div>
                                        </td>
                                        <td className="py-4 border-end ps-3">{log.date}</td>
                                        <td className="py-4 border-end ps-3">{log.travel}</td>
                                        <td className="py-4 border-end ps-3">{log.publicTransport}</td>
                                        <td className="py-4 border-end ps-3">{log.outOfTown}</td>
                                        <td className="py-4 border-end ps-3">{log.crowd}</td>
                                        <td className="py-4 border-end ps-3">{log.contact}</td>
                                        <td className="py-4 border-end ps-3">{log.symptoms}</td>
                                        <td className="py-4 border-end ps-3">{log.lastUpdate}</td>
                                        <td className="py-4 text-center">
                                            <button className="btn btn-sm btn-outline-primary rounded-1" style={{ fontSize: '0.75rem' }}>Detail</button>
                                        </td>
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
