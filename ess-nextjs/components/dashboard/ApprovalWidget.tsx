"use client";

import { useState } from 'react';

export default function ApprovalWidget() {
    // 'summary' = Tampilan awal (sebelum klik)
    // 'idle' = Tampilan setelah klik Tinjau (Header muncul, tapi konten belum dipilih)
    // 'list' = Tampilan daftar kategori (setelah klik Menunggu)
    // 'detail' = Tampilan detail item (setelah klik salah satu kategori)
    // 'rejected' = Tampilan ditolak
    const [viewMode, setViewMode] = useState<'summary' | 'idle' | 'list' | 'detail' | 'rejected'>('summary');
    const [selectedDetail, setSelectedDetail] = useState<string | null>(null);

    // Initial Data
    const [trainingData, setTrainingData] = useState([
        { id: '6796', name: 'AHMAD RAMADHAN', date: '4 Desember 2025', title: 'Cybersecurity Fundamentals' },
        { id: '7209', name: 'VITA SENJAWATI', date: '4 Desember 2025', title: 'Cloud Computing' },
        { id: '6798', name: 'BUDI SANTOSO', date: '5 Desember 2025', title: 'Data Analysis & Business Intelligence' },
        { id: '6800', name: 'SITI AMINAH', date: '6 Desember 2025', title: 'Public Speaking' },
        { id: '6802', name: 'RUDI HARYANTO', date: '7 Desember 2025', title: 'Full-Stack Web Development' },
    ]);

    const [perizinanData, setPerizinanData] = useState([
        { id: '7301', name: 'SITI AMINAH', date: '8 Desember 2025', title: 'Izin Sakit' }
    ]);

    const [cutiData, setCutiData] = useState([
        { id: '7305', name: 'BUDI SANTOSO', date: '10 Desember 2025', title: 'Cuti Tahunan (2 Hari)' }
    ]);

    const [lemburData, setLemburData] = useState([
        { id: '7310', name: 'AHMAD RAMADHAN', date: '5 Desember 2025', title: 'Lembur Project Deadline' }
    ]);

    const [rejectedData, setRejectedData] = useState<any[]>([
        { id: '7001', name: 'ANDI WIJAYA', date: '2 Desember 2025', title: 'Izin Pulang Cepat', sourceCategory: 'Perizinan' }
    ]);

    // Calculate pending stats dynamically
    const pendingCount = trainingData.length + perizinanData.length + cutiData.length + lemburData.length;

    const categories = [
        { id: 'pelatihan', label: 'Usulan Pelatihan', count: trainingData.length },
        { id: 'perizinan', label: 'Perizinan', count: perizinanData.length },
        { id: 'cuti', label: 'Cuti', count: cutiData.length },
        { id: 'lembur', label: 'Lembur', count: lemburData.length },
    ];

    const getDetailData = () => {
        switch (selectedDetail) {
            case 'Usulan Pelatihan': return trainingData;
            case 'Perizinan': return perizinanData;
            case 'Cuti': return cutiData;
            case 'Lembur': return lemburData;
            default: return [];
        }
    };

    const handleApprove = (item: any) => {

        if (selectedDetail === 'Usulan Pelatihan') setTrainingData(prev => prev.filter(i => i.id !== item.id));
        else if (selectedDetail === 'Perizinan') setPerizinanData(prev => prev.filter(i => i.id !== item.id));
        else if (selectedDetail === 'Cuti') setCutiData(prev => prev.filter(i => i.id !== item.id));
        else if (selectedDetail === 'Lembur') setLemburData(prev => prev.filter(i => i.id !== item.id));
    };

    const handleReject = (item: any) => {
        const rejectedItem = { ...item, sourceCategory: selectedDetail };
        setRejectedData(prev => [...prev, rejectedItem]);

        if (selectedDetail === 'Usulan Pelatihan') setTrainingData(prev => prev.filter(i => i.id !== item.id));
        else if (selectedDetail === 'Perizinan') setPerizinanData(prev => prev.filter(i => i.id !== item.id));
        else if (selectedDetail === 'Cuti') setCutiData(prev => prev.filter(i => i.id !== item.id));
        else if (selectedDetail === 'Lembur') setLemburData(prev => prev.filter(i => i.id !== item.id));
    };

    const handleCategoryClick = (id: string) => {
        if (id === 'pelatihan') setSelectedDetail('Usulan Pelatihan');
        else if (id === 'perizinan') setSelectedDetail('Perizinan');
        else if (id === 'cuti') setSelectedDetail('Cuti');
        else if (id === 'lembur') setSelectedDetail('Lembur');
        setViewMode('detail');
    };

    const handleBack = () => {
        if (viewMode === 'detail') {
            setViewMode('list');
        } else if (viewMode === 'list' || viewMode === 'rejected') {
            setViewMode('idle');
        } else if (viewMode === 'idle') {
            setViewMode('summary');
        }
    };

    return (
        <div className="card border-0 rounded-4 overflow-hidden h-100 d-flex flex-column" style={{ backgroundColor: '#f8f9fa' }}>
            
            {/* 1. Header Logic */}
            {viewMode !== 'summary' && (
                <div className="px-3 py-2 border-bottom d-flex flex-column gap-1 animate__animated animate__fadeInDown">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-2">
                            <button 
                                onClick={handleBack} 
                                className="btn btn-light btn-sm rounded-circle d-flex align-items-center justify-content-center p-0 hover-shadow-sm transition-all" 
                                style={{ width: '32px', height: '32px' }}
                            >
                                <i className="fas fa-arrow-left text-dark" style={{ fontSize: '0.9rem' }}></i>
                            </button>
                            <div>
                                <h6 className="fw-bold text-dark mb-0" style={{ fontSize: '0.85rem' }}>Pusat Persetujuan</h6>
                                <span className="text-secondary small d-block" style={{ fontSize: '0.65rem', lineHeight: 1 }}>Kelola permintaan</span>
                            </div>
                        </div>
                        
                        {/* Exit Button - Closed to summary directly */}
                        <button onClick={() => setViewMode('summary')} className="btn btn-sm btn-light rounded-circle shadow-sm" style={{ width: '28px', height: '28px' }}>
                            <i className="fas fa-times text-secondary" style={{ fontSize: '0.8rem' }}></i>
                        </button>
                    </div>

                    {/* Segmented Pill Toggle - Hide in Detail View */}
                    {viewMode !== 'detail' && (
                        <div className="p-1 bg-light rounded-pill d-flex position-relative border mt-1">
                            <button 
                                className={`flex-fill btn btn-sm rounded-pill fw-bold border-0 transition-all hover-text-blue ${viewMode === 'list' ? 'bg-white shadow-sm text-dark' : 'text-secondary'}`}
                                onClick={() => setViewMode('list')}
                                style={{ fontSize: '0.75rem', zIndex: 1, padding: '2px 0' }}
                            >
                                Menunggu <span className="ms-1 opacity-75">({pendingCount})</span>
                            </button>
                            <button 
                                className={`flex-fill btn btn-sm rounded-pill fw-bold border-0 transition-all hover-text-red ${viewMode === 'rejected' ? 'bg-white shadow-sm text-danger' : 'text-secondary'}`}
                                onClick={() => setViewMode('rejected')}
                                style={{ fontSize: '0.75rem', zIndex: 1, padding: '2px 0' }}
                            >
                                Ditolak <span className={`ms-1 ${viewMode === 'rejected' ? 'opacity-100' : 'opacity-75'}`}>({rejectedData.length})</span>
                            </button>
                        </div>
                    )}
                </div>
            )}

            {/* 2. Content Body */}
            <div className="flex-grow-1 p-3 overflow-auto custom-scrollbar position-relative">
                
                {/* VIEW A : (Tampilan Awal Sebelum Klik) */}
                {viewMode === 'summary' && (
                    <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center animate__animated animate__fadeIn">
                        <div className="position-relative mb-2 group">
                            <div className="bg-primary bg-opacity-10 rounded-circle p-3 position-relative z-1 transition-all">
                                <i className="fas fa-bell text-primary" style={{ fontSize: '1.5rem' }}></i>
                            </div>
                            {pendingCount > 0 && (
                                <div className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-2 border-white shadow-sm z-2 px-2 py-1 animate__animated animate__bounceIn" style={{ fontSize: '0.75rem' }}>
                                    {pendingCount}
                                </div>
                            )}
                        </div>
                        <h5 className="fw-bold text-dark mb-1" style={{ fontSize: '1rem' }}>Halo, Super Admin!</h5>
                        <p className="text-secondary small px-3 mb-3" style={{ fontSize: '0.75rem' }}>
                            Anda memiliki <span className="fw-bold text-dark">{pendingCount} persetujuan baru</span>.
                        </p>
                        <button 
                            className="btn btn-sm btn-primary rounded-pill px-3 py-1 fw-semibold shadow-sm hover-shadow-md transition-all d-flex align-items-center gap-2"
                            onClick={() => setViewMode('idle')}
                            style={{ fontSize: '0.8rem' }}
                            suppressHydrationWarning
                        >
                            <span>Tinjau Sekarang</span>
                            <i className="fas fa-arrow-right" style={{ fontSize: '0.7rem' }}></i>
                        </button>
                    </div>
                )}

                {/* VIEW B: (Tampilan setelah Tinjau Sekarang tapi belum pilih tab) */}
                {viewMode === 'idle' && (
                    <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center text-secondary opacity-75 animate__animated animate__fadeIn">
                         <i className="fas fa-hand-pointer mb-2" style={{ fontSize: '1.5rem' }}></i>
                         <p className="small mb-0">Silakan pilih status di atas<br/>untuk melihat data.</p>
                    </div>
                )}

                {/* VIEW C: (Categories) */}
                {viewMode === 'list' && (
                     <div className="d-flex flex-column gap-3 animate__animated animate__fadeInUp">
                         <div className="d-flex justify-content-between align-items-center px-1">
                             <span className="text-uppercase fw-bold text-dark" style={{ fontSize: '0.8rem' }}>KATEGORI PERSETUJUAN</span>
                         </div>
                        {categories.map((cat, idx) => (
                            <div 
                                key={idx} 
                                className="group position-relative p-2 rounded-3 border hover-shadow-md transition-all cursor-pointer bg-white"
                                style={{ transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
                                onClick={() => handleCategoryClick(cat.id)}
                            >
                                <div className="d-flex align-items-center justify-content-between">
                                    <h6 className="fw-bold text-dark text-uppercase mb-0" style={{ fontSize: '0.8rem' }}>{cat.label}</h6>
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="text-secondary" style={{ fontSize: '0.7rem' }}>{cat.count} Permintaan</span>
                                        <div className="bg-light rounded-circle d-flex align-items-center justify-content-center text-secondary arrow-hover-effect transition-all cursor-pointer" style={{ width: '32px', height: '32px' }}>
                                            <i className="fas fa-chevron-right" style={{ fontSize: '0.75rem' }}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                     </div>
                )}

                {/* VIEW D: (Dynamic based on selection) */}
                {viewMode === 'detail' && (
                    <div className="d-flex flex-column h-100 animate__animated animate__fadeInRight">
                        {/* Title Context */}
                        <div className="d-flex justify-content-between align-items-center mb-2 px-1">
                             <span className="fw-bold text-dark text-uppercase" style={{ fontSize: '0.9rem' }}>
                                 {selectedDetail}
                             </span>
                             <span className="badge bg-white text-primary rounded-pill shadow-sm" style={{ fontSize: '0.7rem' }}>
                                 {getDetailData().length}
                             </span>
                        </div>

                        {/* Scrollable Container */}
                        <div className="flex-grow-1 overflow-auto custom-scrollbar d-flex flex-column gap-2 pe-1" style={{ maxHeight: '250px' }}>
                            {getDetailData().length > 0 ? (
                                getDetailData().map((item, index) => (
                                    <div key={index} className="p-2 rounded-3 bg-white border shadow-sm hover-shadow-md transition-all cursor-default">
                                        <div className="d-flex justify-content-between align-items-start mb-1">
                                            <div>
                                                <div className="d-flex align-items-center gap-2 mb-1">
                                                    <span className="badge bg-dark text-white rounded-pill" style={{ fontSize: '0.65rem' }}>
                                                        {item.id}
                                                    </span>
                                                    <span className="text-secondary" style={{ fontSize: '0.65rem' }}>
                                                        {item.date}
                                                    </span>
                                                </div>
                                                <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.8rem' }}>
                                                    {item.name}
                                                </h6>
                                            </div>
                                            {/* Action Buttons */}
                                            <div className="d-flex gap-1">
                                                <button 
                                                    className="btn btn-sm btn-success rounded-circle shadow-sm d-flex align-items-center justify-content-center p-0" 
                                                    style={{ width: '28px', height: '28px' }}
                                                    onClick={(e) => { e.stopPropagation(); handleApprove(item); }}
                                                    title="Setujui"
                                                >
                                                    <i className="fas fa-check text-white" style={{ fontSize: '0.7rem' }}></i>
                                                </button>
                                                <button 
                                                    className="btn btn-sm btn-danger rounded-circle shadow-sm d-flex align-items-center justify-content-center p-0" 
                                                    style={{ width: '28px', height: '28px' }}
                                                    onClick={(e) => { e.stopPropagation(); handleReject(item); }}
                                                    title="Tolak"
                                                >
                                                    <i className="fas fa-times text-white" style={{ fontSize: '0.7rem' }}></i>
                                                </button>
                                            </div>
                                        </div>
                                        
                                        <div className="p-1 bg-light rounded text-secondary d-flex align-items-center gap-2" style={{ fontSize: '0.7rem' }}>
                                            <i className="fas fa-book-reader text-primary visually-hidden"></i>
                                            <span className="text-truncate">{item.title}</span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-5 opacity-75">
                                    <i className="fas fa-check-circle mb-2 text-success" style={{ fontSize: '1.5rem' }}></i>
                                    <p className="small text-secondary">Semua permintaan telah selesai ditinjau.</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* VIEW E: REJECTED */}
                {viewMode === 'rejected' && (
                    <div className="flex-grow-1 overflow-auto custom-scrollbar animate__animated animate__fadeIn">
                         {rejectedData.length > 0 ? (
                            <div className="d-flex flex-column gap-2 pe-1">
                                <div className="d-flex justify-content-between align-items-center px-1 mb-1">
                                     <span className="text-uppercase fw-bold text-danger" style={{ fontSize: '0.8rem' }}>DAFTAR DITOLAK</span>
                                </div>
                                {rejectedData.map((item, index) => (
                                    <div key={index} className="p-2 rounded-3 bg-white border border-danger-subtle shadow-sm hover-shadow-md transition-all">
                                        <div className="d-flex justify-content-between align-items-center mb-1">
                                            <div className="d-flex align-items-center gap-1">
                                                <span className="badge bg-dark text-white rounded-pill" style={{ fontSize: '0.65rem' }}>
                                                    {item.id}
                                                </span>
                                                <span className="badge bg-danger text-white rounded-pill" style={{ fontSize: '0.65rem' }}>
                                                    {item.sourceCategory}
                                                </span>
                                            </div>
                                            <span className="text-secondary" style={{ fontSize: '0.65rem' }}>
                                                {item.date}
                                            </span>
                                        </div>
                                        <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.8rem' }}>
                                            {item.name}
                                        </h6>
                                        <div className="p-1 bg-danger bg-opacity-10 rounded text-danger d-flex align-items-center gap-2" style={{ fontSize: '0.7rem' }}>
                                            <i className="fas fa-ban text-danger"></i>
                                            <span className="text-truncate">{item.title}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                         ) : (
                            <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center py-4">
                                <div className="mb-3 position-relative">
                                    <div className="bg-danger-subtle rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                        <i className="fas fa-check-double text-danger opacity-50 fs-2"></i>
                                    </div>
                                    <div className="position-absolute top-0 end-0 bg-white rounded-circle p-1 shadow-sm">
                                        <i className="fas fa-times-circle text-danger" style={{ fontSize: '1rem' }}></i>
                                    </div>
                                </div>
                                <h6 className="fw-bold text-dark mb-1">Bersih!</h6>
                                <p className="text-secondary small px-4 mb-0">
                                    Tidak ada data penolakan.
                                </p>
                            </div>
                         )}
                    </div>
                )}
            </div>
        </div>
    );
}
