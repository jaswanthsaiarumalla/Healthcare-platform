import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BarChart2, Users, LogOut } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';
import { useAuthStore } from '../../store/useAuthStore';
import './Sidebar.css';

export const Sidebar: React.FC = () => {
  const { isSidebarOpen } = useAppStore();
  const { logout } = useAuthStore();

  const navItems = [
    { icon: <Home size={20} />, label: 'Dashboard', path: '/' },
    { icon: <Users size={20} />, label: 'Patients', path: '/patients' },
    { icon: <BarChart2 size={20} />, label: 'Analytics', path: '/analytics' },
  ];

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'} glass-panel`}>
      <div className="sidebar-header">
        <div className="logo-icon">H</div>
        {isSidebarOpen && <h2 className="logo-text">HealthSync</h2>}
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            {isSidebarOpen && <span className="nav-label">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="nav-item text-danger" onClick={logout}>
          <span className="nav-icon"><LogOut size={20} /></span>
          {isSidebarOpen && <span className="nav-label">Logout</span>}
        </button>
      </div>
    </aside>
  );
};
