"use client";

import React from 'react';

// Types for the Org Chart Nodes
interface OrgNodeProps {
    name: string;
    role: string;
    image: string;
    isOnline?: boolean;
    subordinates?: React.ReactNode;
    color?: string; // primary, success, warning, info
}

const OrgCard = ({ name, role, image, isOnline, color = "primary" }: Omit<OrgNodeProps, 'subordinates'>) => (
    <div 
        className={`card border-0 shadow-sm position-relative mb-1 org-card-hover overflow-hidden`} 
        style={{ 
            width: '140px', 
            borderRadius: '8px', 
            zIndex: 2,
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.5)'
        }}
    >
        {/* Left Accent Bar */}
        <div className={`position-absolute top-0 start-0 bottom-0 bg-${color}`} style={{ width: '3px' }}></div>

        <div className={`card-body p-2 d-flex align-items-center gap-1 text-start`}>
            {/* Image Container */}
            <div className="position-relative flex-shrink-0 ms-1">
                <div className={`rounded-circle bg-${color} bg-opacity-10 d-flex align-items-center justify-content-center shadow-sm`} style={{ width: '28px', height: '28px' }}>
                    <i className={`fas fa-user text-${color}`} style={{ fontSize: '0.7rem' }}></i>
                </div>
                {isOnline && (
                    <span 
                        className="position-absolute bottom-0 end-0 bg-success border border-1 border-white rounded-circle shadow-sm"
                        style={{ width: '8px', height: '8px', padding: 0, right: '0px', bottom: '0px' }}
                    ></span>
                )}
            </div>

            {/* Text Content */}
            <div className="d-flex flex-column overflow-hidden" style={{ minWidth: 0 }}>
                <h6 className="fw-bold text-dark mb-0 text-truncate" style={{ fontSize: '0.65rem' }}>{name}</h6>
                <p className="text-muted lh-1 text-truncate mb-0" style={{ fontSize: '0.55rem', letterSpacing: '0.1px' }}>{role}</p>
            </div>
        </div>
    </div>
);

const OrgNode = ({ name, role, image, isOnline, subordinates, color }: OrgNodeProps) => {
    return (
        <div className="d-flex flex-column align-items-center mx-1 mt-2">
             {/* The Card */}
            <OrgCard name={name} role={role} image={image} isOnline={isOnline} color={color} />
            
            {/* The Lines & Children */}
            {subordinates && (
                <div className="d-flex flex-column align-items-center w-100">
                    {/* Vertical Line Down from Parent */}
                    <div className="line-down"></div>
                    
                    {/* Children Container */}
                    <div className="d-flex justify-content-center align-items-start pt-2 position-relative">
                        {/* Horizontal Line logic */}
                         {React.Children.map(subordinates, (child, index) => {
                             const childCount = React.Children.count(subordinates);
                             const isFirst = index === 0;
                             const isLast = index === childCount - 1;
                             const isOnly = childCount === 1;

                             return (
                                <div className="d-flex flex-column align-items-center position-relative px-1 mt-0">
                                     {/* Horizontal Connector Line (Top) */}
                                     {!isOnly && (
                                         <>
                                            <div 
                                                className="position-absolute bg-secondary bg-opacity-25"
                                                style={{
                                                    top: '-10px', // Matches line-down height/padding
                                                    height: '1px',
                                                    left: isFirst ? '50%' : '0',
                                                    right: isLast ? '50%' : '0',
                                                    width: isFirst || isLast ? '50%' : '100%'
                                                }}
                                            ></div>
                                         </>
                                     )}
                                     
                                     {/* Vertical Line Up to Horizontal Connector */}
                                    <div 
                                        className="position-absolute bg-secondary bg-opacity-25"
                                        style={{
                                            top: '-10px',
                                            height: '10px',
                                            width: '1px',
                                            left: '50%',
                                            transform: 'translateX(-50%)'
                                        }}
                                    ></div>
                                    
                                    {child}
                                </div>
                             );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default function OrganizationView() {
    const [zoom, setZoom] = React.useState(1);

    const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.1, 2));
    const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.1, 0.5));
    const handleResetZoom = () => setZoom(1);

    return (
        <div className="container-fluid px-3 pb-5">
            <style jsx global>{`
                .line-down {
                    width: 1px;
                    height: 10px;
                    background-color: rgba(33, 37, 41, 0.25);
                }
                .org-card-hover {
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .org-card-hover:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 .25rem .5rem rgba(0,0,0,.1)!important;
                }
            `}</style>
            
            {/* Header */}
            <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                <div className="d-flex align-items-center gap-2">
                    <div>
                        <h4 className="fw-bold mb-0" style={{ color: '#20288E' }}>Organization Structure</h4>
                        <p className="text-muted mb-0 small" style={{ fontSize: '0.75rem' }}>Departemen Pengembangan (Depbang)</p>
                    </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                     <span className="badge bg-white text-success border border-success border-opacity-25 shadow-sm px-2 py-1 rounded-pill ms-2" style={{ fontSize: '0.7rem' }}>
                        <i className="fas fa-circle me-1" style={{ fontSize: '0.4rem' }}></i> Online
                    </span>
                    <button className="btn btn-sm btn-light rounded-circle shadow-sm border" style={{ width: '32px', height: '32px' }}>
                        <i className="fas fa-search" style={{ fontSize: '0.8rem' }}></i>
                    </button>
                    <button className="btn btn-sm btn-primary rounded-pill shadow-sm px-3 fw-medium" style={{ backgroundColor: '#20288E', fontSize: '0.8rem' }}>
                        <i className="fas fa-plus me-1"></i> Add Member
                    </button>
                </div>
            </div>
            {/* Filter Bar */}
            <div className="d-flex justify-content-start mb-4">
                <div className="bg-white shadow-sm rounded-pill d-inline-flex align-items-center gap-3 px-3 py-1 border" style={{ fontSize: '0.75rem' }}>
                    <div className="d-flex align-items-center gap-2 text-muted pe-2 border-end">
                        <i className="fas fa-filter text-secondary" style={{ fontSize: '0.7rem' }}></i>
                        <span className="fw-bold small text-uppercase" style={{ letterSpacing: '0.5px' }}>FILTER</span>
                    </div>
                    
                    {/* Department Filter */}
                    <div className="dropdown">
                        <button className="btn btn-sm border-0 bg-transparent dropdown-toggle key-nav-item d-flex align-items-center gap-1 p-0 text-dark" type="button" data-bs-toggle="dropdown" style={{ fontSize: '0.75rem' }}>
                            <span className="text-muted fw-normal">Dept:</span> <span className="fw-bold">All</span>
                        </button>
                        <ul className="dropdown-menu shadow-sm border-0 rounded-3 mt-2" style={{ fontSize: '0.75rem' }}>
                            <li><a className="dropdown-item active" href="#">All</a></li>
                            <li><a className="dropdown-item" href="#">Depbang</a></li>
                        </ul>
                    </div>

                    {/* Title Filter */}
                    <div className="dropdown">
                        <button className="btn btn-sm border-0 bg-transparent dropdown-toggle key-nav-item d-flex align-items-center gap-1 p-0 text-dark" type="button" data-bs-toggle="dropdown" style={{ fontSize: '0.75rem' }}>
                             <span className="text-muted fw-normal">Title:</span> <span className="fw-bold">All</span>
                        </button>
                        <ul className="dropdown-menu shadow-sm border-0 rounded-3 mt-2" style={{ fontSize: '0.75rem' }}>
                            <li><a className="dropdown-item active" href="#">All</a></li>
                            <li><a className="dropdown-item" href="#">Divisi</a></li>
                             <li><a className="dropdown-item" href="#">Seksi</a></li>
                        </ul>
                    </div>

                    <div className="border-start ps-2 ms-1">
                        <button onClick={() => {}} className="btn btn-link btn-sm p-0 text-muted hover-text-primary text-decoration-none" title="Reset Filters">
                            <i className="fas fa-redo-alt" style={{ fontSize: '0.7rem' }}></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="overflow-auto pb-5 custom-scrollbar" style={{ height: 'calc(100vh - 250px)' }}>
                <div style={{ 
                    width: 'max-content', 
                    minWidth: '100%', 
                    padding: '20px', 
                    margin: '0 auto',
                    transform: `scale(${zoom})`,
                    transformOrigin: 'top center',
                    transition: 'transform 0.2s ease-out'
                }}>
                    <div className="d-flex justify-content-center">
                    {/*Depbang */}
                    <OrgNode 
                        name="Bowo Santoso" 
                        role="Kepala Depbang" 
                        image=""
                        isOnline={true}
                        color="primary"
                        subordinates={[
                            //Divisi Enterprise
                            <OrgNode 
                                key="ent"
                                name="Siti Rahma" 
                                role="Divisi Enterprise" 
                                image=""
                                isOnline={true}
                                color="success"
                                subordinates={[
                                    <OrgNode 
                                        key="ent-sect-1"
                                        name="Andi Pratama" 
                                        role="Seksi Enterprise " 
                                        image=""
                                        isOnline={false}
                                        color="secondary"
                                    />,
                                    <OrgNode 
                                        key="ent-sect-2"
                                        name="Budi Utomo" 
                                        role="Seksi Enterprise " 
                                        image=""
                                        isOnline={true}
                                        color="secondary"
                                    />,
                                    <OrgNode 
                                        key="ent-sect-3"
                                        name="Citra Lestari" 
                                        role="Seksi Enterprise " 
                                        image=""
                                        isOnline={false}
                                        color="secondary"
                                    />
                                ]}
                            />,

                            // Divisi Internal
                            <OrgNode 
                                key="int"
                                name="Rina Wati" 
                                role="Divisi Internal" 
                                image=""
                                isOnline={true}
                                color="warning"
                                subordinates={[
                                    <OrgNode 
                                        key="int-sect-1"
                                        name="Dedi Kurniawan" 
                                        role="Seksi Internal " 
                                        image=""
                                        isOnline={true}
                                        color="secondary"
                                    />,
                                    <OrgNode 
                                        key="int-sect-2"
                                        name="Eko Prasetyo" 
                                        role="Seksi Internal " 
                                        image=""
                                        isOnline={false}
                                        color="secondary"
                                    />,
                                    <OrgNode 
                                        key="int-sect-3"
                                        name="Fina Aulia" 
                                        role="Seksi Internal " 
                                        image=""
                                        isOnline={true}
                                        color="secondary"
                                    />
                                ]}
                            />,

                            // Divisi Infrastruktur
                            <OrgNode 
                                key="inf"
                                name="Tono Gunawan" 
                                role="Divisi Infrastruktur" 
                                image=""
                                isOnline={false}
                                color="info"
                                subordinates={[
                                    <OrgNode 
                                        key="inf-sect-1"
                                        name="Maya Putri" 
                                        role="Seksi Infrastruktur " 
                                        image=""
                                        isOnline={false}
                                        color="secondary"
                                    />,
                                    <OrgNode 
                                        key="inf-sect-2"
                                        name="Hadi Nugroho" 
                                        role="Seksi Infrastruktur " 
                                        image=""
                                        isOnline={true}
                                        color="secondary"
                                    />,
                                    <OrgNode 
                                        key="inf-sect-3"
                                        name="Indah Permata" 
                                        role="Seksi Infrastruktur " 
                                        image=""
                                        isOnline={false}
                                        color="secondary"
                                    />
                                ]}
                            />
                        ]}
                    />
                </div>
            </div>
            </div>

            {/* Floating Zoom Controls */}
            <div className="position-fixed shadow-sm bg-white rounded-3 d-flex flex-column p-1 border" 
                style={{ 
                    bottom: '30px', 
                    left: '280px', // Adjusted to not overlap sidebar
                    zIndex: 1000,
                    width: '40px'
                }}>
                <button onClick={handleZoomIn} className="btn btn-light btn-sm border-0 d-flex align-items-center justify-content-center" style={{ height: '36px' }} title="Zoom In">
                    <i className="fas fa-plus text-secondary" style={{ fontSize: '0.9rem' }}></i>
                </button>
                <button onClick={handleZoomOut} className="btn btn-light btn-sm border-0 d-flex align-items-center justify-content-center" style={{ height: '36px' }} title="Zoom Out">
                    <i className="fas fa-minus text-secondary" style={{ fontSize: '0.9rem' }}></i>
                </button>
                <div className="border-top my-1"></div>
                <button onClick={handleResetZoom} className="btn btn-light btn-sm border-0 d-flex align-items-center justify-content-center" style={{ height: '36px' }} title="Reset View">
                    <i className="fas fa-compress-arrows-alt text-secondary" style={{ fontSize: '0.9rem' }}></i>
                </button>
            </div>
        </div>
    );
}
