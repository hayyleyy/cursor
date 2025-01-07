import styled from "styled-components";
import { Avatar } from "../../atoms/Avatar/Avatar";
import { IconWrapper } from "../../atoms/Icon/Icon";
import { FiSettings, FiBell } from "react-icons/fi";

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const UserProfile = () => {
  return (
    <ProfileContainer>
      <IconsContainer>
        <IconWrapper>
          <FiSettings />
        </IconWrapper>
        <IconWrapper>
          <FiBell />
        </IconWrapper>
      </IconsContainer>
      <Avatar src="/path/to/avatar.jpg" alt="User avatar" />
    </ProfileContainer>
  );
}; 