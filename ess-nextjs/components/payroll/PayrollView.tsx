"use client";

import React from 'react';

export default function PayrollView() {
    // Mock Data for Payroll
    const payrollStats = [
        { label: 'Total Penggajian', value: 'Rp 1.2M', change: '+2.5%', icon: 'fa-funnel-dollar', color: 'primary' },
        { label: 'Karyawan Terbayar', value: '142', subValue: '/ 150', icon: 'fa-users', color: 'success' },
    ];

    const employees = [
        { id: 'EMP-001', name: 'Sarah Wilson', role: 'UI/UX Designer', date: '28 Okt 2025', gross: '15.800.000', tax: '1.200.000', net: '14.600.000', status: 'Terbayar', img: 'https://i.pravatar.cc/150?u=1' },
        { id: 'EMP-002', name: 'James Anderson', role: 'Frontend Dev', date: '28 Okt 2025', gross: '18.500.000', tax: '1.500.000', net: '17.000.000', status: 'Terbayar', img: 'https://i.pravatar.cc/150?u=2' },
        { id: 'EMP-003', name: 'Michael Chen', role: 'Backend Lead', date: '28 Okt 2025', gross: '25.000.000', tax: '2.500.000', net: '22.500.000', status: 'Proses', img: 'https://i.pravatar.cc/150?u=3' },
        { id: 'EMP-004', name: 'Emily Davis', role: 'Product Manager', date: '28 Okt 2025', gross: '22.000.000', tax: '2.000.000', net: '20.000.000', status: 'Terbayar', img: 'https://i.pravatar.cc/150?u=4' },
        { id: 'EMP-005', name: 'Robert Taylor', role: 'DevOps Engineer', date: 'Pending', gross: '19.000.000', tax: '1.600.000', net: '17.400.000', status: 'Pending', img: 'https://i.pravatar.cc/150?u=5' },
    ];

    return (
        <div className="container-fluid p-4">
            {/* Header */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
                <div>
                    <h4 className="fw-bold mb-1" style={{ color: '#1a1f36' }}>Dashboard Payroll</h4>
                    <p className="text-muted small fw-light mb-0">Ringkasan pembayaran periode Oktober 2025</p>
                </div>
                <div className="d-flex gap-3 align-items-center mt-3 mt-md-0">
                    <select className="form-select form-select-sm border-0 shadow-sm rounded-pill px-3 fw-medium text-dark" style={{ width: '140px' }} defaultValue="Oktober 2025">
                        <option>Oktober 2025</option>
                        <option>September 2025</option>
                    </select>
                    <button className="btn btn-primary btn-sm rounded-pill px-3 d-flex align-items-center gap-2 shadow-sm fw-medium shadow-primary-lg">
                        <i className="fas fa-paper-plane"></i> Proses Gaji
                    </button>
                    <button className="btn btn-white btn-sm bg-white rounded-circle shadow-sm" style={{ width: '35px', height: '35px' }}>
                        <i className="fas fa-cog text-muted"></i>
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="row g-3 mb-4">
                {payrollStats.map((stat, idx) => (
                    <div className="col-md-6 col-xl-3" key={idx}>
                        <div className="card border-0 shadow-sm rounded-4 h-100 position-relative overflow-hidden hover-translate-y transition-base">
                            <div className="card-body p-2">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <div className={`icon-box bg-${stat.color} bg-opacity-10 text-${stat.color} rounded-3 p-2`}>
                                        <i className={`fas ${stat.icon}`}></i>
                                    </div>
                                    {stat.change && (
                                        <span className="badge bg-success bg-opacity-10 text-success rounded-pill px-2 py-1 x-small">
                                            <i className="fas fa-arrow-up me-1"></i> {stat.change}
                                        </span>
                                    )}
                                </div>
                                <h6 className="fw-bold mb-0 text-dark">{stat.value}</h6>
                                <div className="text-muted x-small mb-0 fw-medium">
                                    {stat.label} 
                                    {stat.subValue && (
                                        <span className={`opacity-75 ${stat.label === 'Menunggu Proses' ? 'd-block' : ''}`}>
                                            {stat.subValue}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Employee Table Section */}
            <h5 className="fw-bold mb-3 text-dark">Daftar Gaji Karyawan</h5>
            <div className="bg-white rounded-4 shadow-sm" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                <table className="table align-middle mb-0 small w-100" style={{ borderCollapse: 'separate', borderSpacing: '0', fontSize: '0.8rem' }}>
                    <thead className="bg-light sticky-top" style={{ top: 0, zIndex: 1 }}>
                        <tr className="border-bottom">
                            <th className="py-2 px-2 border-end bg-light fw-bold text-dark text-center">No</th>
                            <th className="py-2 px-2 border-end bg-light fw-bold text-dark text-start">Karyawan</th>
                            <th className="py-2 px-2 border-end bg-light fw-bold text-dark text-start">Departemen</th>
                            <th className="py-2 px-2 border-end bg-light fw-bold text-dark text-start">Divisi</th>
                            <th className="py-2 px-2 border-end bg-light fw-bold text-dark text-start">Jabatan</th>
                            <th className="py-2 px-2 border-end bg-light fw-bold text-dark text-center">Date</th>
                            <th className="py-2 px-2 border-end bg-light fw-bold text-dark text-end text-nowrap">Gaji Kotor</th>
                            <th className="py-2 px-2 border-end bg-light fw-bold text-dark text-end">Gaji Bersih</th>
                            <th className="py-2 px-2 border-end bg-light fw-bold text-dark text-center">Status</th>
                            <th className="py-2 px-2 bg-light fw-bold text-dark text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-bottom">
                            <td className="py-2 px-2 border-end fw-medium text-dark text-center">1</td>
                            <td className="py-2 px-2 border-end fw-medium text-dark text-start">Taylor</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Departemen Teknologi</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Divisi Teknologi</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Engineer</td>
                            <td className="py-2 px-2 border-end text-muted text-nowrap text-center">28 Okt 2025</td>
                            <td className="py-2 px-2 border-end fw-medium text-dark text-end">18.500.000</td>
                            <td className="py-2 px-2 border-end fw-bold text-primary text-end" style={{ color: '#20288E' }}>17.400.000</td>
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
                        <tr className="border-bottom">
                            <td className="py-2 px-2 border-end fw-medium text-dark text-center">2</td>
                            <td className="py-2 px-2 border-end fw-medium text-dark text-start">Sarah Wilson</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Departemen Pemasaran</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Divisi Kreatif</td>
                            <td className="py-2 px-2 border-end text-muted text-start">UI/UX Designer</td>
                            <td className="py-2 px-2 border-end text-muted text-nowrap text-center">28 Okt 2025</td>
                            <td className="py-2 px-2 border-end fw-medium text-dark text-end">15.800.000</td>
                            <td className="py-2 px-2 border-end fw-bold text-primary text-end" style={{ color: '#20288E' }}>14.600.000</td>
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
                        <tr className="border-bottom">
                            <td className="py-2 px-2 border-end fw-medium text-dark text-center">3</td>
                            <td className="py-2 px-2 border-end fw-medium text-dark text-start">James Anderson</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Departemen Keuangan</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Divisi Akuntansi</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Frontend Dev</td>
                            <td className="py-2 px-2 border-end text-muted text-nowrap text-center">28 Okt 2025</td>
                            <td className="py-2 px-2 border-end fw-medium text-dark text-end">18.500.000</td>
                            <td className="py-2 px-2 border-end fw-bold text-primary text-end" style={{ color: '#20288E' }}>17.000.000</td>
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
                        <tr className="border-bottom">
                            <td className="py-2 px-2 border-end fw-medium text-dark text-center">4</td>
                            <td className="py-2 px-2 border-end fw-medium text-dark text-start">Michael Brown</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Departemen Operasional</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Divisi Logistik</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Driver</td>
                            <td className="py-2 px-2 border-end text-muted text-nowrap text-center">28 Okt 2025</td>
                            <td className="py-2 px-2 border-end fw-medium text-dark text-end">5.500.000</td>
                            <td className="py-2 px-2 border-end fw-bold text-primary text-end" style={{ color: '#20288E' }}>5.200.000</td>
                            <td className="py-2 px-2 border-end text-center">
                                <span className="badge rounded-pill px-3 py-1 fw-medium small bg-info bg-opacity-10 text-info">
                                    Proses
                                </span>
                            </td>
                            <td className="py-2 px-2 text-center">
                                <button className="btn btn-sm text-primary hover-text-dark p-0 border-0 bg-transparent transition-base">
                                    <i className="fas fa-eye"></i>
                                </button>
                            </td>
                        </tr>
                        <tr className="border-bottom">
                            <td className="py-2 px-2 border-end fw-medium text-dark text-center">5</td>
                            <td className="py-2 px-2 border-end fw-medium text-dark text-start">Robert Taylor</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Departemen Teknologi</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Divisi DevOps</td>
                            <td className="py-2 px-2 border-end text-muted text-start">DevOps Engineer</td>
                            <td className="py-2 px-2 border-end text-muted text-nowrap text-center">28 Okt 2025</td>
                            <td className="py-2 px-2 border-end fw-medium text-dark text-end">19.000.000</td>
                            <td className="py-2 px-2 border-end fw-bold text-primary text-end" style={{ color: '#20288E' }}>17.400.000</td>
                            <td className="py-2 px-2 border-end text-center">
                                <span className="badge rounded-pill px-3 py-1 fw-medium small bg-warning bg-opacity-10 text-warning">
                                    Pending
                                </span>
                            </td>
                            <td className="py-2 px-2 text-center">
                                <button className="btn btn-sm text-primary hover-text-dark p-0 border-0 bg-transparent transition-base">
                                    <i className="fas fa-eye"></i>
                                </button>
                            </td>
                        </tr>
                        <tr className="border-bottom">
                            <td className="py-2 px-2 border-end fw-medium text-dark text-center">6</td>
                            <td className="py-2 px-2 border-end fw-medium text-dark text-start">Emily White</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Departemen HR</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Divisi Recruitment</td>
                            <td className="py-2 px-2 border-end text-muted text-start">HR Specialist</td>
                            <td className="py-2 px-2 border-end text-muted text-nowrap text-center">28 Okt 2025</td>
                            <td className="py-2 px-2 border-end fw-medium text-dark text-end">12.000.000</td>
                            <td className="py-2 px-2 border-end fw-bold text-primary text-end" style={{ color: '#20288E' }}>10.800.000</td>
                            <td className="py-2 px-2 border-end text-center">
                                <span className="badge rounded-pill px-3 py-1 fw-medium small bg-warning bg-opacity-10 text-warning">
                                    Pending
                                </span>
                            </td>
                            <td className="py-2 px-2 text-center">
                                <button className="btn btn-sm text-primary hover-text-dark p-0 border-0 bg-transparent transition-base">
                                    <i className="fas fa-eye"></i>
                                </button>
                            </td>
                        </tr>
                        <tr className="border-bottom">
                            <td className="py-2 px-2 border-end fw-medium text-dark text-center">7</td>
                            <td className="py-2 px-2 border-end fw-medium text-dark text-start">David Miller</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Departemen Marketing</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Divisi Konten</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Content Writer</td>
                            <td className="py-2 px-2 border-end text-muted text-nowrap text-center">28 Okt 2025</td>
                            <td className="py-2 px-2 border-end fw-medium text-dark text-end">9.500.000</td>
                            <td className="py-2 px-2 border-end fw-bold text-primary text-end" style={{ color: '#20288E' }}>8.800.000</td>
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
                        <tr className="border-bottom">
                            <td className="py-2 px-2 border-end fw-medium text-dark text-center">8</td>
                            <td className="py-2 px-2 border-end fw-medium text-dark text-start">Jennifer Wu</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Departemen Finance</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Divisi Pajak</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Tax Officer</td>
                            <td className="py-2 px-2 border-end text-muted text-nowrap text-center">28 Okt 2025</td>
                            <td className="py-2 px-2 border-end fw-medium text-dark text-end">14.000.000</td>
                            <td className="py-2 px-2 border-end fw-bold text-primary text-end" style={{ color: '#20288E' }}>12.500.000</td>
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
                    </tbody>
                    <tbody>
                        {/* Existing rows 1-8 are preserved by the replacement range starting after them, but wait.
                        The user asked to ADD 5 rows.
                        The tool replaces content between StartLine and EndLine.
                        StartLine should be the end of the current tbody content, i.e., line 252 (closing tbody tag).
                        Actually, replace_file_content replaces the specific lines.
                        If I want to append, I should include the last row or simply insert before the closing tbody tag.
                        Better approach: Replace the closing `</tbody>` with the new rows + closing `</tbody>`.
                        Wait, line 252 is </tbody>.
                        So if I target StartLine: 252, EndLine: 252, TargetContent: </tbody> ...
                        */}
                        <tr className="border-bottom">
                            <td className="py-2 px-2 border-end fw-medium text-dark text-center">9</td>
                            <td className="py-2 px-2 border-end fw-medium text-dark text-start">William Brown</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Departemen IT</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Divisi Security</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Security Analyst</td>
                            <td className="py-2 px-2 border-end text-muted text-nowrap text-center">28 Okt 2025</td>
                            <td className="py-2 px-2 border-end fw-medium text-dark text-end">16.500.000</td>
                            <td className="py-2 px-2 border-end fw-bold text-primary text-end" style={{ color: '#20288E' }}>15.200.000</td>
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
                        <tr className="border-bottom">
                            <td className="py-2 px-2 border-end fw-medium text-dark text-center">10</td>
                            <td className="py-2 px-2 border-end fw-medium text-dark text-start">Linda Martinez</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Departemen Sales</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Divisi B2B</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Sales Manager</td>
                            <td className="py-2 px-2 border-end text-muted text-nowrap text-center">28 Okt 2025</td>
                            <td className="py-2 px-2 border-end fw-medium text-dark text-end">21.000.000</td>
                            <td className="py-2 px-2 border-end fw-bold text-primary text-end" style={{ color: '#20288E' }}>19.500.000</td>
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
                        <tr className="border-bottom">
                            <td className="py-2 px-2 border-end fw-medium text-dark text-center">11</td>
                            <td className="py-2 px-2 border-end fw-medium text-dark text-start">Richard Lee</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Departemen Produksi</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Divisi QC</td>
                            <td className="py-2 px-2 border-end text-muted text-start">QC Specialist</td>
                            <td className="py-2 px-2 border-end text-muted text-nowrap text-center">28 Okt 2025</td>
                            <td className="py-2 px-2 border-end fw-medium text-dark text-end">11.000.000</td>
                            <td className="py-2 px-2 border-end fw-bold text-primary text-end" style={{ color: '#20288E' }}>10.100.000</td>
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
                        <tr className="border-bottom">
                            <td className="py-2 px-2 border-end fw-medium text-dark text-center">12</td>
                            <td className="py-2 px-2 border-end fw-medium text-dark text-start">Susan Clark</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Departemen Admin</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Divisi Umum</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Admin Staff</td>
                            <td className="py-2 px-2 border-end text-muted text-nowrap text-center">28 Okt 2025</td>
                            <td className="py-2 px-2 border-end fw-medium text-dark text-end">8.500.000</td>
                            <td className="py-2 px-2 border-end fw-bold text-primary text-end" style={{ color: '#20288E' }}>7.900.000</td>
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
                        <tr className="border-bottom">
                            <td className="py-2 px-2 border-end fw-medium text-dark text-center">13</td>
                            <td className="py-2 px-2 border-end fw-medium text-dark text-start">Joseph Young</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Departemen IT</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Divisi Infrastructure</td>
                            <td className="py-2 px-2 border-end text-muted text-start">Network Admin</td>
                            <td className="py-2 px-2 border-end text-muted text-nowrap text-center">28 Okt 2025</td>
                            <td className="py-2 px-2 border-end fw-medium text-dark text-end">13.500.000</td>
                            <td className="py-2 px-2 border-end fw-bold text-primary text-end" style={{ color: '#20288E' }}>12.200.000</td>
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
                    </tbody>
                </table>
            </div>

            <style jsx>{`
                .shadow-primary-lg { box-shadow: 0 10px 20px -5px rgba(32, 40, 142, 0.4); }
                .hover-translate-y:hover { transform: translateY(-3px); }
                .transition-base { transition: all 0.2s ease; }
            `}</style>
        </div>
    );
}
