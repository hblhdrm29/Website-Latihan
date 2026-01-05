"use client";

import React from 'react';

export default function PermohonanIzinView() {
    return (
        <div className="container-fluid p-0">
            <div className="d-flex align-items-center gap-3 mb-4">
                <h3 className="fw-bold mb-0" style={{ color: '#20288E' }}>Permohonan Izin</h3>
                <a href="/?view=pengajuanizin" className="btn rounded-circle bg-white text-primary shadow-sm d-flex align-items-center justify-content-center border-0 btn-hover-success text-decoration-none" style={{ width: '32px', height: '32px', cursor: 'pointer' }}>
                    <i className="fas fa-plus small"></i>
                </a>
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
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 border-secondary shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
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
                                    <th className="py-3 border-end fw-bold text-bold" style={{ width: '50px' }}>No</th>
                                    <th className="py-3 border-end fw-bold text-bold" style={{ width: '100px' }}>NP</th>
                                    <th className="py-3 border-end fw-bold text-bold">Nama</th>
                                    <th className="py-3 border-end fw-bold text-bold">Izin</th>
                                    <th className="py-3 border-end fw-bold text-bold">From</th>
                                    <th className="py-3 border-end fw-bold text-bold">To</th>
                                    <th className="py-3 border-end fw-bold text-bold">Pos</th>
                                    <th className="py-3 border-end fw-bold text-bold">Status</th>
                                    <th className="py-3 border-end fw-bold text-bold">Posisi</th>
                                    <th className="py-3 fw-bold text-bold">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {[
                                    { no: 1, np: 'K594', nama: 'MOHAMAD ALDA', izin: 'Izin Datang Terlambat', from: '', to: { d: '10 Juli 2025', t: '08:03:00', m: 'machine : ess' }, pos: 'Pos Lobby SDM', status: 'Disetujui Atasan 1', statusColor: 'bg-success', posisi: 'Masuk' },
                                    { no: 2, np: 'K594', nama: 'MOHAMAD ALDA', izin: 'Izin Datang Terlambat', from: '', to: { d: '02 Juli 2025', t: '08:30:00', m: 'machine : ess' }, pos: 'Pos Lobby SDM', status: 'Disetujui Atasan 1', statusColor: 'bg-success', posisi: 'Masuk' },
                                    { no: 3, np: 'K594', nama: 'MOHAMAD ALDA', izin: 'Izin Datang Terlambat', from: '', to: { d: '01 Juli 2025', t: '08:04:00', m: 'machine : ess' }, pos: 'Pos Lobby SDM', status: 'Disetujui Atasan 1', statusColor: 'bg-success', posisi: 'Masuk' },
                                    { no: 4, np: 'K594', nama: 'MOHAMAD ALDA', izin: 'Izin Pulang Awal', from: { d: '05 Juli 2025', t: '14:00:00', m: 'machine : ess' }, to: '', pos: 'Pos Lobby SDM', status: 'Disetujui Atasan 1', statusColor: 'bg-success', posisi: 'Keluar' },
                                    { no: 5, np: 'K594', nama: 'MOHAMAD ALDA', izin: 'Izin Keluar Kantor', from: { d: '15 Juli 2025', t: '10:00:00', m: 'machine : ess' }, to: { d: '15 Juli 2025', t: '12:00:00', m: 'machine : ess' }, pos: 'Pos Lobby SDM', status: 'Menunggu Atasan 2', statusColor: 'bg-warning', posisi: 'Keluar' },
                                    { no: 6, np: 'K594', nama: 'MOHAMAD ALDA', izin: 'Izin Datang Terlambat', from: '', to: { d: '20 Juli 2025', t: '08:15:00', m: 'machine : ess' }, pos: 'Pos Lobby SDM', status: 'Ditolak', statusColor: 'bg-danger', posisi: 'Masuk' },
                                    { no: 7, np: 'K594', nama: 'MOHAMAD ALDA', izin: 'Izin Datang Terlambat', from: '', to: { d: '22 Juli 2025', t: '08:10:00', m: 'machine : ess' }, pos: 'Pos Lobby SDM', status: 'Disetujui Atasan 1', statusColor: 'bg-success', posisi: 'Masuk' },
                                    { no: 8, np: 'K594', nama: 'MOHAMAD ALDA', izin: 'Izin Pulang Awal', from: { d: '25 Juli 2025', t: '15:30:00', m: 'machine : ess' }, to: '', pos: 'Pos Lobby SDM', status: 'Disetujui Atasan 1', statusColor: 'bg-success', posisi: 'Keluar' },
                                    { no: 9, np: 'K594', nama: 'MOHAMAD ALDA', izin: 'Izin Datang Terlambat', from: '', to: { d: '28 Juli 2025', t: '08:05:00', m: 'machine : ess' }, pos: 'Pos Lobby SDM', status: 'Disetujui Atasan 1', statusColor: 'bg-success', posisi: 'Masuk' },
                                    { no: 10, np: 'K594', nama: 'MOHAMAD ALDA', izin: 'Izin Datang Terlambat', from: '', to: { d: '30 Juli 2025', t: '08:20:00', m: 'machine : ess' }, pos: 'Pos Lobby SDM', status: 'Menunggu Atasan 1', statusColor: 'bg-warning', posisi: 'Masuk' },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-bottom">
                                        <td className="py-4 border-end">{row.no}</td>
                                        <td className="py-4 border-end">{row.np}</td>
                                        <td className="py-4 border-end">
                                            <div className="fw-medium text-dark">{row.nama}</div>
                                        </td>
                                        <td className="py-4 border-end fw-medium">{row.izin}</td>
                                        <td className="py-4 border-end">
                                            {typeof row.from === 'object' && row.from !== null ? (
                                                <>
                                                    <div>{row.from.d}</div>
                                                    <div>{row.from.t}</div>
                                                    <div className="text-primary small mt-1">{row.from.m}</div>
                                                </>
                                            ) : (
                                                <div className="text-muted">{row.from}</div>
                                            )}
                                        </td>
                                        <td className="py-4 border-end">
                                            {typeof row.to === 'object' && row.to !== null ? (
                                                <>
                                                    <div>{row.to.d}</div>
                                                    <div>{row.to.t}</div>
                                                    <div className="text-primary small mt-1">{row.to.m}</div>
                                                </>
                                            ) : (
                                                <div className="text-muted">{row.to}</div>
                                            )}
                                        </td>
                                        <td className="py-4 border-end">{row.pos}</td>
                                        <td className="py-4 border-end">
                                            <span className={`badge ${row.statusColor} bg-opacity-75 rounded-pill px-3 py-2 fw-normal`} style={{ fontSize: '0.75rem' }}>
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="py-4 border-end">
                                            <span className={`badge ${row.posisi === 'Masuk' ? 'bg-success' : 'bg-danger'} bg-opacity-75 text-white rounded-pill px-3 py-2 fw-normal`} style={{ fontSize: '0.75rem' }}>
                                                {row.posisi}
                                            </span>
                                        </td>
                                        <td className="py-4">
                                            <button suppressHydrationWarning className="btn btn-sm btn-outline-secondary rounded-pill shadow-sm px-3" style={{ fontSize: '0.7rem' }}>
                                                Detail
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
