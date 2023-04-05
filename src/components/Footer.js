import React from 'react'
import styled from 'styled-components'


const FooterDiv = styled.div`
   background-color:  #373A36;
   width:100%;
   height:50px;
    span{
        padding-top: 10px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Footer = () => {
    return (
        <>
            <FooterDiv>
                <span>&copy; sherpawangchu.dev</span>
            </FooterDiv>

        </>
    );
}
export default Footer;

