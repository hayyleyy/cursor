import styled from 'styled-components';
import { 
  FiHome, 
  FiCreditCard, 
  FiFileText, 
  FiUser, 
  FiPieChart,
  FiSettings,
  FiHelpCircle
} from 'react-icons/fi';

const SidebarContainer = styled.aside`
  width: 250px;
  background: white;
  padding: 2rem 1rem;
  border-right: 1px solid #E9EDF7;

  @media (max-width: 768px) {
    width: 80px;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4318FF;
  margin-bottom: 2rem;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NavItem = styled.a<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 10px;
  color: ${({ active }) => active ? '#4318FF' : '#A3AED0'};
  background: ${({ active }) => active ? '#F4F7FE' : 'transparent'};
  text-decoration: none;
  transition: all 0.2s;
  
  &:hover {
    background: #F4F7FE;
    color: #4318FF;
  }
  
  @media (max-width: 768px) {
    justify-content: center;
    
    span {
      display: none;
    }
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo>BankDash.</Logo>
      <NavList>
        <NavItem href="#">
          <FiHome size={20} />
          <span>Dashboard</span>
        </NavItem>
        <NavItem href="#" active>
          <FiCreditCard size={20} />
          <span>Credit Cards</span>
        </NavItem>
        <NavItem href="#">
          <FiFileText size={20} />
          <span>Transactions</span>
        </NavItem>
        <NavItem href="#">
          <FiUser size={20} />
          <span>Accounts</span>
        </NavItem>
        <NavItem href="#">
          <FiPieChart size={20} />
          <span>Investments</span>
        </NavItem>
        <NavItem href="#">
          <FiSettings size={20} />
          <span>Settings</span>
        </NavItem>
        <NavItem href="#">
          <FiHelpCircle size={20} />
          <span>Help Center</span>
        </NavItem>
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar; 