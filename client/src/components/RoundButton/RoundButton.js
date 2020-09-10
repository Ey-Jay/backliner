import React from 'react';

import { Bell, Profile, Moon, Search, Plus, LogOff } from './Icons.style';
import { Button } from './RoundButton.style';

const RoundButton = ({ icon, color, onClick }) => {
  const getIcon = (value) => {
    switch (value) {
      case 'bell':
        return <Bell />;
      case 'profile':
        return <Profile />;
      case 'moon':
        return <Moon />;
      case 'search':
        return <Search />;
      case 'plus':
        return <Plus />;
      case 'logoff':
        return <LogOff />;
      default:
        return '🍑';
    }
  };

  return (
    <Button onClick={onClick} color={color}>
      {getIcon(icon)}
    </Button>
  );
};

export default RoundButton;
