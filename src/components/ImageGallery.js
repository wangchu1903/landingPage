import React from 'react'
import styled from 'styled-components';
import { GalleryData } from '../data/GalleryData'

const ImagesContainer = styled.div`
  display: flex;
  padding-top: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  row-gap: 2em;
  column-gap: 20px;
`;

const Image = styled.img`
    height: 500px;
    width:600px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        
`
const ImageGallery = () => {
    return (
        <ImagesContainer>

            {
                GalleryData.map((i, index) => {
                    return (
                        <Image src={i.image} alt={i.alt} key={index} />
                    )
                })
            }
        </ImagesContainer>
    )
}

export default ImageGallery

