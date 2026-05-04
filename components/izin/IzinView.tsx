"use client";

import React from 'react';

export default function IzinView() {
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
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Tanggal</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 border-secondary shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Bulan</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 border-secondary shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Tahun</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 border-secondary shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Keterangan</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 border-secondary shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
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

            {/* Izin Table */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="card-body p-0">
                    <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <table className="table table-hover mb-0 text-center align-middle" style={{ fontSize: '0.8rem' }}>
                            <thead className="bg-light" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                                <tr>
                                    <th className="py-3 border-end fw-bold text-bold">No</th>
                                    <th className="py-3 border-end fw-bold text-bold">NP</th>
                                    <th className="py-3 border-end fw-bold text-bold">Nama Pegawai</th>
                                    <th className="py-3 border-end fw-bold text-bold">Izin</th>
                                    <th className="py-3 border-end fw-bold text-bold">From</th>
                                    <th className="py-3 border-end fw-bold text-bold">To</th>
                                    <th className="py-3 border-end fw-bold text-bold">Pos</th>
                                    <th className="py-3 border-end fw-bold text-bold">Status</th>
                                    <th className="py-3 fw-bold text-bold">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="bg-transparent">
                                {[
                                    {
                                        no: 1,
                                        np: 'K594',
                                        nama: 'Mohammad Alda',
                                        izin: 'Datang Terlambat',
                                        from: '-',
                                        to: { date: '24 Desember 2024', time: '08:30', machine: 'machine : ess' },
                                        pos: 'Pos Lobby SDM',
                                        status: 'Disetujui Atasan 1',
                                        statusColor: 'bg-success'
                                    },
                                    {
                                        no: 2,
                                        np: 'K594',
                                        nama: 'Mohammad Alda',
                                        izin: 'Datang Terlambat',
                                        from: '-',
                                        to: { date: '25 Desember 2024', time: '08:00', machine: 'machine : ess' },
                                        pos: 'Pos Lobby SDM',
                                        status: 'Disetujui Atasan 1',
                                        statusColor: 'bg-success'
                                    },
                                    {
                                        no: 3,
                                        np: 'K594',
                                        nama: 'Mohammad Alda',
                                        izin: 'Datang Terlambar',
                                        from: '-',
                                        to: { date: '27 Desember 2024', time: '08:00', machine: 'machine : ess' },
                                        pos: 'Pos Lobby SDM',
                                        status: 'Disetujui Atasan 1',
                                        statusColor: 'bg-success'
                                    },
                                    {
                                        no: 4,
                                        np: 'K594',
                                        nama: 'Mohammad Alda',
                                        izin: 'Datang Terlambar',
                                        from: '-',
                                        to: { date: '28 Desember 2024', time: '08:00', machine: 'machine : ess' },
                                        pos: 'Pos Lobby SDM',
                                        status: 'Disetujui Atasan 1',
                                        statusColor: 'bg-success'
                                    },
                                    {
                                        no: 5,
                                        np: 'K594',
                                        nama: 'Mohammad Alda',
                                        izin: 'Datang Terlambar',
                                        from: '-',
                                        to: { date: '29 Desember 2024', time: '08:00', machine: 'machine : ess' },
                                        pos: 'Pos Lobby SDM',
                                        status: 'Menunggu Atasan 2',
                                        statusColor: 'bg-warning'
                                    }
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-bottom">
                                        <td className="py-4 border-end">{row.no}</td>
                                        <td className="py-4 border-end">{row.np}</td>
                                        <td className="py-4 border-end fw-medium">{row.nama}</td>
                                        <td className="py-4 border-end">{row.izin}</td>
                                        <td className="py-4 border-end">{row.from}</td>
                                        <td className="py-4 border-end">
                                            <div>{row.to.date}</div>
                                            <div>{row.to.time}</div>
                                            <div className="text-primary small mt-1">{row.to.machine}</div>
                                        </td>
                                        <td className="py-4 border-end">{row.pos}</td>
                                        <td className="py-4 border-end">
                                            <span className={`badge ${row.statusColor} bg-opacity-75 rounded-pill px-3 py-2 fw-normal`} style={{ fontSize: '0.75rem' }}>
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="py-4">
                                            <div className="d-flex flex-column gap-2 px-3">
                                                 <button suppressHydrationWarning className="btn btn-sm btn-outline-secondary rounded-pill shadow-sm" style={{ fontSize: '0.7rem' }}>
                                                    Detail
                                                </button>
                                                <button suppressHydrationWarning className="btn btn-sm btn-primary rounded-pill shadow-sm border-0 fw-medium" style={{ fontSize: '0.7rem', backgroundColor: '#4318FF' }}>
                                                    Submit ERP
                                                </button>
                                            </div>
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