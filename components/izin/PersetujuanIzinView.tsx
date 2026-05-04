"use client";

import React from 'react';

export default function PersetujuanIzinView() {
    return (
        <div className="container-fluid p-0">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bold mb-0" style={{ color: '#20288E' }}>Persetujuan Izin</h3>
            </div>
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
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Tanggal</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Bulan</label>
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
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Keterangan</label>
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

            {/* Persetujuan Izin Table */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="card-body p-0">
                    <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <table className="table table-hover mb-0 text-center align-middle" style={{ fontSize: '0.8rem' }}>
                            <thead className="bg-light" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                                <tr>
                                    <th className="py-3 border-end fw-bold text-bold" style={{ width: '60px' }}>No</th>
                                    <th className="py-3 border-end fw-bold text-bold">NP</th>
                                    <th className="py-3 border-end fw-bold text-bold" style={{ textAlign: 'left', paddingLeft: '1.5rem' }}>Nama Pegawai</th>
                                    <th className="py-3 border-end fw-bold text-bold">Izin</th>
                                    <th className="py-3 border-end fw-bold text-bold">Tanggal</th>
                                    <th className="py-3 border-end fw-bold text-bold">Waktu</th>
                                    <th className="py-3 border-end fw-bold text-bold">Pos / Lokasi</th>
                                    <th className="py-3 border-end fw-bold text-bold">Status</th>
                                    <th className="py-3 fw-bold text-bold">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {[
                                    {
                                        no: 1,
                                        np: 'K594',
                                        nama: 'Mohammad Alda',
                                        izin: 'Datang Terlambat',
                                        date: '24 Des 2024',
                                        time: '08:30',
                                        pos: 'Pos Lobby SDM',
                                        status: 'Disetujui',
                                        statusColor: 'bg-success-subtle text-success'
                                    },
                                    {
                                        no: 2,
                                        np: 'K594',
                                        nama: 'Mohammad Alda',
                                        izin: 'Datang Terlambat',
                                        date: '25 Des 2024',
                                        time: '08:00',
                                        pos: 'Pos Lobby SDM',
                                        status: 'Disetujui',
                                        statusColor: 'bg-success-subtle text-success'
                                    },
                                    {
                                        no: 3,
                                        np: '7821',
                                        nama: 'SARAH CONNOR',
                                        izin: 'Izin Keluar',
                                        date: '05 Jan 2026',
                                        time: '14:00 - 16:00',
                                        pos: 'Pos Security Gate 1',
                                        status: 'Pending',
                                        statusColor: 'bg-warning-subtle text-warning'
                                    },
                                    {
                                        no: 4,
                                        np: '6654',
                                        nama: 'JOHN DOE',
                                        izin: 'Pulang Cepat',
                                        date: '10 Jan 2026',
                                        time: '15:00',
                                        pos: 'Pos Lobby Utama',
                                        status: 'Ditolak',
                                        statusColor: 'bg-danger-subtle text-danger'
                                    },
                                    {
                                        no: 5,
                                        np: 'K594',
                                        nama: 'Mohammad Alda',
                                        izin: 'Datang Terlambat',
                                        date: '27 Des 2024',
                                        time: '08:15',
                                        pos: 'Pos Lobby SDM',
                                        status: 'Disetujui',
                                        statusColor: 'bg-success-subtle text-success'
                                    },
                                    {
                                        no: 6,
                                        np: '5543',
                                        nama: 'JANE DOE',
                                        izin: 'Izin Keluar',
                                        date: '12 Feb 2026',
                                        time: '09:00 - 11:30',
                                        pos: 'Pos Security Gate 2',
                                        status: 'Pending',
                                        statusColor: 'bg-warning-subtle text-warning'
                                    },
                                    {
                                        no: 7,
                                        np: '1122',
                                        nama: 'EMILY BLUNT',
                                        izin: 'Datang Terlambat',
                                        date: '20 Feb 2026',
                                        time: '08:45',
                                        pos: 'Pos Lobby Belakang',
                                        status: 'Pending',
                                        statusColor: 'bg-warning-subtle text-warning'
                                    },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-bottom">
                                        <td className="py-3 border-end">{row.no}</td>
                                        <td className="py-3 border-end">{row.np}</td>
                                        <td className="py-3 border-end" style={{ textAlign: 'left', paddingLeft: '1.5rem' }}>{row.nama}</td>
                                        <td className="py-3 border-end">{row.izin}</td>
                                        <td className="py-3 border-end">{row.date}</td>
                                        <td className="py-3 border-end">{row.time}</td>
                                        <td className="py-3 border-end">{row.pos}</td>
                                        <td className="py-3 border-end">
                                            <span className={`badge rounded-pill ${row.statusColor}`}>
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="py-3">
                                            <button className="btn btn-sm btn-icon btn-light rounded-circle text-primary hover-bg-primary-subtle" title="Setujui">
                                                <i className="fas fa-check"></i>
                                            </button>
                                            <button className="btn btn-sm btn-icon btn-light rounded-circle text-danger hover-bg-danger-subtle ms-1" title="Tolak">
                                                <i className="fas fa-times"></i>
                                            </button>
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
