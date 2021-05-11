import React from 'react'
import HomeCard from './HomeCard';
import styled from 'styled-components';

export const AllCards = styled.div`
    justify-content: center;
    width: 100%;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
`
export const InfoSec = styled.div`
  color: #000;
  background: #fff;
  margin-left:0;
`;
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

export default function HomeCards() {
    return (
        <>
            <InfoSec id="#donate">
                <Container>
                    <AllCards>
                        <HomeCard />
                    </AllCards>
                </Container>
            </InfoSec>
        </>
    )
}
