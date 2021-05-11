import React from 'react';
import
    {
  Container,
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './HeroElements';

function InfoSection() {
  return (
    <>
      <InfoSec>
        <Container>
          <InfoRow>
            <InfoColumn>
              <TextWrapper>
                <TopLine>Donation Links</TopLine>
                <Heading>Covid-19 Relief NGO Details</Heading>
                <Subtitle>Here are five NGOs you can donate to at this time of desperate need. Every donation to these funds will help stop the virus's spread and support vulnerable families to tide over COVID-19. Each contribution, however small they might be, can make a huge difference. So lets all come together and help each other. #IndiaAgainstCoronaVirus</Subtitle>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper>
                <Img src={require("../../assets/img.svg").default} alt="img" />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;