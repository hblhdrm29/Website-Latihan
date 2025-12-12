"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'active' : '';
  };

  return (
    <div className="sidebar d-flex flex-column">
        <div className="logo-section d-flex align-items-center justify-content-center mb-4">
            {/* Ensure asset path is correct relative to public */}
            <img src="/assets/img/logo.png" alt="PERURI Logo" style={{ maxWidth: '100px', marginBottom: 0 }} />
        </div>
        
        <nav className="nav flex-column">
            <Link href="/" className={`nav-link ${isActive('/')}`}>
                <i className="fas fa-home"></i> Dashboard
            </Link>
            <Link href="/profil" className={`nav-link ${isActive('/profil')}`}>
                <i className="fas fa-user"></i> Profil
            </Link>
            <Link href="/agenda" className={`nav-link ${isActive('/agenda')}`}>
                <i className="fas fa-calendar-alt"></i> Agenda
            </Link>
            <Link href="/kehadiran" className={`nav-link ${isActive('/kehadiran')}`}>
                <i className="fas fa-user-clock"></i> Kehadiran
            </Link>
            <Link href="/lembur" className={`nav-link ${isActive('/lembur')}`}>
                <i className="fas fa-clock"></i> Lembur
            </Link>
            <Link href="/cuti" className={`nav-link ${isActive('/cuti')}`}>
                <i className="fas fa-plane-departure"></i> Cuti
            </Link>
            <Link href="/izin" className={`nav-link ${isActive('/izin')}`}>
                <i className="fas fa-envelope-open-text"></i> Izin
            </Link>
        </nav>
    </div>
  );
}
