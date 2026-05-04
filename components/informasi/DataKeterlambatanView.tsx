"use client";

import React from 'react';

export default function DataKeterlambatanView() {
    return (
        <div className="container-fluid p-0">
             <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bold mb-0" style={{ color: '#20288E' }}>Data Keterlambatan</h3>
            </div>
            
            {/* Filter Section */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4">
                <div className="card-body p-3">
                    <div className="row g-2 align-items-end justify-content-between" style={{ fontSize: '0.85rem' }}>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Unit Kerja</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 border-secondary shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Nama</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 border-secondary shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>NP</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Periode</label>
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

             {/* Data Keterlambatan Table */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="card-body p-0">
                    <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <table className="table table-hover mb-0 text-center align-middle" style={{ fontSize: '0.8rem' }}>
                            <thead className="bg-light" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                                <tr>
                                    <th className="py-3 border-end fw-bold text-bold" style={{width: '60px'}}>No</th>
                                    <th className="py-3 border-end fw-bold text-bold">NP</th>
                                    <th className="py-3 border-end fw-bold text-bold" >Nama</th>
                                    <th className="py-3 border-end fw-bold text-bold">Tanggal</th>
                                    <th className="py-3 border-end fw-bold text-bold">Nama Jadwal</th>
                                    <th className="py-3 border-end fw-bold text-bold">Jadwal Masuk</th>
                                    <th className="py-3 border-end fw-bold text-bold">Waktu Datang</th>
                                    <th className="py-3 fw-bold text-bold">Keterangan</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {[
                                    { no: 1, np: '7528', nama: 'Mohammad Alda', tanggal: '11 Februari 2025', jadwal: 'Gilir I Umum 2024', masuk: '11 Februari 2025 07:45', datang: '11 Februari 2025 07:49', keterangan: '-' },
                                    { no: 2, np: '7528', nama: 'Mohammad Alda', tanggal: '21 Februari 2025', jadwal: 'Gilir I Umum 2024', masuk: '21 Februari 2025 07:45', datang: '21 Februari 2025 08:08', keterangan: '-' },
                                    { no: 3, np: '7528', nama: 'Mohammad Alda', tanggal: '2 Juli 2025', jadwal: 'Gilir I Umum 2024', masuk: '2 Juli 2025 07:45', datang: '2 Juli 2025 07:54', keterangan: '-' },
                                    { no: 4, np: '7528', nama: 'Mohammad Alda', tanggal: '10 Agustus 2025', jadwal: 'Gilir I Umum 2024', masuk: '10 Agustus 2025 07:45', datang: '10 Agustus 2025 07:50', keterangan: '-' },
                                    { no: 5, np: '7528', nama: 'Mohammad Alda', tanggal: '15 September 2025', jadwal: 'Gilir I Umum 2024', masuk: '15 September 2025 07:45', datang: '15 September 2025 08:00', keterangan: '-' },
                                    { no: 6, np: '7528', nama: 'Mohammad Alda', tanggal: '1 Oktober 2025', jadwal: 'Gilir I Umum 2024', masuk: '1 Oktober 2025 07:45', datang: '1 Oktober 2025 07:48', keterangan: '-' },
                                    { no: 7, np: '7528', nama: 'Mohammad Alda', tanggal: '12 November 2025', jadwal: 'Gilir I Umum 2024', masuk: '12 November 2025 07:45', datang: '12 November 2025 07:55', keterangan: '-' },
                                    { no: 8, np: '7528', nama: 'Mohammad Alda', tanggal: '5 Desember 2025', jadwal: 'Gilir I Umum 2024', masuk: '5 Desember 2025 07:45', datang: '5 Desember 2025 07:51', keterangan: '-' },
                                    { no: 9, np: '7528', nama: 'Mohammad Alda', tanggal: '20 Januari 2026', jadwal: 'Gilir I Umum 2024', masuk: '20 Januari 2026 07:45', datang: '20 Januari 2026 08:05', keterangan: '-' },
                                    { no: 10, np: '7528', nama: 'Mohammad Alda', tanggal: '14 Februari 2026', jadwal: 'Gilir I Umum 2024', masuk: '14 Februari 2026 07:45', datang: '14 Februari 2026 07:47', keterangan: '-' },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-bottom">
                                        <td className="py-3 border-end">{row.no}</td>
                                        <td className="py-3 border-end">{row.np}</td>
                                        <td className="py-3 border-end fw-medium">{row.nama}</td>
                                        <td className="py-3 border-end">{row.tanggal}</td>
                                        <td className="py-3 border-end">{row.jadwal}</td>
                                        <td className="py-3 border-end">{row.masuk}</td>
                                        <td className="py-3 border-end">{row.datang}</td>
                                        <td className="py-3">{row.keterangan}</td>
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
