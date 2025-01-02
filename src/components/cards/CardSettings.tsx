import styled from 'styled-components';

const SettingsContainer = styled.div`
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const SettingsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SettingItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 10px;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f8f9fd;
  }
`;

const IconWrapper = styled.div<{ bgColor: string }>`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SettingInfo = styled.div`
  flex: 1;
`;

const SettingTitle = styled.div`
  font-weight: 500;
  color: #2B3674;
`;

const SettingDescription = styled.div`
  font-size: 0.875rem;
  color: #A3AED0;
`;

const CardSettings = () => {
  const settings = [
    {
      title: 'Block Card',
      description: 'Instantly block your card',
      bgColor: '#FFE5D3',
      icon: '🔒'
    },
    {
      title: 'Change Pin Code',
      description: 'Choose another pin code',
      bgColor: '#E9EDF7',
      icon: '🔑'
    },
    // Add more settings as needed
  ];

  return (
    <SettingsContainer>
      <SettingsList>
        {settings.map((setting, index) => (
          <SettingItem key={index}>
            <IconWrapper bgColor={setting.bgColor}>
              {setting.icon}
            </IconWrapper>
            <SettingInfo>
              <SettingTitle>{setting.title}</SettingTitle>
              <SettingDescription>{setting.description}</SettingDescription>
            </SettingInfo>
          </SettingItem>
        ))}
      </SettingsList>
    </SettingsContainer>
  );
};

export default CardSettings; 