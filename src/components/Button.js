import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
display:flex;
justify-content:center;
align-items:center;
padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
color: ${({ primary }) => (primary ? '#fff' : '#D48166')};
background: ${({ primary }) => (primary ? '#D48166' : "#fff")};
font-size: ${({ big }) => (big ? '20px' : '14px')};
white-space:nowrap;
outline:none;
border:none;
min-width:100px;
max-width:200px;
cursor:pointer;
text-decoration:none;
transition:0.3s;

&:hover{
    transform: translateY(-2px);
    background: ${({ primary }) => (primary ? '#E6E2DD' : "#fff")};
    color: ${({ primary }) => (primary ? '#000' : '#D48166')};
    

}
`;