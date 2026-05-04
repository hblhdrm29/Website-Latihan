"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [showGridMenu, setShowGridMenu] = useState(false);
    const [searchText, setSearchText] = useState('');

    // Helper to check active state including query params
    const isActive = (path: string, queryParam?: { key: string, value: string }) => {
        if (path === '/') {
            // Special case for root: only active if NO query param 'view' exists (unless looking for specific view)
            if (pathname !== '/') return '';
            const currentView = searchParams.get('view');

            if (queryParam) {
                return currentView === queryParam.value ? 'active' : '';
            } else {
                // Dashboard case: no view param should be present or view is not profile/agenda/kehadiran/etc
                return !currentView || currentView === 'dashboard' ? 'active' : '';
            }
        }
        // Standard path check for other pages
        return pathname === path ? 'active' : '';
    };

    const clearSearch = () => setSearchText('');

    return (
        <div className="sidebar d-flex flex-column">
            <div className="logo-section d-flex align-items-center gap-3 px-3 mb-4">
                {/* Grid Menu Trigger */}
                <div
                    className="grid-menu-btn"
                    id="gridMenuBtn"
                    onClick={() => setShowGridMenu(!showGridMenu)}
                    style={{ marginTop: '20px' }}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="19" cy="5" r="1"></circle>
                        <circle cx="5" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                        <circle cx="19" cy="19" r="1"></circle>
                        <circle cx="5" cy="19" r="1"></circle>
                    </svg>
                </div>

                <Link href="/" className="text-decoration-none" style={{ cursor: 'pointer' }}>
                    <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/img/Logo_Peruri2.png`} alt="PERURI Logo" style={{ maxWidth: '100px', marginBottom: 0 }} />
                </Link>
            </div>

            {/* Apps Grid Overlay */}
            <div className={`apps-grid-overlay ${showGridMenu ? 'show' : ''}`} id="appsGridOverlay">
                <style jsx>{`
                .apps-grid-overlay .app-item.active .app-icon {
                    background-color: #e7f1ff !important;
                    color: #0d6efd !important;
                    border: 1px solid rgba(13, 110, 253, 0.2) !important;
                }
                .apps-grid-overlay .app-item.active .app-label {
                    color: #0d6efd !important;
                    font-weight: 600 !important;
                }
            `}</style>
                <div className="apps-grid-header position-relative">
                    <input
                        type="text"
                        className="apps-grid-search"
                        placeholder="Find ESS Apps"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        style={{ paddingRight: '40px' }}
                    />
                    {searchText && (
                        <i
                            className="fas fa-times position-absolute top-50 end-0 translate-middle-y me-3 text-muted cursor-pointer hover-text-danger"
                            onClick={clearSearch}
                            style={{ cursor: 'pointer' }}
                        ></i>
                    )}
                </div>
                <div className="apps-grid">
                    <Link href="/?view=kehadiran" className={`app-item ${isActive('/', { key: 'view', value: 'kehadiran' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-user-clock"></i></div><span className="app-label">Kehadiran</span></Link>
                    <Link href="/?view=lembur" className={`app-item ${isActive('/', { key: 'view', value: 'lembur' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-clock"></i></div><span className="app-label">Lembur</span></Link>
                    <Link href="/?view=cuti" className={`app-item ${isActive('/', { key: 'view', value: 'cuti' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-plane"></i></div><span className="app-label">Cuti</span></Link>

                    <Link href="/?view=izin" className={`app-item ${isActive('/', { key: 'view', value: 'izin' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-envelope"></i></div><span className="app-label">Izin</span></Link>
                    <Link href="/?view=dinas" className={`app-item ${isActive('/', { key: 'view', value: 'dinas' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-car"></i></div><span className="app-label">Dinas</span></Link>

                    <Link href="/?view=payslips" className={`app-item ${isActive('/', { key: 'view', value: 'payslips' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-file-invoice-dollar"></i></div><span className="app-label">Payslips</span></Link>
                    <Link href="/?view=payroll" className={`app-item ${isActive('/', { key: 'view', value: 'payroll' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-money-check-alt"></i></div><span className="app-label">Payroll</span></Link>

                    <Link href="/?view=informasi" className={`app-item ${isActive('/', { key: 'view', value: 'informasi' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-info-circle"></i></div><span className="app-label">Informasi</span></Link>
                    <Link href="/?view=pelatihan" className={`app-item ${isActive('/', { key: 'view', value: 'pelatihan' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-briefcase"></i></div><span className="app-label">Pelatihan</span></Link>
                    <Link href="/?view=spbe" className={`app-item ${isActive('/', { key: 'view', value: 'spbe' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-file-alt"></i></div><span className="app-label">SPBE</span></Link>
                    <Link href="/?view=spbi" className={`app-item ${isActive('/', { key: 'view', value: 'spbi' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-file"></i></div><span className="app-label">SPBI</span></Link>

                    {/* Disabled items */}

                    <Link href="/?view=kesehatan" className={`app-item ${isActive('/', { key: 'view', value: 'kesehatan' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-plus-square"></i></div><span className="app-label">Kesehatan</span></Link>
                    <Link href="/?view=transport" className={`app-item ${isActive('/', { key: 'view', value: 'transport' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-bus"></i></div><span className="app-label">Transport</span></Link>
                    <Link href="/?view=tasklist" className={`app-item ${isActive('/', { key: 'view', value: 'tasklist' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-tasks"></i></div><span className="app-label">Tasklist</span></Link>
                    <Link href="/?view=health" className={`app-item ${isActive('/', { key: 'view', value: 'health' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-heartbeat"></i></div><span className="app-label">Health</span></Link>
                </div>
            </div>

            {showGridMenu && (
                <div
                    style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 900 }}
                    onClick={() => setShowGridMenu(false)}
                />
            )}

            <nav className="nav flex-column">
                {searchParams.get('view') === 'dinas' ? (
                    // DINAS SPECIFIC SIDEBAR
                    <>
                        <div className="nav-item px-3 mb-2 mt-2">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Menu Dinas</span>
                        </div>
                        <Link href="/?view=dinas" className="nav-link active">
                            <i className="fas fa-home"></i> SPPD
                        </Link>
                        <div className="nav-item px-3 mb-2 mt-4">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                        </div>
                        <Link href="/" className="nav-link">
                            <i className="fas fa-arrow-left"></i> Main Dashboard
                        </Link>
                    </>
                ) : ['kehadiran', 'perencanaan', 'persetujuankehadiran'].includes(searchParams.get('view') || '') ? (
                    // KEHADIRAN SPECIFIC SIDEBAR
                    <>
                        <div className="nav-item px-3 mb-2 mt-2">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Menu Kehadiran</span>
                        </div>
                        <Link href="/?view=kehadiran" className={`nav-link ${isActive('/', { key: 'view', value: 'kehadiran' })}`}>
                            <i className="fas fa-user-clock"></i> Data Kehadiran
                        </Link>
                        <Link href="/?view=perencanaan" className={`nav-link ${isActive('/', { key: 'view', value: 'perencanaan' })}`}>
                            <i className="fas fa-calendar-alt"></i> Perencanaan Jadwal Kerja
                        </Link>
                        <Link href="/?view=persetujuankehadiran" className={`nav-link ${isActive('/', { key: 'view', value: 'persetujuankehadiran' })}`}>
                            <i className="fas fa-check-circle"></i> Persetujuan Kehadiran
                        </Link>
                        <div className="nav-item px-3 mb-2 mt-4">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                        </div>
                        <Link href="/" className="nav-link">
                            <i className="fas fa-arrow-left"></i> Main Dashboard
                        </Link>
                    </>
                ) : ['lembur', 'pengajuanlembur'].includes(searchParams.get('view') || '') ? (
                    // LEMBUR SPECIFIC SIDEBAR
                    <>
                        <div className="nav-item px-3 mb-2 mt-2">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Menu Lembur</span>
                        </div>
                        <Link href="/?view=lembur" className={`nav-link ${isActive('/', { key: 'view', value: 'lembur' })}`}>
                            <i className="fas fa-clipboard-check"></i> Persetujuan Lembur
                        </Link>
                        <Link href="/?view=pengajuanlembur" className={`nav-link ${isActive('/', { key: 'view', value: 'pengajuanlembur' })}`}>
                            <i className="fas fa-file-signature"></i> Pengajuan Lembur
                        </Link>
                        <div className="nav-item px-3 mb-2 mt-4">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                        </div>
                        <Link href="/" className="nav-link">
                            <i className="fas fa-arrow-left"></i> Main Dashboard
                        </Link>
                    </>
                ) : ['cuti', 'persetujuancuti', 'pengajuancuti'].includes(searchParams.get('view') || '') ? (
                    // CUTI SPECIFIC SIDEBAR
                    <>
                        <div className="nav-item px-3 mb-2 mt-2">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Menu Cuti</span>
                        </div>
                        <Link href="/?view=cuti" className={`nav-link ${isActive('/', { key: 'view', value: 'cuti' })}`}>
                            <i className="fas fa-file-signature"></i> Permohonan Cuti
                        </Link>
                        <Link href="/?view=pengajuancuti" className={`nav-link ${isActive('/', { key: 'view', value: 'pengajuancuti' })}`}>
                            <i className="fas fa-plus-circle"></i> Pengajuan Cuti
                        </Link>
                        <Link href="/?view=persetujuancuti" className={`nav-link ${isActive('/', { key: 'view', value: 'persetujuancuti' })}`}>
                            <i className="fas fa-clipboard-check"></i> Persetujuan Cuti
                        </Link>
                        <div className="nav-item px-3 mb-2 mt-4">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                        </div>
                        <Link href="/" className="nav-link">
                            <i className="fas fa-arrow-left"></i> Main Dashboard
                        </Link>
                    </>
                ) : ['izin', 'permohonanizin', 'persetujuanizin', 'pengajuanizin'].includes(searchParams.get('view') || '') ? (
                    // IZIN SPECIFIC SIDEBAR
                    <>
                        <div className="nav-item px-3 mb-2 mt-2">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Menu Izin</span>
                        </div>
                        <Link href="/?view=izin" className={`nav-link ${isActive('/', { key: 'view', value: 'izin' })}`}>
                            <i className="fas fa-home"></i> Data Perizinan
                        </Link>
                        <Link href="/?view=persetujuanizin" className={`nav-link ${isActive('/', { key: 'view', value: 'persetujuanizin' })}`}>
                            <i className="fas fa-file-signature"></i> Persetujuan Izin
                        </Link>
                        <Link href="/?view=permohonanizin" className={`nav-link ${isActive('/', { key: 'view', value: 'permohonanizin' })}`}>
                            <i className="fas fa-history"></i> Permohonan Izin
                        </Link>
                        <Link href="/?view=pengajuanizin" className={`nav-link ${isActive('/', { key: 'view', value: 'pengajuanizin' })}`}>
                            <i className="fas fa-plus-circle"></i> Pengajuan Izin
                        </Link>
                        <div className="nav-item px-3 mb-2 mt-4">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                        </div>
                        <Link href="/" className="nav-link">
                            <i className="fas fa-arrow-left"></i> Main Dashboard
                        </Link>
                    </>
                ) : searchParams.get('view') === 'payroll' ? (
                    // PAYROLL SPECIFIC SIDEBAR
                    <>
                        <div className="nav-item px-3 mb-2 mt-2">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Menu Payroll</span>
                        </div>
                        <Link href="/?view=payroll" className="nav-link active">
                            <i className="fas fa-money-check-alt"></i> Dashboard Payroll
                        </Link>
                        <a href="#" className="nav-link">
                            <i className="fas fa-cogs"></i> Proses Gaji
                        </a>
                        <a href="#" className="nav-link">
                            <i className="fas fa-chart-bar"></i> Laporan
                        </a>
                        <a href="#" className="nav-link">
                            <i className="fas fa-percent"></i> Pengaturan Pajak
                        </a>
                        <div className="nav-item px-3 mb-2 mt-4">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                        </div>
                        <Link href="/" className="nav-link">
                            <i className="fas fa-arrow-left"></i> Main Dashboard
                        </Link>
                    </>
                ) : searchParams.get('view') === 'payslips' ? (
                    // PAYSLIPS SPECIFIC SIDEBAR
                    <>
                        <div className="nav-item px-3 mb-2 mt-2">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Menu Payslips</span>
                        </div>
                        <Link href="/?view=payslips" className="nav-link active">
                            <i className="fas fa-file-invoice-dollar"></i> My Payslips
                        </Link>
                        <a href="#" className="nav-link">
                            <i className="fas fa-chart-line"></i> Salary History
                        </a>
                        <a href="#" className="nav-link">
                            <i className="fas fa-cog"></i> Tax Settings
                        </a>
                        <div className="nav-item px-3 mb-2 mt-4">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                        </div>
                        <Link href="/" className="nav-link">
                            <i className="fas fa-arrow-left"></i> Main Dashboard
                        </Link>
                    </>
                ) : ['informasi', 'rekapitulasi', 'pamlek', 'keterlambatan'].includes(searchParams.get('view') || '') ? (
                    // INFORMASI SPECIFIC SIDEBAR
                    <>
                        <div className="nav-item px-3 mb-2 mt-2">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Informasi</span>
                        </div>

                        <Link href="/?view=informasi" className={`nav-link ${isActive('/', { key: 'view', value: 'informasi' })}`}>
                            <i className="fas fa-chart-line"></i> Gaji
                        </Link>
                        <Link href="/?view=rekapitulasi" className={`nav-link ${isActive('/', { key: 'view', value: 'rekapitulasi' })}`}>
                            <i className="fas fa-list-alt"></i> Rekapitulasi Bulanan
                        </Link>
                        <Link href="/?view=pamlek" className={`nav-link ${isActive('/', { key: 'view', value: 'pamlek' })}`}>
                            <i className="fas fa-building"></i> Data Pamlek
                        </Link>
                        <Link href="/?view=keterlambatan" className={`nav-link ${isActive('/', { key: 'view', value: 'keterlambatan' })}`}>
                            <i className="fas fa-clock"></i> Data Keterlambatan
                        </Link>

                        <div className="nav-item px-3 mb-2 mt-4">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                        </div>
                        <Link href="/" className="nav-link">
                            <i className="fas fa-arrow-left"></i> Main Dashboard
                        </Link>
                    </>
                ) : ['pelatihan', 'historypelatihan', 'persetujuanpelatihan'].includes(searchParams.get('view') || '') ? (
                    // PELATIHAN SPECIFIC SIDEBAR
                    <>
                        <div className="nav-item px-3 mb-2 mt-2">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Pelatihan</span>
                        </div>

                        <Link href="/?view=pelatihan" className={`nav-link ${isActive('/', { key: 'view', value: 'pelatihan' })}`}>
                            <i className="fas fa-pen"></i> Input Pelatihan
                        </Link>
                        <Link href="/?view=historypelatihan" className={`nav-link ${isActive('/', { key: 'view', value: 'historypelatihan' })}`}>
                            <i className="fas fa-history"></i> History Pelatihan
                        </Link>
                        <Link href="/?view=persetujuanpelatihan" className={`nav-link ${isActive('/', { key: 'view', value: 'persetujuanpelatihan' })}`}>
                            <i className="fas fa-check-circle"></i> Persetujuan Pelatihan
                        </Link>

                        <div className="nav-item px-3 mb-2 mt-4">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                        </div>
                        <Link href="/" className="nav-link">
                            <i className="fas fa-arrow-left"></i> Main Dashboard
                        </Link>
                    </>
                ) : ['spbe', 'persetujuanspbe', 'konfirmasispbemasuk', 'konfirmasispbekeluar'].includes(searchParams.get('view') || '') ? (
                    // SPBE SPECIFIC SIDEBAR
                    <>
                        <div className="nav-item px-3 mb-2 mt-2">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Menu SPBE</span>
                        </div>

                        <Link href="/?view=spbe" className={`nav-link ${isActive('/', { key: 'view', value: 'spbe' })}`}>
                            <i className="fas fa-file-alt"></i> Permohonan SPBE
                        </Link>
                        <Link href="/?view=persetujuanspbe" className={`nav-link ${isActive('/', { key: 'view', value: 'persetujuanspbe' })}`}>
                            <i className="fas fa-check-square"></i> Persetujuan SPBE
                        </Link>
                        <Link href="/?view=konfirmasispbekeluar" className={`nav-link ${isActive('/', { key: 'view', value: 'konfirmasispbekeluar' })}`} style={{ lineHeight: '1.2', height: 'auto' }}>
                            <div className="d-flex align-items-center">
                                <i className="fas fa-file-alt mt-1 me-2 flex-shrink-0"></i>
                                <span style={{ whiteSpace: 'normal', maxWidth: '190px', wordBreak: 'break-word' }}>Konfirmasi SPBE Keluar oleh Pengawas/Pengawal/Penyegel</span>
                            </div>
                        </Link>
                        <Link href="/?view=konfirmasispbemasuk" className={`nav-link ${isActive('/', { key: 'view', value: 'konfirmasispbemasuk' })}`} style={{ lineHeight: '1.2', height: 'auto' }}>
                            <div className="d-flex align-items-center">
                                <i className="fas fa-file-alt mt-1 me-2 flex-shrink-0"></i>
                                <span style={{ whiteSpace: 'normal', maxWidth: '190px', wordBreak: 'break-word' }}>Konfirmasi SPBE Masuk oleh Pengguna</span>
                            </div>
                        </Link>

                        <div className="nav-item px-3 mb-2 mt-4">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                        </div>
                        <Link href="/" className="nav-link">
                            <i className="fas fa-arrow-left"></i> Main Dashboard
                        </Link>
                    </>
                ) : ['spbi', 'persetujuanspbi', 'konfirmasispbimasuk', 'konfirmasispbikeluar'].includes(searchParams.get('view') || '') ? (
                    // SPBI SPECIFIC SIDEBAR
                    <>
                        <div className="nav-item px-3 mb-2 mt-2">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Menu SPBI</span>
                        </div>

                        <Link href="/?view=spbi" className={`nav-link ${isActive('/', { key: 'view', value: 'spbi' })}`}>
                            <i className="fas fa-file-alt"></i> Permohonan SPBI
                        </Link>
                        <Link href="/?view=persetujuanspbi" className={`nav-link ${isActive('/', { key: 'view', value: 'persetujuanspbi' })}`}>
                            <i className="fas fa-check-square"></i> Persetujuan SPBI
                        </Link>
                        <Link href="/?view=konfirmasispbikeluar" className={`nav-link ${isActive('/', { key: 'view', value: 'konfirmasispbikeluar' })}`} style={{ lineHeight: '1.2', height: 'auto' }}>
                            <div className="d-flex align-items-center">
                                <i className="fas fa-file-alt mt-1 me-2 flex-shrink-0"></i>
                                <span style={{ whiteSpace: 'normal', maxWidth: '190px', wordBreak: 'break-word' }}>Konfirmasi SPBI Keluar oleh Pengawas/Pengawal/Penyegel</span>
                            </div>
                        </Link>
                        <Link href="/?view=konfirmasispbimasuk" className={`nav-link ${isActive('/', { key: 'view', value: 'konfirmasispbimasuk' })}`} style={{ lineHeight: '1.2', height: 'auto' }}>
                            <div className="d-flex align-items-center">
                                <i className="fas fa-file-alt mt-1 me-2 flex-shrink-0"></i>
                                <span style={{ whiteSpace: 'normal', maxWidth: '190px', wordBreak: 'break-word' }}>Konfirmasi SPBI Masuk oleh Pengguna</span>
                            </div>
                        </Link>

                        <div className="nav-item px-3 mb-2 mt-4">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                        </div>
                        <Link href="/" className="nav-link">
                            <i className="fas fa-arrow-left"></i> Main Dashboard
                        </Link>
                    </>
                ) : ['kesehatan', 'biayakesehatan', 'daftarobat', 'donordarah', 'infors', 'hasilmcu', 'riwayatkacamata'].includes(searchParams.get('view') || '') ? (
                    // KESEHATAN SPECIFIC SIDEBAR
                    <>
                        <div className="nav-item px-3 mb-1 mt-1">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Kesehatan</span>
                        </div>

                        <Link href="/?view=kesehatan" className={`nav-link py-2 ${isActive('/', { key: 'view', value: 'kesehatan' })}`}>
                            <i className="fas fa-male me-2"></i> Biodata
                        </Link>
                        <Link href="/?view=biayakesehatan" className={`nav-link py-2 ${isActive('/', { key: 'view', value: 'biayakesehatan' })}`}>
                            <i className="fas fa-money-bill-wave me-2"></i> Biaya Kesehatan
                        </Link>
                        <Link href="/?view=daftarobat" className={`nav-link py-2 ${isActive('/', { key: 'view', value: 'daftarobat' })}`}>
                            <i className="fas fa-pills me-2"></i> Daftar Obat
                        </Link>
                        <Link href="/?view=donordarah" className={`nav-link py-2 ${isActive('/', { key: 'view', value: 'donordarah' })}`}>
                            <i className="fas fa-tint me-2"></i> Donor Darah
                        </Link>
                        <Link href="/?view=hasilmcu" className={`nav-link py-2 ${isActive('/', { key: 'view', value: 'hasilmcu' })}`}>
                            <i className="fas fa-heartbeat me-2"></i> Hasil MCU
                        </Link>
                        <Link href="/?view=infors" className={`nav-link py-2 ${isActive('/', { key: 'view', value: 'infors' })}`} style={{ lineHeight: '1.2' }}>
                            <div className="d-flex align-items-center">
                                <i className="fas fa-hospital me-2 flex-shrink-0"></i>
                                <span className="text-wrap">Info RS dan Klinik Provider</span>
                            </div>
                        </Link>
                        <Link href="/?view=riwayatkacamata" className={`nav-link py-2 ${isActive('/', { key: 'view', value: 'riwayatkacamata' })}`}>
                            <i className="fas fa-glasses me-2"></i> Riwayat Kacamata
                        </Link>

                        <div className="nav-item px-3 mb-1 mt-2">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                        </div>
                        <Link href="/" className="nav-link py-2">
                            <i className="fas fa-arrow-left"></i> Main Dashboard
                        </Link>
                    </>
                ) : ['transport', 'dpk', 'ppk'].includes(searchParams.get('view') || '') ? (
                    // TRANSPORT SPECIFIC SIDEBAR
                    <>
                        <div className="nav-item px-3 mb-1 mt-1">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Go Transport</span>
                        </div>
                        <Link href="/?view=dpk" className={`nav-link py-2 ${isActive('/', { key: 'view', value: 'dpk' })}`}>
                            <i className="fas fa-bus me-2"></i> Data Pemesanan Kendaraan
                        </Link>
                        <Link href="/?view=ppk" className={`nav-link py-2 ${isActive('/', { key: 'view', value: 'ppk' })}`}>
                            <i className="fas fa-check-square me-2"></i> Persetujuan Pemesanan Kendaraan
                        </Link>

                        <div className="nav-item px-3 mb-1 mt-2">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                        </div>
                        <Link href="/" className="nav-link py-2">
                            <i className="fas fa-arrow-left"></i> Main Dashboard
                        </Link>
                    </>
                ) : searchParams.get('view') === 'tasklist' ? (
                    // TASKLIST SPECIFIC SIDEBAR
                    <>
                        <div className="nav-item px-3 mb-1 mt-1">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Task Management</span>
                        </div>

                        <Link href="/?view=tasklist" className={`nav-link py-2 ${isActive('/', { key: 'view', value: 'tasklist' })}`}>
                            <i className="fas fa-columns me-2"></i> Tasklist Dashboard
                        </Link>
                        <div className="nav-item px-3 mb-1 mt-2">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                        </div>
                        <Link href="/" className="nav-link py-2">
                            <i className="fas fa-arrow-left"></i> Main Dashboard
                        </Link>
                    </>
                ) : searchParams.get('view') === 'health' ? (
                    // HEALTH SPECIFIC SIDEBAR
                    <>
                        <div className="nav-item px-3 mb-1 mt-1">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Health Monitoring</span>
                        </div>

                        <Link href="/?view=health" className={`nav-link py-2 ${isActive('/', { key: 'view', value: 'health' })}`}>
                            <i className="fas fa-notes-medical me-2"></i> Health Dashboard
                        </Link>

                        <div className="nav-item px-3 mb-1 mt-2">
                            <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                        </div>
                        <Link href="/" className="nav-link py-2">
                            <i className="fas fa-arrow-left"></i> Main Dashboard
                        </Link>
                    </>
                ) : (
                    // STANDARD SIDEBAR
                    <>
                        <Link href="/" className={`nav-link ${isActive('/')}`}>
                            <i className="fas fa-home"></i> Dashboard
                        </Link>

                        <Link href="/?view=profile" className={`nav-link ${isActive('/', { key: 'view', value: 'profile' })}`}>
                            <i className="fas fa-user"></i> Profile
                        </Link>

                        <Link href="/?view=agenda" className={`nav-link ${isActive('/', { key: 'view', value: 'agenda' })}`}>
                            <i className="fas fa-calendar-alt"></i> Agenda
                        </Link>
                        <Link href="/?view=organization" className={`nav-link ${isActive('/', { key: 'view', value: 'organization' })}`}>
                            <i className="fas fa-sitemap"></i> Organization
                        </Link>
                    </>
                )}
            </nav>
        </div>
    );
}
