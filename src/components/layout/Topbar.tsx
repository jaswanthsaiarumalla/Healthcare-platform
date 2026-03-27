import { Menu, Bell, Search, User as UserIcon } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';
import { useAuthStore } from '../../store/useAuthStore';
import { useServiceWorker } from '../../hooks/useServiceWorker';
import './Topbar.css';

export const Topbar: React.FC = () => {
  const { toggleSidebar, notificationsEnabled } = useAppStore();
  const { user } = useAuthStore();
  const { requestPermission, triggerMockNotification } = useServiceWorker();

  const handleNotificationClick = async () => {
    if (!notificationsEnabled) {
      const granted = await requestPermission();
      if (granted) {
        triggerMockNotification();
      }
    } else {
      triggerMockNotification();
    }
  };

  return (
    <header className="topbar glass-panel">
      <div className="topbar-left">
        <button className="icon-btn" onClick={toggleSidebar} aria-label="Toggle Sidebar">
          <Menu size={20} />
        </button>
        <div className="search-container hidden-mobile">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search patients or medical records..." className="search-input" />
        </div>
      </div>
      
      <div className="topbar-right">
        <button className="icon-btn notification-btn" onClick={handleNotificationClick} title="Trigger mock notification">
          <Bell size={20} />
          {notificationsEnabled && <span className="notification-badge"></span>}
        </button>
        
        <div className="user-profile">
          <div className="avatar">
            {user?.photoURL ? (
              <img src={user.photoURL} alt="User Avatar" />
            ) : (
              <UserIcon size={18} />
            )}
          </div>
          <div className="user-info hidden-mobile">
            <span className="user-name">{user?.displayName || 'Dr. Admin'}</span>
            <span className="user-role">Cardiologist</span>
          </div>
        </div>
      </div>
    </header>
  );
};
