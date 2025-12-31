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
            <div className="card rounded-0 border text-muted small shadow-sm" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                <table className="table table-hover table-bordered mb-0 align-middle w-100">
                    <thead className="bg-white text-center align-middle sticky-top" style={{ top: 0, zIndex: 1 }}>
                            <tr style={{borderBottom: '2px solid #dee2e6'}}>
                                <th style={{width: '50px'}}>No</th>
                                <th style={{width: '80px'}}>NP</th>
                                <th style={{minWidth: '200px'}}>Nama</th>
                                <th style={{minWidth: '120px'}}>Tertanggal</th>
                                <th>Pernah Keluar</th>
                                <th>Transportasi Umum</th>
                                <th>Luar Kota</th>
                                <th>Kegiatan Orang Banyak</th>
                                <th>Riwayat Kontak</th>
                                <th>Pernah Gejala</th>
                                <th style={{minWidth: '100px'}}>Last Update</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {logs.map((log) => (
                                <tr key={log.id}>
                                    <td className="text-center fw-bold">{log.id}</td>
                                    <td className="text-center fw-medium">{log.nik}</td>
                                    <td style={{ textAlign: 'justify' }}>
                                        <div className="fw-bold text-dark">{log.name}</div>
                                        <div className="text-muted" style={{fontSize: '0.85em'}}>({log.dept})</div>
                                    </td>
                                    <td style={{ textAlign: 'justify' }}>{log.date}</td>
                                    <td style={{ textAlign: 'justify' }}>{log.travel}</td>
                                    <td style={{ textAlign: 'justify' }}>{log.publicTransport}</td>
                                    <td style={{ textAlign: 'justify' }}>{log.outOfTown}</td>
                                    <td style={{ textAlign: 'justify' }}>{log.crowd}</td>
                                    <td style={{ textAlign: 'justify' }}>{log.contact}</td>
                                    <td style={{ textAlign: 'justify' }}>{log.symptoms}</td>
                                    <td style={{ textAlign: 'justify' }}>{log.lastUpdate}</td>
                                    <td className="text-center">
                                        <button className="btn btn-primary btn-sm rounded-1 px-3" style={{fontSize: '0.85rem'}}>Lihat</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            </div>
            


        </div>
    );
}
