"use client";

import React from 'react';

export default function Dashboardtasklist() {
    const tasks = [
        { 
            id: 1, 
            title: 'Additional Task', 
            description: 'Additional Task yg ditambahkan pada tanggal 2024-10-01', 
            createdBy: 'MOHAMAD ALDA', 
            createdAt: '2024-10-01 12:25:50',
            status: 'Pending'
        },
    ];

    return (
        <div className="container-fluid p-0">
             {/* Header with Add Button */}
            <div className="d-flex align-items-center gap-3 mb-4">
                <h3 className="fw-bold mb-0" style={{ color: '#20288E' }}>Tasklist Dashboard</h3>
            </div>

            {/* Filter Section */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4">
                <div className="card-body p-3">
                     <div className="row g-2 align-items-end justify-content-between" style={{ fontSize: '0.85rem' }}>
                         <div className="col-md-3">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Name</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 shadow-sm bg-light rounded-pill px-3 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Created By</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 shadow-sm bg-light rounded-pill px-3 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                         <div className="col-md-3">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Status</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 shadow-sm bg-light rounded-pill px-3 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                         <div className="col-md-3">
                             <button className="btn btn-sm btn-light border-0 border-secondary shadow-sm rounded-pill px-0 w-100 fw-bold text-secondary" style={{ fontSize: '0.8rem' }}>
                                Filter <i className="fas fa-filter ms-1 small"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Support Table */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="card-body p-0">
                    <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <table className="table table-hover mb-0 text-start align-middle" style={{ fontSize: '0.85rem' }}>
                            <thead className="bg-light" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                                <tr>
                                    <th className="py-3 border-end fw-bold text-center ps-4" style={{ width: '50px' }}>No</th>
                                    <th className="py-3 border-end fw-bold ps-3">Name</th>
                                    <th className="py-3 border-end fw-bold ps-3">Description</th>
                                    <th className="py-3 border-end fw-bold ps-3">Created By</th>
                                    <th className="py-3 border-end fw-bold ps-3">Created At</th>
                                    <th className="py-3 border-end fw-bold ps-3">Status</th>
                                    <th className="py-3 fw-bold text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-transparent">
                                {tasks.map((task, idx) => (
                                    <tr key={task.id} className="border-bottom">
                                        <td className="py-4 border-end text-center">{idx + 1}</td>
                                        <td className="py-4 border-end ps-3 fw-bold">{task.title}</td>
                                        <td className="py-4 border-end ps-3" style={{ maxWidth: '300px' }}>
                                            <div className="text-wrap">{task.description}</div>
                                        </td>
                                        <td className="py-4 border-end ps-3">
                                            <div className="d-flex align-items-center">
                                                <div className="rounded-circle bg-light text-primary d-flex align-items-center justify-content-center fw-bold small me-2 border" style={{ width: '30px', height: '30px' }}>
                                                    {task.createdBy.charAt(0)}
                                                </div>
                                                <span className="text-dark small fw-medium text-uppercase">{task.createdBy}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 border-end ps-3">{task.createdAt}</td>
                                        <td className="py-4 border-end ps-3">
                                            <span className={`badge rounded-pill ${task.status === 'Completed' ? 'bg-success' : 'bg-warning text-dark'}`}>
                                                {task.status}
                                            </span>
                                        </td>
                                        <td className="py-4 text-center">
                                             <button className="btn btn-sm btn-outline-secondary rounded-1" style={{ fontSize: '0.75rem' }}>Detail</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
