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
            name: 'YUSRON CIPTO NING ARIE', 
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
            name: 'MOHAMAD ALDA', 
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
            name: 'MOHAMAD ALDA', 
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
            name: 'MOHAMAD ALDA', 
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
    ];

    return (
        <div className="container-fluid px-4 py-4">
            
            <h3 className="fw-bold mb-4" style={{ color: '#20288E' }}>Health Dashboard</h3>

            {/* Filter Controls */}
            <div className="row mb-3">
                <div className="col-md-3">
                    <label className="form-label fw-bold small text-dark">Bulan</label>
                    <select className="form-select form-select-sm" value={month} onChange={(e) => setMonth(e.target.value)}>
                        <option value="Semua">Semua</option>
                        <option value="Januari">Januari</option>
                        <option value="Februari">Februari</option>
                        {/* ... other months if needed */}
                    </select>
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center small text-muted">
                    <span className="me-2">Tampilkan</span>
                    <select className="form-select form-select-sm d-inline-block border-secondary-subtle" style={{width: '70px'}} value={entries} onChange={(e) => setEntries(Number(e.target.value))}>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                    <span className="ms-2">entri</span>
                </div>
                <div className="d-flex align-items-center">
                    <span className="me-2 small text-muted">Cari:</span>
                    <input type="text" className="form-control form-control-sm border-secondary-subtle" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>

            {/* Table */}
            <div className="card rounded-0 border text-muted small shadow-sm">
                <div className="table-responsive">
                    <table className="table table-bordered table-striped mb-0 align-middle">
                        <thead className="bg-light text-center align-middle">
                            <tr style={{borderBottom: '2px solid #dee2e6'}}>
                                <th style={{width: '50px'}}>No</th>
                                <th style={{minWidth: '200px'}}>Karyawan</th>
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
                                    <td style={{ textAlign: 'justify' }}>
                                        <div className="fw-bold text-dark text-uppercase">{log.nik} - {log.name}</div>
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
            
            <div className="mt-3 text-end text-muted small">
                Showing 1 to {logs.length} of {logs.length} entries
            </div>

        </div>
    );
}
