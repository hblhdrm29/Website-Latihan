"use client";

import React, { useState } from 'react';

export default function GajiView() {
    // Mock Data based on screenshot
    const salaryData = [
        { id: 1, label: 'Gaji Juli 2025' },
        { id: 2, label: 'Gaji Juni 2025' },
        { id: 3, label: 'Gaji Mei 2025' },
        { id: 4, label: 'Gaji April 2025' },
        { id: 5, label: 'Gaji Maret 2025' },
        { id: 6, label: 'Tunjangan Hari Raya Maret 2025' },
        { id: 7, label: 'Gaji Februari 2025' },
        { id: 8, label: 'Insentif Kerja Februari 2025' },
        { id: 9, label: 'Gaji Januari 2025' },
        { id: 10, label: 'Gaji Desember 2024' },
        { id: 11, label: 'Gaji November 2024' },
        { id: 12, label: 'Gaji Oktober 2024' },
        { id: 13, label: 'Gaji September 2024' },
        { id: 14, label: 'Gaji Agustus 2024' },
        { id: 15, label: 'Gaji Juli 2024' },
        { id: 16, label: 'Gaji Juni 2024' },
        { id: 17, label: 'Gaji Mei 2024' },
        { id: 18, label: 'Gaji April 2024' },
        { id: 19, label: 'Gaji Maret 2024' },
        { id: 20, label: 'Tunjangan Hari Raya Maret 2024' },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [entries, setEntries] = useState(10);

    return (
        <div className="container-fluid px-3 pb-5">
            {/* Header */}
            <div className="d-flex align-items-center mb-4">
                <div>
                    <h2 className="fw-bold mb-1" style={{ color: '#20288E' }}>Gaji</h2>
                    <p className="text-muted small mb-0">Riwayat pembayaran gaji dan tunjangan anda.</p>
                </div>
            </div>

            {/* Controls - Search Only */}
            <div className="d-flex justify-content-end align-items-center mb-3">
                <div className="position-relative">
                     <input 
                        type="text" 
                        className="form-control form-control-sm border shadow-sm rounded-pill ps-5" 
                        placeholder="Cari Riwayat..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ width: '250px' }}
                    />
                    <i className="fas fa-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted small"></i>
                </div>
            </div>

            {/* Table Section - Payroll Style */}
            <div className="bg-white rounded-4 shadow-sm" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                <table className="table align-middle mb-0 small w-100" style={{ borderCollapse: 'separate', borderSpacing: '0', fontSize: '0.8rem' }}>
                    <thead className="bg-light sticky-top" style={{ top: 0, zIndex: 1 }}>
                        <tr className="border-bottom">
                            <th className="py-2 px-2 border-end bg-light fw-bold text-dark text-center" style={{ width: '50px' }}>No</th>
                            <th className="py-2 px-2 border-end bg-light fw-bold text-dark text-start">Pembayaran</th>
                            <th className="py-2 px-2 border-end bg-light fw-bold text-dark text-start">Tanggal</th>
                            <th className="py-2 px-2 border-end bg-light fw-bold text-dark text-end">Jumlah</th>
                             <th className="py-2 px-2 border-end bg-light fw-bold text-dark text-center">Status</th>
                            <th className="py-2 px-2 bg-light fw-bold text-dark text-center" style={{ width: '80px' }}>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salaryData.filter(item => item.label.toLowerCase().includes(searchTerm.toLowerCase())).map((item, index) => (
                            <tr key={item.id} className="border-bottom">
                                <td className="py-2 px-2 border-end fw-medium text-dark text-center">{item.id}</td>
                                <td className="py-2 px-2 border-end fw-medium text-dark text-start">{item.label}</td>
                                <td className="py-2 px-2 border-end text-muted text-start">25 {item.label.split(' ')[1]} {item.label.split(' ')[2]}</td>
                                <td className="py-2 px-2 border-end fw-bold text-primary text-end" style={{ color: '#20288E' }}>Rp 15.800.000</td>
                                <td className="py-2 px-2 border-end text-center">
                                    <span className="badge rounded-pill px-3 py-1 fw-medium small bg-success bg-opacity-10 text-success">
                                        Terbayar
                                    </span>
                                </td>
                                <td className="py-2 px-2 text-center">
                                    <button className="btn btn-sm text-primary hover-text-dark p-0 border-0 bg-transparent transition-base">
                                        <i className="fas fa-eye"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Styles are inherited from Payroll styling logic essentially, but local jsx needed for shadow/hover if not global 
                PayrollView had specific styles for shadow-primary-lg etc. I'll add them just in case.
            */}
            <style jsx>{`
                .hover-translate-y:hover { transform: translateY(-3px); }
                .transition-base { transition: all 0.2s ease; }
            `}</style>
        </div>
    );
}
