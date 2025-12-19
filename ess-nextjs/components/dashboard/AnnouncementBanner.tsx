import React from 'react';

export default function AnnouncementBanner() {
    return (
        <div className="announcement-bar d-flex align-items-center shadow-sm overflow-hidden p-0 ps-3 flex-grow-1" style={{ height: 'fit-content' }}>
            <i className="fas fa-bullhorn me-3 fa-lg flex-shrink-0"></i>
            <div className="marquee-container w-100 py-2">
                <span className="marquee-content fw-normal text-dark">
                    <span className="fw-bold text-danger me-2">Pengumuman Penting!</span>
                    Semua karyawan harap mengisi survei kepuasan kerja sebelum tanggal 5 Desember 2025.
                </span>
            </div>
        </div>
    );
}
