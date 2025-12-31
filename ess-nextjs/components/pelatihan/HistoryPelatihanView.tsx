"use client";

import React from 'react';

export default function HistoryPelatihanView() {
    return (
        <div className="container-fluid p-0">
             <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bold mb-0" style={{ color: '#20288E' }}>History Pelatihan</h3>
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
                        <div className="col-md-2">
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
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Tahun</label>
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

             {/* History Pelatihan Table */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="card-body p-0">
                    <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <table className="table table-hover mb-0 text-center align-middle" style={{ fontSize: '0.8rem' }}>
                            <thead className="bg-light" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                                <tr>
                                    <th className="py-3 border-end fw-bold text-bold" style={{width: '60px'}}>No</th>
                                    <th className="py-3 border-end fw-bold text-bold">NP</th>
                                    <th className="py-3 border-end fw-bold text-bold">Nama</th>
                                    <th className="py-3 border-end fw-bold text-bold">Jabatan</th>
                                    <th className="py-3 border-end fw-bold text-bold">Pelatihan</th>
                                    <th className="py-3 fw-bold text-bold">Tanggal Pelatihan</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {[
                                    { no: 1, np: 'K594', nama: 'Mohammad Alda', jabatan: 'PKWT', pelatihan: 'Peserta Training Contract Management (JLS002) Tahun 2025', tanggal: '28-07-2025' },
                                    { no: 2, np: 'K594', nama: 'Mohammad Alda', jabatan: 'PKWT', pelatihan: 'Rapat Kerja Divisi Dafasum 2024', tanggal: '28-11-2024' },
                                    { no: 3, np: 'K594', nama: 'Mohammad Alda', jabatan: 'PKWT', pelatihan: 'Rapat Kerja Divisi Dafasum 2024', tanggal: '28-11-2024' },
                                    { no: 4, np: 'K594', nama: 'Mohammad Alda', jabatan: 'PKWT', pelatihan: 'Peserta Workshop Aplikasi Manajemen Risiko Batch 1', tanggal: '05-11-2024' },
                                    { no: 5, np: 'K594', nama: 'Mohammad Alda', jabatan: 'PKWT', pelatihan: 'Peserta Tambahan Pelatihan dan Sertifikasi Supply Chain Analyst (Offline)', tanggal: '10-10-2024' },
                                    { no: 6, np: 'K594', nama: 'Mohammad Alda', jabatan: 'PKWT', pelatihan: 'Peserta Tambahan Pelatihan dan Sertifikasi Supply Chain Analyst (online)', tanggal: '07-10-2024' },
                                    { no: 7, np: 'K594', nama: 'Mohammad Alda', jabatan: 'PKWT', pelatihan: 'Training Awareness ISO 37001:2016 SMAP', tanggal: '15-09-2024' },
                                    { no: 8, np: 'K594', nama: 'Mohammad Alda', jabatan: 'PKWT', pelatihan: 'Workshop Pengadaan Barang dan Jasa BUMN', tanggal: '20-08-2024' },
                                    { no: 9, np: 'K594', nama: 'Mohammad Alda', jabatan: 'PKWT', pelatihan: 'Sosialisasi GCG dan Etika Bisnis', tanggal: '10-07-2024' },
                                    { no: 10, np: 'K594', nama: 'Mohammad Alda', jabatan: 'PKWT', pelatihan: 'Training Leadership for Managers', tanggal: '05-06-2024' },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-bottom">
                                        <td className="py-3 border-end">{row.no}</td>
                                        <td className="py-3 border-end">{row.np}</td>
                                        <td className="py-3 border-end fw-medium" style={{ maxWidth: '150px' }}>{row.nama}</td>
                                        <td className="py-3 border-end text-start ps-3" style={{ maxWidth: '250px' }}>{row.jabatan}</td>
                                        <td className="py-3 border-end text-start ps-3" style={{ maxWidth: '300px' }}>{row.pelatihan}</td>
                                        <td className="py-3">{row.tanggal}</td>
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
