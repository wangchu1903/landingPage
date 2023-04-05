import { menuData } from '../data/MenuData';
import React from 'react'
import styled, { css } from 'styled-components/macro';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const DropdownContainer = styled.div`
    position:fixed;
    background:#373A36;
    z-index:999;
    width:100%;
    height:100%;
    display:grid;
    align-items:center;
    left:0;
    transition:0.3 ease-in-out;
    opacity:${({ isOpen }) => (isOpen ? '1' : '0')};
    top:${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

const Icon = styled.div`
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background:transparent;
    font-size:2rem;
    cursor:pointer;
    outline:none;
`;
const CloseIcon = styled(FaTimes)`
    color:#E6E2DD;

    &:hover{
        color:#D48166;
    }
`;
const DropdownWrapper = styled.div``;
const DropdownMenu = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align:center;
    margin-bottom:4rem;

    @media screen and (max-width:480px){
        grid-template-rows: repeat(4, 60px);
    }

`;
const DropdownLink = styled(Link)`
    display:flex;
    align-items:center;
    justify-content:center;
    color:#E6E2DD;
    font-size:1.5rem;
    text-decoration:none;
    list-style:none;
    cursor:pointer;
    transition:0.2s ease-in-out;

    &:hover{
        color:#D48166;
    }
`;
const BtnWrap = styled.div`
    display:flex;
    justify-content:center;
`;


const Menu = ({ isOpen, toggle }) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item, index) => {
                        return (
                            <DropdownLink to={item.link} key={index}>
                                {item.title}
                            </DropdownLink>
                        )
                    })}
                </DropdownMenu>
                <BtnWrap>
                    <Button primary="true" round="true" big="true" to="/contact">Contact Us</Button>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Menu