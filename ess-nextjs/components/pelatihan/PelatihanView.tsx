"use client";

import React, { useState } from 'react';

export default function PelatihanView() {
    // Mock Data - Expanded for scroll
    const trainingData = [
        { id: 1, np: '1001', nama: 'Budi Santoso', kategori: 'Teknis', pelatihan: 'React Advanced', tglPengajuan: '2025-01-10', tahun: '2025', prioritas: 'Tinggi', vendor: 'Hacktiv8', status: 'Disetujui' },
        { id: 2, np: '1002', nama: 'Siti Aminah', kategori: 'Soft Skill', pelatihan: 'Leadership 101', tglPengajuan: '2025-01-12', tahun: '2025', prioritas: 'Sedang', vendor: 'Dale Carnegie', status: 'Menunggu' },
        { id: 3, np: '1003', nama: 'Rudi Hartono', kategori: 'Teknis', pelatihan: 'DevOps Fundamental', tglPengajuan: '2025-01-15', tahun: '2025', prioritas: 'Tinggi', vendor: 'Linux Academy', status: 'Proses' },
        { id: 4, np: '1004', nama: 'Dewi Lestari', kategori: 'Bahasa', pelatihan: 'English Business', tglPengajuan: '2025-01-20', tahun: '2025', prioritas: 'Rendah', vendor: 'Wall Street', status: 'Ditolak' },
        { id: 5, np: '1005', nama: 'Andi Wijaya', kategori: 'Teknis', pelatihan: 'Security Awareness', tglPengajuan: '2025-02-01', tahun: '2025', prioritas: 'Tinggi', vendor: 'Internal', status: 'Disetujui' },
        { id: 6, np: '1006', nama: 'Rina Kartika', kategori: 'Manajerial', pelatihan: 'Project Management', tglPengajuan: '2025-02-05', tahun: '2025', prioritas: 'Tinggi', vendor: 'PMI Indonesia', status: 'Disetujui' },
        { id: 7, np: '1007', nama: 'Eko Prasetyo', kategori: 'Teknis', pelatihan: 'AWS Cloud Practitioner', tglPengajuan: '2025-02-10', tahun: '2025', prioritas: 'Sedang', vendor: 'Dicoding', status: 'Menunggu' },
        { id: 8, np: '1008', nama: 'Maya Sari', kategori: 'Soft Skill', pelatihan: 'Public Speaking', tglPengajuan: '2025-02-15', tahun: '2025', prioritas: 'Sedang', vendor: 'Talk Inc', status: 'Proses' },
        { id: 9, np: '1009', nama: 'Dedi Kurniawan', kategori: 'Teknis', pelatihan: 'Python for Data Science', tglPengajuan: '2025-02-20', tahun: '2025', prioritas: 'Tinggi', vendor: 'Purwadhika', status: 'Disetujui' },
        { id: 10, np: '1010', nama: 'Nina Marlina', kategori: 'Bahasa', pelatihan: 'Mandarin Basic', tglPengajuan: '2025-02-25', tahun: '2025', prioritas: 'Rendah', vendor: 'LBI UI', status: 'Disetujui' },
        { id: 11, np: '1011', nama: 'Fajar Siddiq', kategori: 'Teknis', pelatihan: 'Cyber Security', tglPengajuan: '2025-03-01', tahun: '2025', prioritas: 'Tinggi', vendor: 'HackerOne', status: 'Menunggu' },
        { id: 12, np: '1012', nama: 'Indah Pertiwi', kategori: 'Soft Skill', pelatihan: 'Emotional Intelligence', tglPengajuan: '2025-03-05', tahun: '2025', prioritas: 'Sedang', vendor: 'Growth Center', status: 'Proses' },
        { id: 13, np: '1013', nama: 'Gilang Ramadhan', kategori: 'Teknis', pelatihan: 'Flutter Development', tglPengajuan: '2025-03-10', tahun: '2025', prioritas: 'Tinggi', vendor: 'Dicoding', status: 'Disetujui' },
        { id: 14, np: '1014', nama: 'Hendra Gunawan', kategori: 'Manajerial', pelatihan: 'Strategic Planning', tglPengajuan: '2025-03-15', tahun: '2025', prioritas: 'Tinggi', vendor: 'Prasetiya Mulya', status: 'Menunggu' },
        { id: 15, np: '1015', nama: 'Lina Susanti', kategori: 'Bahasa', pelatihan: 'Japanese N5', tglPengajuan: '2025-03-20', tahun: '2025', prioritas: 'Rendah', vendor: 'Evergreen', status: 'Disetujui' },
    ];

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="container-fluid px-3 pb-5">
            {/* Header */}
            <h2 className="fw-bold mb-4" style={{ color: '#20288E' }}>Usulan Kebutuhan Pelatihan</h2>

            {/* Main Action Button Area */}
            <div className="bg-light border rounded-4 p-1 mb-4">
                 <div className="btn w-100 text-start fw-medium border-0 bg-transparent text-dark d-flex justify-content-between align-items-center action-button" style={{ cursor: 'pointer' }}>
                    <span>Tambah Usulan Kebutuhan Pelatihan</span>
                    <i className="fas fa-plus p-2 rounded-circle bg-white text-primary shadow-sm"></i>
                 </div>
            </div>

            {/* Filter Section */}
            <div className="mb-4">
                <label className="fw-bold small mb-1">Bulan</label>
                <select className="form-select w-100 mw-100 shadow-sm" style={{ maxWidth: '300px' }}>
                    <option>Semua</option>
                    <option>Januari</option>
                    <option>Februari</option>
                    <option>Maret</option>
                    <option>April</option>
                    <option>Mei</option>
                    <option>Juni</option>
                    <option>Juli</option>
                    <option>Agustus</option>
                    <option>September</option>
                    <option>Oktober</option>
                    <option>November</option>
                    <option>Desember</option>
                </select>
            </div>

            {/* Controls - Search */}
            <div className="d-flex justify-content-end align-items-center mb-3">
                <div className="position-relative">
                     <input 
                        type="text" 
                        className="form-control form-control-sm border-0 shadow-sm rounded-pill ps-5 fw-medium text-dark" 
                        placeholder="Cari..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ width: '250px' }}
                    />
                    <i className="fas fa-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted small"></i>
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
