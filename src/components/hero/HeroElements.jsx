import styled from 'styled-components';

export const InfoSec = styled.div`
  color: #fff;
  padding: 80px 0;
  background: #fff;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;

export const InfoColumn = styled.div`
  flex: 1;
  max-width: 45%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TopLine = styled.div`
  color: #E8B828;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.4px;
`;

export const Img = styled.img`
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  padding-right:30px;
  padding-left:30px;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`;

export const Heading = styled.h1`
  font-size: 48px;
  font-weight: 600;
  color: #1c2237;
`;

export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 22px;
  line-height: 2;
  color: #1c2237;
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;