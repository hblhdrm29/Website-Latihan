"use client";

import React from 'react';

export default function KehadiranView() {
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

            {/* Attendance Table */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="card-body p-0">
                    <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <table className="table table-hover mb-0 text-center align-middle" style={{ fontSize: '0.8rem' }}>
                            <thead className="bg-light" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                                <tr>
                                    <th className="py-3 border-end fw-bold text-bold">No</th>
                                    <th className="py-3 border-end fw-bold text-bold text-nowrap">Kode Unit</th>
                                    <th className="py-3 border-end fw-bold text-bold">NP</th>
                                    <th className="py-3 border-end fw-bold text-bold">Nama</th>
                                    <th className="py-3 border-end fw-bold text-bold">Tertanggal</th>
                                    <th className="py-3 border-end fw-bold text-bold">Jadwal Kerja</th>
                                    <th className="py-3 border-end fw-bold text-bold">Berangkat</th>
                                    <th className="py-3 border-end fw-bold text-bold">Pulang</th>
                                    <th className="py-3 border-end fw-bold text-bold">Ket</th>
                                    <th className="py-3 fw-bold text-bold">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="bg-transparent">
                                {[
                                    {
                                        no: 1,
                                        kodeUnit: '45800',
                                        np: 'K594',
                                        nama: 'Mohamad Alda',
                                        tertanggal: 'Senin, 10 Desember 2025',
                                        jadwal: { shift: 'Gilir I Umum 2024', date: 'Senin, 10 November 2025', time: <><br/>07:45 sd 16:30</> },
                                        berangkat: { date: '10 November 2025', time: '07:31', machine: 'F003' },
                                        pulang: { date: '10 November 2025', time: '16:38', machine: 'F003' },
                                        ket: '-',
                                    },
                                    {
                                        no: 2,
                                        kodeUnit: '45800',
                                        np: 'K594',
                                        nama: 'Mohamad Alda',
                                        tertanggal: 'Senin, 11 Desember 2025',
                                        jadwal: { shift: 'Gilir I Umum 2024', date: 'Senin, 11 November 2025', time: <><br/>07:45 sd 16:30</> },
                                        berangkat: { date: '11 November 2025', time: '07:31', machine: 'F003' },
                                        pulang: { date: '11 November 2025', time: '16:38', machine: 'F003' },
                                        ket: '-',
                                    },
                                    {
                                        no: 3,
                                        kodeUnit: '45800',
                                        np: 'K594',
                                        nama: 'Mohamad Alda',
                                        tertanggal: 'Senin, 12 Desember 2025',
                                        jadwal: { shift: 'Gilir I Umum 2024', date: 'Senin, 12 November 2025', time: <><br/>07:45 sd 16:30</> },
                                        berangkat: { date: '12 November 2025', time: '07:31', machine: 'F003' },
                                        pulang: { date: '12 November 2025', time: '16:38', machine: 'F003' },
                                        ket: 'Dinas',
                                    },
                                    {
                                        no: 4,
                                        kodeUnit: '45800',
                                        np: 'K594',
                                        nama: 'Mohamad Alda',
                                        tertanggal: 'Senin, 13 Desember 2025',
                                        jadwal: { shift: 'Off', date: '', time: '' },
                                        berangkat: { date: '-', time: '', machine: '' },
                                        pulang: { date: '-', time: '', machine: '' },
                                        ket: '-',
                                    },
                                    {
                                        no: 5,
                                        kodeUnit: '45800',
                                        np: 'K594',
                                        nama: 'Mohamad Alda',
                                        tertanggal: 'Senin, 14 Desember 2025',
                                        jadwal: { shift: 'OFF', date: '', time: '' },
                                        berangkat: { date: '-', time: '', machine: '' },
                                        pulang: { date: '-', time: '', machine: '' },
                                        ket: '-',
                                    },
                                    {
                                        no: 6,
                                        kodeUnit: '45800',
                                        np: 'K594',
                                        nama: 'Mohamad Alda',
                                        tertanggal: 'Senin, 15 Desember 2025',
                                        jadwal: { shift: 'Gilir I Umum 2024', date: 'Senin, 15 November 2025', time: <><br/>07:45 sd 16:30</> },
                                        berangkat: { date: '15 November 2025', time: '07:31', machine: 'F003' },
                                        pulang: { date: '15 November 2025', time: '16:38', machine: 'F003' },
                                        ket: '-',
                                    },
                                    {
                                        no: 7,
                                        kodeUnit: '45800',
                                        np: 'K594',
                                        nama: 'Mohamad Alda',
                                        tertanggal: 'Senin, 16 Desember 2025',
                                        jadwal: { shift: 'Gilir I Umum 2024', date: 'Senin, 16 November 2025', time: <><br/>07:45 sd 16:30</> },
                                        berangkat: { date: '16 November 2025', time: '07:31', machine: 'F003' },
                                        pulang: { date: '16 November 2025', time: '16:38', machine: 'F003' },
                                        ket: '-',
                                    },
                                    {
                                        no: 8,
                                        kodeUnit: '45800',
                                        np: 'K594',
                                        nama: 'Mohamad Alda',
                                        tertanggal: 'Senin, 17 Desember 2025',
                                        jadwal: { shift: 'Gilir I Umum 2024', date: 'Senin, 17 November 2025', time: <><br/>07:45 sd 16:30</> },
                                        berangkat: { date: '17 November 2025', time: '07:31', machine: 'F003' },
                                        pulang: { date: '17 November 2025', time: '16:38', machine: 'F003' },
                                        ket: '-',
                                    },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-bottom">
                                        <td className="py-4 border-end">{row.no}</td>
                                        <td className="py-4 border-end">{row.kodeUnit}</td>
                                        <td className="py-4 border-end">{row.np}</td>
                                        <td className="py-4 border-end fw-medium">{row.nama}</td>
                                        <td className="py-4 border-end text-muted">
                                            <div style={{ width: '100px' }} className="mx-auto">
                                                {row.tertanggal}
                                            </div>
                                        </td>
                                        <td className="py-4 border-end">
                                            <div className="fw-bold">{row.jadwal.shift}</div>
                                            {row.jadwal.date && <div className="text-muted small mt-1">{row.jadwal.date}</div>}
                                            {row.jadwal.time && <div className="text-muted small">{row.jadwal.time}</div>}
                                        </td>
                                        <td className="py-4 border-end">
                                            {row.berangkat.date === '-' ? '-' : (
                                                <>
                                                    <div>{row.berangkat.date}</div>
                                                    <div className="fw-bold text-primary">{row.berangkat.time}</div>
                                                    <div className="text-muted small">Machine id : {row.berangkat.machine}</div>
                                                </>
                                            )}
                                        </td>
                                        <td className="py-4 border-end">
                                            {row.pulang.date === '-' ? '-' : (
                                                <>
                                                    <div>{row.pulang.date}</div>
                                                    <div className="fw-bold text-primary">{row.pulang.time}</div>
                                                    <div className="text-muted small">Machine id : {row.pulang.machine}</div>
                                                </>
                                            )}
                                        </td>
                                        <td className="py-4 border-end">{row.ket}</td>
                                        <td className="py-4">
                                            <button suppressHydrationWarning className="btn btn-sm btn-primary rounded-pill px-4 shadow-sm border-0 fw-bold" style={{ fontSize: '0.75rem', backgroundColor: '#4318FF' }}>
                                                Ubah
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
