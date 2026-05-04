"use client";

import React, { useState } from 'react';

export default function PelatihanView() {
    // Mock Data - Expanded for scroll
    const trainingData = [
        { id: 1, np: 'K594', nama: 'Mohammad Alda', kategori: 'Teknis', pelatihan: 'React Advanced', tglPengajuan: '2025-01-10', tahun: '2025', prioritas: 'Tinggi', vendor: 'Hacktiv8', status: 'Disetujui' },
        { id: 2, np: 'K594', nama: 'Mohammad Alda', kategori: 'Soft Skill', pelatihan: 'Leadership 101', tglPengajuan: '2025-01-12', tahun: '2025', prioritas: 'Sedang', vendor: 'Dale Carnegie', status: 'Menunggu' },
        { id: 3, np: 'K594', nama: 'Mohammad Alda', kategori: 'Teknis', pelatihan: 'DevOps Fundamental', tglPengajuan: '2025-01-15', tahun: '2025', prioritas: 'Tinggi', vendor: 'Linux Academy', status: 'Proses' },
        { id: 4, np: 'K594', nama: 'Mohammad Alda', kategori: 'Bahasa', pelatihan: 'English Business', tglPengajuan: '2025-01-20', tahun: '2025', prioritas: 'Rendah', vendor: 'Wall Street', status: 'Ditolak' },
        { id: 5, np: 'K594', nama: 'Mohammad Alda', kategori: 'Teknis', pelatihan: 'Security Awareness', tglPengajuan: '2025-02-01', tahun: '2025', prioritas: 'Tinggi', vendor: 'Internal', status: 'Disetujui' },
        { id: 6, np: 'K594', nama: 'Mohammad Alda', kategori: 'Manajerial', pelatihan: 'Project Management', tglPengajuan: '2025-02-05', tahun: '2025', prioritas: 'Tinggi', vendor: 'PMI Indonesia', status: 'Disetujui' },
        { id: 7, np: 'K594', nama: 'Mohammad Alda', kategori: 'Teknis', pelatihan: 'AWS Cloud Practitioner', tglPengajuan: '2025-02-10', tahun: '2025', prioritas: 'Sedang', vendor: 'Dicoding', status: 'Menunggu' },
        { id: 8, np: 'K594', nama: 'Mohammad Alda', kategori: 'Soft Skill', pelatihan: 'Public Speaking', tglPengajuan: '2025-02-15', tahun: '2025', prioritas: 'Sedang', vendor: 'Talk Inc', status: 'Proses' },
        { id: 9, np: 'K594', nama: 'Mohammad Alda', kategori: 'Teknis', pelatihan: 'Python for Data Science', tglPengajuan: '2025-02-20', tahun: '2025', prioritas: 'Tinggi', vendor: 'Purwadhika', status: 'Disetujui' },
        { id: 10, np: 'K594', nama: 'Mohammad Alda', kategori: 'Bahasa', pelatihan: 'Mandarin Basic', tglPengajuan: '2025-02-25', tahun: '2025', prioritas: 'Rendah', vendor: 'LBI UI', status: 'Disetujui' },
        { id: 11, np: 'K594', nama: 'Mohammad Alda', kategori: 'Teknis', pelatihan: 'Cyber Security', tglPengajuan: '2025-03-01', tahun: '2025', prioritas: 'Tinggi', vendor: 'HackerOne', status: 'Menunggu' },
        { id: 12, np: 'K594', nama: 'Mohammad Alda', kategori: 'Soft Skill', pelatihan: 'Emotional Intelligence', tglPengajuan: '2025-03-05', tahun: '2025', prioritas: 'Sedang', vendor: 'Growth Center', status: 'Proses' },
        { id: 13, np: 'K594', nama: 'Mohammad Alda', kategori: 'Teknis', pelatihan: 'Flutter Development', tglPengajuan: '2025-03-10', tahun: '2025', prioritas: 'Tinggi', vendor: 'Dicoding', status: 'Disetujui' },
        { id: 14, np: 'K594', nama: 'Mohammad Alda', kategori: 'Manajerial', pelatihan: 'Strategic Planning', tglPengajuan: '2025-03-15', tahun: '2025', prioritas: 'Tinggi', vendor: 'Prasetiya Mulya', status: 'Menunggu' },
        { id: 15, np: 'K594', nama: 'Mohammad Alda', kategori: 'Bahasa', pelatihan: 'Japanese N5', tglPengajuan: '2025-03-20', tahun: '2025', prioritas: 'Rendah', vendor: 'Evergreen', status: 'Disetujui' },
    ];

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="container-fluid px-3 pb-5">
            {/* Header */}
            {/* Header */}
            <div className="d-flex align-items-center gap-3 mb-4">
                <h2 className="fw-bold mb-0" style={{ color: '#20288E' }}>Usulan Kebutuhan Pelatihan</h2>
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

            {/* Table Section - Gaji/Payroll Style (Scrollable) */}
            <div className="bg-white rounded-4 shadow-sm" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                <table className="table align-middle mb-0 small w-100" style={{ borderCollapse: 'separate', borderSpacing: '0', fontSize: '0.8rem' }}>
                    <thead className="bg-light sticky-top" style={{ top: 0, zIndex: 1 }}>
                        <tr className="border-bottom">
                            <th className="py-2 px-2 border-end bg-light fw-bold text-dark text-center">No</th>
                            <th className="py-2 px-2 border-end bg-light fw-bold text-dark text-center">NP</th>
                            <th className="py-2 px-2 border-end bg-light fw-bold text-dark text-start">Nama</th>
                            <th className="py-2 px-2 border-end bg-light fw-bold text-dark text-start">Kategori Pelatihan</th>
                            <th className="py-2 px-2 border-end bg-light fw-bold text-dark text-start">Pelatihan</th>
                            <th className="py-2 px-2 border-end bg-light fw-bold text-dark text-center">Tanggal Pengajuan</th>
                            <th className="py-2 px-2 border-end bg-light fw-bold text-dark text-center">Tahun Perencanaan</th>
                            <th className="py-2 px-2 border-end bg-light fw-bold text-dark text-center">Skala Prioritas</th>
                            <th className="py-2 px-2 border-end bg-light fw-bold text-dark text-start">Vendor</th>
                            <th className="py-2 px-2 border-end bg-light fw-bold text-dark text-center">Status</th>
                            <th className="py-2 px-2 bg-light fw-bold text-dark text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trainingData.length > 0 ? (
                            trainingData.filter(item => item.pelatihan.toLowerCase().includes(searchTerm.toLowerCase())).map((item, index) => (
                                <tr key={item.id} className="border-bottom hover-bg-light transition-base">
                                    <td className="py-2 px-2 border-end fw-medium text-dark text-center">{index + 1}</td>
                                    <td className="py-2 px-2 border-end fw-medium text-dark text-center">{item.np}</td>
                                    <td className="py-2 px-2 border-end fw-medium text-dark text-start">{item.nama}</td>
                                    <td className="py-2 px-2 border-end text-muted text-start">{item.kategori}</td>
                                    <td className="py-2 px-2 border-end text-dark text-start">{item.pelatihan}</td>
                                    <td className="py-2 px-2 border-end text-muted text-center">{item.tglPengajuan}</td>
                                    <td className="py-2 px-2 border-end text-muted text-center">{item.tahun}</td>
                                    <td className="py-2 px-2 border-end text-muted text-center">{item.prioritas}</td>
                                    <td className="py-2 px-2 border-end text-muted text-start">{item.vendor}</td>
                                    <td className="py-2 px-2 border-end text-center">
                                        <span className={`badge rounded-pill px-3 py-1 fw-medium small ${item.status === 'Disetujui' ? 'bg-success bg-opacity-10 text-success' : item.status === 'Ditolak' ? 'bg-danger bg-opacity-10 text-danger' : 'bg-warning bg-opacity-10 text-warning'}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="py-2 px-2 text-center">
                                         <button className="btn btn-sm text-primary hover-text-dark p-0 border-0 bg-transparent transition-base">
                                            <i className="fas fa-edit"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={11} className="py-4 text-center text-muted">Tidak ditemukan data yang sesuai</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <style jsx>{`
                .hover-bg-light:hover { background-color: #f9fafe; }
                .transition-base { transition: all 0.2s ease; }
                .action-button:hover { background-color: #e2e6ea; border-radius: 12px; }
            `}</style>
        </div>
    );
}
