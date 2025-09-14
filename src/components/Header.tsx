import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(15, 15, 35, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 2rem;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, #8a2be2, #ff69b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.li)`
  cursor: pointer;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #8a2be2;
  }
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(45deg, #8a2be2, #ff69b4);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    width: 25px;
    height: 3px;
    background: white;
    transition: 0.3s;
  }
`;

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        background: scrolled 
          ? 'rgba(15, 15, 35, 0.98)' 
          : 'rgba(15, 15, 35, 0.95)'
      }}
    >
      <Nav>
        <Logo
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('hero')}
        >
          Portfolio
        </Logo>

        <NavLinks>
          <NavLink
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('about')}
          >
            About
          </NavLink>
          <NavLink
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </NavLink>
          <NavLink
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </NavLink>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </CTAButton>
        </NavLinks>

        <MobileMenuButton>
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
