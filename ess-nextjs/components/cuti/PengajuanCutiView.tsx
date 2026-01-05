"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PengajuanCutiView() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [np, setNp] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [reason, setReason] = useState('');

    return (
        <div className="container-fluid p-0">
            <h3 className="fw-bold mb-1" style={{ color: '#20288E' }}>Buat Pengajuan Cuti</h3>
            <p className="text-muted mb-4">Fill out the form below to submit a new leave request.</p>

            <div className="row g-4">
                {/* Left Column: Form */}
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm rounded-4 p-4">
                        {/* Jenis Pengajuan */}
                        <div className="mb-4">
                            <label className="fw-bold mb-3 d-block">Jenis Pengajuan</label>
                            <div className="row g-3">
                                <div className="col-4">
                                    <div
                                        className="card border cursor-pointer text-center py-3 transition-all border-primary bg-primary bg-opacity-10 text-primary"
                                        style={{ position: 'relative' }}
                                    >
                                        <i className="fas fa-check-circle position-absolute top-0 end-0 m-2 small"></i>
                                        <div className="mb-2"><i className="fas fa-umbrella-beach fa-lg text-primary"></i></div>
                                        <div className="fw-bold small">Cuti</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Identity Section */}
                        <div className="row g-3 mb-4">
                            <div className="col-md-6">
                                <label className="fw-bold mb-2 small">Nama Lengkap</label>
                                <div className="input-group">
                                    <span className="input-group-text bg-white border-end-0"><i className="far fa-user text-muted"></i></span>
                                    <input
                                        type="text"
                                        className="form-control border-start-0 ps-0"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Masukkan Nama Lengkap"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label className="fw-bold mb-2 small">NP (Nomor Pegawai)</label>
                                <div className="input-group">
                                    <span className="input-group-text bg-white border-end-0"><i className="far fa-id-card text-muted"></i></span>
                                    <input
                                        type="text"
                                        className="form-control border-start-0 ps-0"
                                        value={np}
                                        onChange={(e) => setNp(e.target.value)}
                                        placeholder="Masukkan Nomor Pegawai"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Date Inputs */}
                        <div className="row g-3 mb-4">
                            <div className="col-md-6">
                                <label className="fw-bold mb-2 small">Tanggal Mulai</label>
                                <div className="input-group">
                                    <span className="input-group-text bg-white border-end-0"><i className="far fa-calendar text-muted"></i></span>
                                    <input type="date" className="form-control border-start-0 ps-0" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label className="fw-bold mb-2 small">Tanggal Selesai</label>
                                <div className="input-group">
                                    <span className="input-group-text bg-white border-end-0"><i className="far fa-calendar text-muted"></i></span>
                                    <input type="date" className="form-control border-start-0 ps-0" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        {/* Reason Input */}
                        <div className="mb-4">
                            <label className="fw-bold mb-2 small">Keterangan</label>
                            <textarea
                                className="form-control"
                                rows={4}
                                placeholder="Jelaskan alasan pengajuan anda secara detail..."
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                            ></textarea>
                        </div>

                        {/* File Upload */}
                        <div className="mb-4">
                            <label className="fw-bold mb-2 small">Lampiran (Opsional)</label>
                            <div className="border border-dashed rounded-3 p-4 text-center bg-light">
                                <div className="mb-2">
                                    <i className="fas fa-cloud-upload-alt fa-2x text-muted"></i>
                                </div>
                                <div className="fw-bold small">Click to upload or drag and drop</div>
                                <div className="text-muted small" style={{ fontSize: '0.75rem' }}>PDF, JPG, or PNG (MAX. 5MB)</div>
                                <input type="file" className="d-none" />
                            </div>
                        </div>

                        <div className="d-flex justify-content-end gap-2 mt-4">
                            <button className="btn btn-outline-secondary px-4" onClick={() => router.back()}>Batal</button>
                            <button
                                className="btn btn-primary px-4 d-flex align-items-center gap-2"
                                style={{ backgroundColor: '#20288E' }}
                                onClick={() => {
                                    alert('Pengajuan cuti berhasil dikirim!');
                                    router.back();
                                }}
                            >
                                Kirim Pengajuan <i className="fas fa-paper-plane small"></i>
                            </button>
                        </div>

                        <style jsx>{`
                            .border-dashed {
                                border-style: dashed !important;
                            }
                            .cursor-pointer {
                                cursor: pointer;
                            }
                        `}</style>
                    </div>
                </div>

                {/* Right Column: Sidebar */}
                <div className="col-lg-4">
                    {/* Quota Card (Only for Cuti) */}
                    <div className="card border-0 shadow-sm rounded-4 mb-4 text-white overflow-hidden position-relative" style={{ background: 'linear-gradient(135deg, #20288E 0%, #4a56e2 100%)' }}>
                        <div className="card-body p-4 position-relative z-1">
                            <div className="d-flex justify-content-between mb-2">
                                <div className="bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                    <i className="fas fa-chart-pie"></i>
                                </div>
                                <div className="badge bg-white bg-opacity-25 fw-normal px-3 py-2">Tahun 2025</div>
                            </div>
                            <div className="mb-1 opacity-75 small">Sisa Cuti Tahunan</div>
                            <h1 className="display-4 fw-bold mb-3">12 <span className="fs-4 fw-normal">Hari</span></h1>
                            <div className="progress bg-white bg-opacity-25" style={{ height: '6px' }}>
                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '60%' }}></div>
                            </div>
                            <div className="mt-2 small opacity-75">Digunakan 8 dari 20 hari</div>
                        </div>
                    </div>

                    {/* Guidelines Card */}
                    <div className="card border-0 shadow-sm rounded-4">
                        <div className="card-body p-4">
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <i className="fas fa-info-circle text-primary"></i>
                                <h6 className="fw-bold mb-0">Ketentuan Pengajuan</h6>
                            </div>
                            <ul className="text-secondary small ps-3 mb-0 d-flex flex-column gap-2" style={{ fontSize: '0.85rem' }}>
                                <li>Pengajuan cuti minimal dilakukan H-3 sebelum tanggal efektif.</li>
                                <li>Cuti mendadak hanya diperbolehkan untuk alasan force majeure / sakit.</li>
                                <li>Semua pengajuan akan melalui proses approval berjenjang.</li>
                                <li><a href="#" className="text-primary text-decoration-none fw-bold">Baca kebijakan lengkap</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
