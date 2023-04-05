import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData'
import { Button } from './Button.js';
import { HiOutlineBars3CenterLeft } from 'react-icons/hi2';

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position:fixed;
    width:100%;
    background-color: #373A36;
`;
const NavLink = css`
    color:#fff;
    display:flex;
    align-items:center;
    padding: 0 1rem;
    height:100%;
    cursor:pointer;
    text-decoration: none;

    &:hover{
        color:#D48166;
    }
`;
const Logo = styled(Link)`
    ${NavLink}

    
`;

const MenuBars = styled(HiOutlineBars3CenterLeft)`
display:none;

@media screen and (max-width: 768px){
    display: block;
    color:#E6E2DD;
    height: 40px;
    width:40px;
    position:absolute;
    cursor:pointer;
    top:0;
    right:0;
    transform: translate(-50%, 25%);

}
`;

const NavMenu = styled.div`

display: flex;
align-items: center;
margin-right: -48px;

@media screen and (max-width:760px){
    display:none;
}

`;

const NavMenuLinks = styled(Link)`
   ${NavLink}
`;

const NavBtn = styled.div`
    display:flex;
    align-items: center;
    margin-right: 40px;

    @media screen and (max-width:760px){
        display:none;
    }

`;

const Navbar = ({ toggle }) => {
    return (
        <Nav>
            <Logo to='/'>GYALPO-RUGS</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {menuData.map((item, index) => {
                    return (
                        <NavMenuLinks to={item.link} key={index}>
                            {item.title}
                        </NavMenuLinks>
                    );
                })}
            </NavMenu>
            <NavBtn>
                <Button to="/contact" primary="true">Contact Us</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar;
