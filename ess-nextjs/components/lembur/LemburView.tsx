"use client";

import React from 'react';

export default function LemburView() {
    return (
        <div className="container-fluid p-0">
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
                        <div className="col-md-1">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>NP</label>
                            <div className="input-group input-group-sm">
                                <select className="form-select form-select-sm border-0 border-secondary shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
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
                        <div className="col-md-1">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Tahun</label>
                            <div className="input-group input-group-sm">
                                <select className="form-select form-select-sm border-0 border-secondary shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Keterangan</label>
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

            {/* Attendance Table */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="card-body p-0">
                    <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <table className="table mb-0 text-center align-middle" style={{ fontSize: '0.8rem' }}>
                            <thead className="bg-light" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                                <tr>
                                    <th className="py-3 border-end fw-bold text-bold">No</th>
                                    <th className="py-3 border-end fw-bold text-bold">NP</th>
                                    <th className="py-3 border-end fw-bold text-bold">Nama Pegawai</th>
                                    <th className="py-3 border-end fw-bold text-bold">Tertanggal</th>
                                    <th className="py-3 border-end fw-bold text-bold text-nowrap">Input Mulai</th>
                                    <th className="py-3 border-end fw-bold text-bold">Input Selesai</th>
                                    <th className="py-3 border-end fw-bold text-bold">Lembur Diakui</th>
                                    <th className="py-3 border-end fw-bold text-bold">Jenis Alasan</th>
                                    <th className="py-3 border-end fw-bold text-bold">Keterangan</th>
                                    <th className="py-3 border-end fw-bold text-bold">Status</th>
                                    <th className="py-3 fw-bold text-bold ">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="bg-transparent">
                                {[
                                    {
                                        no: 1,
                                        np: 'K594',
                                        nama: 'Mohammad Alda',
                                        tertanggal: '25 Mei 2025',
                                        inputMulai: { date: '25 Mei 2025', time: '11:16' },
                                        inputSelesai: { date: '25 Mei 2025', time: '23:16' },
                                        lemburDiakui: { start: '25 Mei 2025 11:16', end: '25 Mei 2025 23:16' },
                                        jenisAlasan: 'Lembur Proyek',
                                        keterangan: 'Persiapan acara satu data',
                                        status: 'Disetujui SDM',
                                    },
                                    {
                                        no: 2,
                                        np: 'K594',
                                        nama: 'Mohammad Alda',
                                        tertanggal: '21 Mei 2025',
                                        inputMulai: { date: '21 Mei 2025', time: '16:30' },
                                        inputSelesai: { date: '21 Mei 2025', time: '19:30' },
                                        lemburDiakui: { start: '21 Mei 2025 16:30', end: '21 Mei 2025 19:30' },
                                        jenisAlasan: 'Lembur Akhir',
                                        keterangan: 'Konfigurasi ESS',
                                        status: 'Disetujui SDM',
                                    },
                                    {
                                        no: 3,
                                        np: 'K594',
                                        nama: 'Mohammad Alda',
                                        tertanggal: '17 Mei 2025',
                                        inputMulai: { date: '17 Mei 2025', time: '10:30' },
                                        inputSelesai: { date: '17 Mei 2025', time: '19:30' },
                                        lemburDiakui: { start: '17 Mei 2025 10:30', end: '17 Mei 2025 19:30' },
                                        jenisAlasan: 'Lembur Proyek',
                                        keterangan: 'Development Aplikasi Candaltek',
                                        status: 'Disetujui SDM',
                                    },
                                    {
                                        no: 4,
                                        np: 'K594',
                                        nama: 'Mohammad Alda',
                                        tertanggal: '15 Mei 2025',
                                        inputMulai: { date: '15 Mei 2025', time: '13:00' },
                                        inputSelesai: { date: '15 Mei 2025', time: '18:30' },
                                        lemburDiakui: { start: '15 Mei 2025 13:00', end: '15 Mei 2025 18:30' },
                                        jenisAlasan: 'Lembur Akhir',
                                        keterangan: 'Development Karyawan',
                                        status: 'Disetujui SDM',
                                    },
                                    {
                                        no: 5,
                                        np: 'K594',
                                        nama: 'Mohammad Alda',
                                        tertanggal: '13 Mei 2025',
                                        inputMulai: { date: '13 Mei 2025', time: '14:00' },
                                        inputSelesai: { date: '13 Mei 2025', time: '19:00' },
                                        lemburDiakui: { start: '13 Mei 2025 14:00', end: '13 Mei 2025 19:00' },
                                        jenisAlasan: 'Lembur Akhir',
                                        keterangan: 'Konfirmasi ESS',
                                        status: 'Disetujui SDM',
                                    },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-bottom">
                                        <td className="py-4 border-end">{row.no}</td>
                                        <td className="py-4 border-end">{row.np}</td>
                                        <td className="py-4 border-end fw-medium">{row.nama}</td>
                                        <td className="py-4 border-end">{row.tertanggal}</td>
                                        <td className="py-4 border-end">
                                            <div>{row.inputMulai.date}</div>
                                            <div className="fw-bold text-primary">{row.inputMulai.time}</div>
                                        </td>
                                        <td className="py-4 border-end">
                                            <div>{row.inputSelesai.date}</div>
                                            <div className="fw-bold text-primary">{row.inputSelesai.time}</div>
                                        </td>
                                        <td className="py-4 border-end">
                                            <div className="text-muted small">{row.lemburDiakui.start}</div>
                                            <div className="text-muted small">s/d</div>
                                            <div className="text-muted small">{row.lemburDiakui.end}</div>
                                        </td>
                                        <td className="py-4 border-end">{row.jenisAlasan}</td>
                                        <td className="py-4 border-end" style={{ maxWidth: '150px' }}>{row.keterangan}</td>
                                        <td className="py-4 border-end">
                                            <span className="badge bg-success bg-opacity-75 rounded-pill px-3 py-2 fw-normal" style={{ fontSize: '0.75rem' }}>
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="py-4">
                                            <button className="btn btn-sm btn-primary rounded-pill px-3 shadow-sm border-0 text-nowrap fw-medium" style={{ fontSize: '0.7rem', backgroundColor: '#3b82f6' }}>
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
