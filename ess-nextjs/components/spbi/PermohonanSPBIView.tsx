"use client";

import React from 'react';

export default function PermohonanSPBIView() {
    return (
        <div className="container-fluid p-0">
             <div className="d-flex align-items-center gap-3 mb-4">
                <h3 className="fw-bold mb-0" style={{ color: '#20288E' }}>Permohonan SPBI</h3>
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

             {/* SPBI Table */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="card-body p-0">
                    <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <table className="table table-hover mb-0 text-center align-middle" style={{ fontSize: '0.8rem' }}>
                            <thead className="bg-light" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                                <tr>
                                    <th className="py-3 border-end fw-bold text-bold" style={{width: '50px'}}>#</th>
                                    <th className="py-3 border-end fw-bold text-bold">Nomor</th>
                                    <th className="py-3 border-end fw-bold text-bold">Nama</th>
                                    <th className="py-3 border-end fw-bold text-bold">Dari</th>
                                    <th className="py-3 border-end fw-bold text-bold">Ke</th>
                                    <th className="py-3 border-end fw-bold text-bold">Tanggal Dibuat</th>
                                    <th className="py-3 border-end fw-bold text-bold">Tanggal Keluar</th>
                                    <th className="py-3 border-end fw-bold text-bold">Status</th>
                                    <th className="py-3 fw-bold text-bold">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {[
                                    { no: 1, nomor: '000003/Departemen Pengembangan Teknologi Informasi/XI/2025', nama: 'K594 - MOHAMAD ALDA', dari: 'Pos Lobby SDM', ke: 'Pos 1 Jakarta', dibuat: '27 November 2025', keluar: '31 Desember 2025', status: 'Menunggu Persetujuan Kasek' },
                                    { no: 2, nomor: '000005/Departemen Pengembangan Teknologi Informasi/XI/2025', nama: 'K594 - MOHAMAD ALDA', dari: 'Pos Lobby SDM', ke: 'Pos 1 Jakarta', dibuat: '27 November 2025', keluar: '31 Desember 2025', status: 'Menunggu Persetujuan Atasan' },
                                    { no: 3, nomor: '000002/Departemen Pengembangan Teknologi Informasi/XI/2025', nama: 'K594 - MOHAMAD ALDA', dari: 'Pos Lobby SDM', ke: 'Pos 1 Jakarta', dibuat: '27 November 2025', keluar: '31 Desember 2025', status: 'Menunggu Petugas Pamsikmil' },
                                    { no: 4, nomor: '000006/Departemen Pengembangan Teknologi Informasi/XI/2025', nama: 'K594 - MOHAMAD ALDA', dari: 'Pos Lobby SDM', ke: 'Pos 1 Jakarta', dibuat: '28 November 2025', keluar: '02 Januari 2026', status: 'Menunggu Persetujuan Kasek' },
                                    { no: 5, nomor: '000007/Departemen Pengembangan Teknologi Informasi/XI/2025', nama: 'K594 - MOHAMAD ALDA', dari: 'Pos Lobby SDM', ke: 'Pos 1 Jakarta', dibuat: '29 November 2025', keluar: '03 Januari 2026', status: 'Disetujui' },
                                    { no: 6, nomor: '000008/Departemen Pengembangan Teknologi Informasi/XI/2025', nama: 'K594 - MOHAMAD ALDA', dari: 'Pos Lobby SDM', ke: 'Pos 1 Jakarta', dibuat: '30 November 2025', keluar: '04 Januari 2026', status: 'Ditolak' },
                                    { no: 7, nomor: '000009/Departemen Pengembangan Teknologi Informasi/XI/2025', nama: 'K594 - MOHAMAD ALDA', dari: 'Pos Lobby SDM', ke: 'Pos 1 Jakarta', dibuat: '01 Desember 2025', keluar: '05 Januari 2026', status: 'Menunggu Persetujuan Atasan' },
                                    { no: 8, nomor: '000010/Departemen Pengembangan Teknologi Informasi/XI/2025', nama: 'K594 - MOHAMAD ALDA', dari: 'Pos Lobby SDM', ke: 'Pos 1 Jakarta', dibuat: '02 Desember 2025', keluar: '06 Januari 2026', status: 'Menunggu Petugas Pamsikmil' },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-bottom">
                                        <td className="py-3 border-end">{row.no}</td>
                                        <td className="py-3 border-end text-start px-3" style={{whiteSpace: 'normal', maxWidth: '200px'}}>{row.nomor}</td>
                                        <td className="py-3 border-end text-start px-3" style={{whiteSpace: 'normal', maxWidth: '150px'}}>{row.nama}</td>
                                        <td className="py-3 border-end">{row.dari}</td>
                                        <td className="py-3 border-end">{row.ke}</td>
                                        <td className="py-3 border-end">{row.dibuat}</td>
                                        <td className="py-3 border-end">{row.keluar}</td>
                                        <td className="py-3 border-end text-start px-3">{row.status}</td>
                                        <td className="py-3">
                                            <div className="d-flex gap-1 justify-content-center">
                                                <button className="btn btn-sm btn-outline-secondary rounded-pill px-3" style={{ fontSize: '0.75rem' }}>Detail</button>
                                                {idx < 2 && (
                                                    <button className="btn btn-sm btn-light border rounded-pill px-3" style={{ fontSize: '0.75rem' }}>Batalkan</button>
                                                )}
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
