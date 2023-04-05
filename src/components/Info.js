import React from 'react'
import styled from 'styled-components';
import { Button } from './Button.js';


const Section = styled.div`
    width:100%;
    height:100%;
   
`;
const Container = styled.div`
    padding:3rem calc((100vw - 1300px)/2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows:800px;

    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
    }
`;
const ColumnRight = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:1rem 2rem;  
    order: ${({ reverse }) => (reverse ? '1' : '2')};

    img{
        width:100%;
        height:80%;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
`;
const ColumnLeft = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    line-height:1.4;
    padding:1rem 2rem;
    order: ${({ reverse }) => (reverse ? '2' : '1')};

    h1{
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }
    p{
        margin-bottom: 2rem;
        
        text-align: justify;
    }
`;

const Info = ({ heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image }) => {
    return (

        <Section>

            <Container>


                <ColumnLeft reverse={reverse}>

                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button to='/about' primary="true">{buttonLabel}</Button>

                </ColumnLeft>

                <ColumnRight reverse={reverse}>
                    <img src={image} alt='about' loading="lazy" />
                </ColumnRight>
            </Container>

        </Section>
    );
}

export default Info