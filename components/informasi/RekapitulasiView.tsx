"use client";

import React from 'react';

export default function RekapitulasiView() {
    // Mock Data based on screenshot
    const rekapData = [
        {
            date: 'Senin, 1 Desember 2025',
            jadwal: {
                nama: 'P029 - Gilir I Umum 2024',
                mulai: '1 Desember 2025 07:45:00',
                selesai: '1 Desember 2025 16:30:00',
                istirahat: '12:00:00 - 12:30:00'
            },
            realisasi: {
                jenis: 'Hadir (Tidak Lengkap : Tidak Slide Masuk)',
                datang: '-',
                pulang: '1 Desember 2025 16:37:41'
            }
        },
        {
            date: 'Selasa, 2 Desember 2025',
            jadwal: {
                nama: 'P029 - Gilir I Umum 2024',
                mulai: '2 Desember 2025 07:45:00',
                selesai: '2 Desember 2025 16:30:00',
                istirahat: '12:00:00 - 12:30:00'
            },
            realisasi: {
                jenis: 'Hadir (Lengkap)',
                datang: '2 Desember 2025 07:22:00',
                pulang: '2 Desember 2025 17:02:00'
            }
        },
        {
            date: 'Rabu, 3 Desember 2025',
            jadwal: {
                nama: 'P029 - Gilir I Umum 2024',
                mulai: '3 Desember 2025 07:45:00',
                selesai: '3 Desember 2025 16:30:00',
                istirahat: '12:00:00 - 12:30:00'
            },
            realisasi: {
                jenis: 'Hadir (Lengkap)',
                datang: '3 Desember 2025 07:40:00',
                pulang: '3 Desember 2025 16:45:00'
            }
        },
        {
            date: 'Kamis, 4 Desember 2025',
            jadwal: {
                nama: 'P029 - Gilir I Umum 2024',
                mulai: '4 Desember 2025 07:45:00',
                selesai: '4 Desember 2025 16:30:00',
                istirahat: '12:00:00 - 12:30:00'
            },
            realisasi: {
                jenis: 'Hadir (Lengkap)',
                datang: '4 Desember 2025 07:42:00',
                pulang: '4 Desember 2025 16:35:00'
            }
        },
        {
            date: 'Jumat, 5 Desember 2025',
            jadwal: {
                nama: 'P029 - Gilir I Umum 2024',
                mulai: '5 Desember 2025 07:45:00',
                selesai: '5 Desember 2025 17:00:00',
                istirahat: '11:30:00 - 13:00:00'
            },
            realisasi: {
                jenis: 'Hadir (Lengkap)',
                datang: '5 Desember 2025 07:35:00',
                pulang: '5 Desember 2025 17:10:00'
            }
        }
    ];

    return (
        <div className="container-fluid px-3 pb-5">
            {/* Header */}
            <h2 className="fw-bold mb-4" style={{ color: '#20288E' }}>Rekapitulasi Bulanan</h2>

            {/* Filters */}
            <div className="row g-3 mb-4 align-items-center">
                <div className="col-md-6 d-flex align-items-center gap-3">
                    <label className="fw-bold small mb-0" style={{ minWidth: '80px' }}>Karyawan</label>
                    <select className="form-select shadow-sm text-muted" style={{ fontSize: '0.9rem' }}>
                        <option>K594 - MOHAMAD ALDA</option>
                    </select>
                </div>
                <div className="col-md-6 d-flex align-items-center gap-3">
                    <label className="fw-bold small mb-0" style={{ minWidth: '80px' }}>Periode</label>
                    <select className="form-select shadow-sm text-muted" style={{ fontSize: '0.9rem' }}>
                        <option>Desember 2025</option>
                        <option>November 2025</option>
                    </select>
                </div>
            </div>

            <hr className="mb-4 text-muted opacity-25" />

            {/* Cards List */}
            <div className="d-flex flex-column gap-3">
                {rekapData.map((item, index) => (
                    <div key={index} className="card border rounded-2 shadow-sm overflow-hidden">
                        {/* Card Header - Date */}
                        <div className="card-header bg-light py-2 px-3 border-bottom">
                            <h6 className="mb-0 fw-bold text-dark">{item.date}</h6>
                        </div>
                        
                        {/* Card Body - Grid */}
                        <div className="card-body py-3 px-3">
                            <div className="row g-3">
                                {/* Col 1: Jadwal Kerja */}
                                <div className="col-md-6 border-end-md">
                                    <h6 className="fw-bold mb-3 small text-uppercase text-muted"><i className="fas fa-calendar-alt me-1"></i> Jadwal Kerja</h6>
                                    <div className="row g-2 small">
                                        <div className="col-4 text-muted">Nama Jadwal</div>
                                        <div className="col-8 fw-medium text-dark">{item.jadwal.nama}</div>

                                        <div className="col-4 text-muted">Mulai</div>
                                        <div className="col-8 fw-medium text-dark"><i className="far fa-clock text-muted me-1" style={{fontSize: '0.8em'}}></i> {item.jadwal.mulai}</div>

                                        <div className="col-4 text-muted">Selesai</div>
                                        <div className="col-8 fw-medium text-dark"><i className="far fa-clock text-muted me-1" style={{fontSize: '0.8em'}}></i> {item.jadwal.selesai}</div>

                                        <div className="col-4 text-muted">Istirahat</div>
                                        <div className="col-8 fw-medium text-dark text-muted">{item.jadwal.istirahat}</div>
                                    </div>
                                </div>

                                {/* Col 2: Realisasi */}
                                <div className="col-md-6 ps-md-4">
                                    <h6 className="fw-bold mb-3 small text-uppercase text-muted"><i className="fas fa-clipboard-check me-1"></i> Realisasi</h6>
                                    <div className="row g-2 small">
                                        <div className="col-4 text-muted">Jenis</div>
                                        <div className={`col-8 fw-bold ${item.realisasi.jenis.includes('Tidak') ? 'text-danger' : 'text-success'}`}>
                                            {item.realisasi.jenis}
                                        </div>

                                        <div className="col-4 text-muted">Datang</div>
                                        <div className="col-8 fw-medium text-dark">
                                            {item.realisasi.datang !== '-' ? <i className="fas fa-sign-in-alt text-success me-1" style={{fontSize: '0.8em'}}></i> : null} 
                                            {item.realisasi.datang}
                                        </div>

                                        <div className="col-4 text-muted">Pulang</div>
                                        <div className="col-8 fw-medium text-dark">
                                            {item.realisasi.pulang !== '-' ? <i className="fas fa-sign-out-alt text-danger me-1" style={{fontSize: '0.8em'}}></i> : null}
                                            {item.realisasi.pulang}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                @media (min-width: 768px) {
                    .border-end-md {
                        border-right: 1px solid #dee2e6;
                    }
                }
            `}</style>
        </div>
    );
}
