"use client";

import React from 'react';

export default function DPKView() {
    return (
        <div className="container-fluid px-3 pb-5">
            <h2 className="fw-bold mb-4" style={{ color: '#20288E' }}>Transport Dashboard</h2>
            <div className="alert alert-info border-0 shadow-sm rounded-4">
                <div className="d-flex align-items-center">
                    <i className="fas fa-bus fa-2x me-3"></i>
                    <div>
                        <h2 className="fw-bold mb-1" style={{ fontSize: '1.25rem' }}>Menu Transport</h2>
                        <p className="mb-0 small opacity-75">Silakan pilih menu di sidebar untuk melihat informasi kendaraan.</p>
                    </div>
                </div>
            </div>
            
            {/* Placeholder Content */}
             <div className="card border-0 shadow-sm rounded-4 mt-4">
                <div className="card-body p-5 text-center text-muted">
                    <i className="fas fa-car-side fa-3x mb-3 opacity-50"></i>
                    <h5>Transportasi & Kendaraan</h5>
                    <p>Informasi pemesanan dan persetujuan kendaraan akan muncul di sini.</p>
                </div>
            </div>
        </div>
    );
}
