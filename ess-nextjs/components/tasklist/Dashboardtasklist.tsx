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
        // Add one more example for visual balance if user allows "modify"
        { 
            id: 2, 
            title: 'Review System Logs', 
            description: 'Check for unauthorized access attempts', 
            createdBy: 'SYSTEM', 
            createdAt: '2024-10-02 08:00:00',
            status: 'Completed'
        },
    ];

    return (
        <div className="container-fluid px-4 py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bold mb-4" style={{ color: '#20288E' }}>Tasklist Dashboard</h3>
                 <div className="input-group" style={{maxWidth: '250px'}}>
                    <span className="input-group-text bg-white border-end-0"><i className="fas fa-search text-muted"></i></span>
                    <input type="text" className="form-control border-start-0 ps-0" placeholder="Search tasks..." />
                </div>
            </div>

            <div className="card border-0 shadow-sm rounded-4">
                <div className="table-responsive">
                    <table className="table align-middle mb-0 table-hover">
                        <thead className="bg-light border-bottom">
                            <tr>
                                <th className="px-4 py-3 text-muted small fw-bold text-uppercase border-0">Name</th>
                                <th className="py-3 text-muted small fw-bold text-uppercase border-0">Description</th>
                                <th className="py-3 text-muted small fw-bold text-uppercase border-0">Created By</th>
                                <th className="py-3 text-muted small fw-bold text-uppercase border-0">Created At</th>
                                <th className="py-3 text-muted small fw-bold text-uppercase border-0">Status</th>
                                <th className="px-4 py-3 text-end text-muted small fw-bold text-uppercase border-0">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task) => (
                                <tr key={task.id}>
                                    <td className="px-4 py-3 border-bottom-0">
                                        <span className="fw-bold text-dark">{task.title}</span>
                                    </td>
                                    <td className="py-3 border-bottom-0">
                                        <span className="text-muted small text-wrap" style={{ maxWidth: '300px', display: 'block' }}>{task.description}</span>
                                    </td>
                                    <td className="py-3 border-bottom-0">
                                        <div className="d-flex align-items-center">
                                            <div className="rounded-circle bg-light text-primary d-flex align-items-center justify-content-center fw-bold small me-2 border" style={{ width: '30px', height: '30px' }}>
                                                {task.createdBy.charAt(0)}
                                            </div>
                                            <span className="text-dark small fw-medium text-uppercase">{task.createdBy}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 border-bottom-0">
                                        <span className="text-muted small">{task.createdAt}</span>
                                    </td>
                                    <td className="py-3 border-bottom-0">
                                        <span className={`badge rounded-pill bg-${task.status === 'Completed' ? 'success' : 'warning'}-subtle text-${task.status === 'Completed' ? 'success' : 'warning'} border border-${task.status === 'Completed' ? 'success' : 'warning'}-subtle`}>
                                            {task.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 border-bottom-0 text-end">
                                        <button className="btn btn-sm btn-icon btn-light rounded-circle text-muted">
                                            <i className="fas fa-ellipsis-v"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
