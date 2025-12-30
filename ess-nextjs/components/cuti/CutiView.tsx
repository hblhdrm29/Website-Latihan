"use client";

import React from 'react';

export default function CutiView() {
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

            {/* Cuti Table */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="card-body p-0">
                    <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <table className="table mb-0 text-center align-middle" style={{ fontSize: '0.8rem' }}>
                            <thead className="bg-light" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                                <tr>
                                    <th className="py-3 border-end fw-bold text-bold">No</th>
                                    <th className="py-3 border-end fw-bold text-bold">NP</th>
                                    <th className="py-3 border-end fw-bold text-bold">Nama</th>
                                    <th className="py-3 border-end fw-bold text-bold">Tipe</th>
                                    <th className="py-3 border-end fw-bold text-bold">Start Date</th>
                                    <th className="py-3 border-end fw-bold text-bold">End Date</th>
                                    <th className="py-3 border-end fw-bold text-bold">Lama</th>
                                    <th className="py-3 border-end fw-bold text-bold">Jenis Alasan</th>
                                    <th className="py-3 border-end fw-bold text-bold">Keterangan</th>
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
                                        tipe: 'Cuti Sakit',
                                        startDate: { d: '10', m: 'November 2025' },
                                        endDate: { d: '11', m: 'November 2025' },
                                        lama: '2 Hari',
                                        jenis: 'Keperluan Keluarga',
                                        ket: 'Dalam Kota',
                                        status: 'Disetujui Atasan 1',
                                        statusColor: 'bg-success'
                                    },
                                    {
                                        no: 2,
                                        np: 'K594',
                                        nama: 'Mohammad Alda',
                                        tipe: 'Cuti Tahunan',
                                        startDate: { d: '13', m: 'November 2025' },
                                        endDate: { d: '14', m: 'November 2025' },
                                        lama: '2 Hari',
                                        jenis: 'Cuti Tahunan',
                                        ket: 'Dalam Kota',
                                        status: 'Disetujui Atasan 1',
                                        statusColor: 'bg-success'
                                    },
                                    {
                                        no: 3,
                                        np: 'K594',
                                        nama: 'Mohammad Alda',
                                        tipe: 'Cuti Tahunan',
                                        startDate: { d: '15', m: 'November 2025' },
                                        endDate: { d: '16', m: 'November 2025' },
                                        lama: '2 Hari',
                                        jenis: 'Sakit',
                                        ket: 'Dalam kota',
                                        status: 'Disetujui Atasan 1',
                                        statusColor: 'bg-success'
                                    },
                                    {
                                        no: 4,
                                        np: 'K594',
                                        nama: 'Mohammad Alda',
                                        tipe: 'Cuti Tahunan',
                                        startDate: { d: '17', m: 'November 2025' },
                                        endDate: { d: '18', m: 'November 2025' },
                                        lama: '2 Hari',
                                        jenis: 'Keperluan Penting',
                                        ket: 'Dalam Kota',
                                        status: 'Disetujui Atasan 2',
                                        statusColor: 'bg-success'
                                    },
                                    {
                                        no: 5,
                                        np: 'K594',
                                        nama: 'Mohammad Alda',
                                        tipe: 'Cuti Bersama',
                                        startDate: { d: '19', m: 'November 2025' },
                                        endDate: { d: '20', m: 'November 2025' },
                                        lama: '2 Hari',
                                        jenis: 'Liburan',
                                        ket: 'Luar Kota',
                                        status: 'Menunggu Atasan 2',
                                        statusColor: 'bg-warning'
                                    },
                                    {
                                        no: 6,
                                        np: 'K594',
                                        nama: 'Mohammad Alda',
                                        tipe: 'Cuti Bersama',
                                        startDate: { d: '21', m: 'November 2025' },
                                        endDate: { d: '22', m: 'November 2025' },
                                        lama: '2 Hari',
                                        jenis: 'Liburan',
                                        ket: 'Luar Kota',
                                        status: 'Menunggu Atasan 2',
                                        statusColor: 'bg-warning'
                                    }
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-bottom">
                                        <td className="py-4 border-end">{row.no}</td>
                                        <td className="py-4 border-end">{row.np}</td>
                                        <td className="py-4 border-end fw-medium">{row.nama}</td>
                                        <td className="py-4 border-end">{row.tipe}</td>
                                        <td className="py-4 border-end">
                                            <div className="fw-bold">{row.startDate.d}</div>
                                            <div className="small text-muted text-nowrap">{row.startDate.m}</div>
                                        </td>
                                        <td className="py-4 border-end">
                                            <div className="fw-bold">{row.endDate.d}</div>
                                            <div className="small text-muted text-nowrap">{row.endDate.m}</div>
                                        </td>
                                        <td className="py-4 border-end">{row.lama}</td>
                                        <td className="py-4 border-end" style={{ maxWidth: '120px' }}>{row.jenis}</td>
                                        <td className="py-4 border-end">{row.ket}</td>
                                        <td className="py-4 border-end">
                                            <span className={`badge ${row.statusColor} bg-opacity-75 rounded-pill px-3 py-2 fw-normal`} style={{ fontSize: '0.75rem' }}>
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="py-4">
                                            <button suppressHydrationWarning className="btn btn-sm btn-primary rounded-pill px-3 shadow-sm border-0 text-nowrap fw-medium" style={{ fontSize: '0.7rem', backgroundColor: '#4318FF' }}>
                                                Submit ERP
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
