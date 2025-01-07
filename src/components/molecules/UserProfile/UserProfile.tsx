import styled from "styled-components";
import { Avatar } from "../../atoms/Avatar/Avatar";
import { IconWrapper } from "../../atoms/Icon/Icon";
import { FiSettings, FiBell } from "react-icons/fi";

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledIconWrapper = styled(IconWrapper)`
  color: #8F9BBA;
  
  &:hover {
    color: #2B3674;
  }
`;

const StyledAvatar = styled(Avatar)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

export const UserProfile = () => {
  return (
    <ProfileContainer>
      <IconsContainer>
        <StyledIconWrapper>
          <FiSettings size={24} />
        </StyledIconWrapper>
        <StyledIconWrapper>
          <FiBell size={24} />
        </StyledIconWrapper>
      </IconsContainer>
      <StyledAvatar src="/path/to/avatar.jpg" alt="User avatar" />
    </ProfileContainer>
  );
}; 