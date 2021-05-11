import React from "react";
import styled from "styled-components";

export const Container=styled.div`
justify-content: center;
    width: 100%;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
`

export const Icon = styled.img`
  text-align: left !important;
  height: 3em;
  width: 5em;
`;

export const MyCard = styled.div`
  font-size: 18px;
  height: 22rem;
  width: 20rem;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
  transition: 0.3s;
  margin: 1.3em;
  &:hover {
    box-shadow: 0 8px 15px 0 rgb(0 0 0 / 20%);
  }
  padding: 1.5em;
  border-radius: 10px;
`;
export const CardDesc = styled.h3`
  line-height: 1.2;
  font-weight: 800;
  color: #535353;
  width: 100%;
  text-align: left;
  margin-top: 1em;
`;

export const CardContent = styled.ul`
  list-style-type: none;
  padding:0;
  margin-bottom:30px;
`;

export const CardPointer = styled.li`
text-align:left !important;
`;

export const Button = styled.a`
border: 0;
	left: 0;
    text-decoration:none;
	padding: 10px 1em;
	color: #000;
	font-size: 20px;
	font-weight: 600;
	border-radius: 5px;
	background-color: #E8B828;
	border: 2px solid #E8B828;
	transition: all 240ms ease-in-out;
	cursor: pointer;
	&:hover {
		color: #fff;
		background-color: #E8B828;
	}
    @media screen and (max-width: 580px){
        font-size: 15px;
    }
`;

export default function HomeCard() {
  return (
      <Container>
    <MyCard>
      <Icon src={require("../../assets/logo1.jpeg").default} />
      <CardDesc>Uday Foundation</CardDesc>
      <CardContent>
        <CardPointer>❖ Donate Oxygen Concentrators</CardPointer>
        <CardPointer>❖ Donate Dry Ration and Food to the homeless</CardPointer>
        <CardPointer>❖ Donate to Distribute Wellness Kits to the homeless</CardPointer>
      </CardContent>
      <Button href="https://www.udayfoundation.org/donations-help-us/" target="_blank">Donate Now!</Button>
    </MyCard>
    
  <MyCard>
  <Icon src={require("../../assets/logo3.png").default} />
  <CardDesc>Making the Difference</CardDesc>
  <CardContent>
    <CardPointer>❖ Tiffin services for home quarantined patients</CardPointer>
    <CardPointer>❖ Donate to boost oxygen supply</CardPointer>
    </CardContent>
  <Button href="https://makingthedifference.in/
" target="_blank">Donate Now!</Button>
</MyCard>
<MyCard>
    <Icon src={require("../../assets/logo5.png").default} />
    <CardDesc>Uttishta Foundation</CardDesc>
    <CardContent>
      <CardPointer>❖ Family survival kits for the disadvantaged</CardPointer>
      <CardPointer>❖ Protective Hygiene kits for elders</CardPointer>
      <CardPointer>❖ Free meals for the homeless during covid-19</CardPointer>
      <CardPointer>❖ Oxygen cylinders</CardPointer>
    </CardContent>
    <Button href="
https://uttishthafoundation.com/donations/
    " target="_blank">Donate Now!</Button>
  </MyCard>
<MyCard>
      <Icon src={require("../../assets/logo4.png").default} />
      <CardDesc>Breathe India</CardDesc>
      <CardContent>
        <CardPointer>❖ IIT Kanpur Alumni led Covid-19 Relief Fund</CardPointer>
        <CardPointer>❖ Phase 1 : concluded on 30th April, raised 2.5 cr to provide oxygen concentrators to
Delhi-NCR</CardPointer>
        <CardPointer>❖ Phase 2 : already started, raising funds to provide oxygen concentrators to 11
districts in UP</CardPointer>
      </CardContent>
      <Button href="https://milaap.org/fundraisers/support-arrange-oxygen-concentrators-in-delhi
" target="_blank">Donate Now!</Button>
    </MyCard>
    
  <MyCard>
    <Icon src={require("../../assets/logo2.png").default} />
    <CardDesc>Concern India</CardDesc>
    <CardContent>
      <CardPointer>❖ Concern supports government and private hospitals catering to the underprivileged in 9 cities. They are also working with communities for ration support.</CardPointer>
      <CardPointer>❖ Donated So FAR - over 1500 medical equipments including ventilators, ECG Machines, Patient monitors,etc.</CardPointer>
    </CardContent>
    <Button href="
https://www.concernindiafoundation.org/donate-for-covid-19-relief-in-india/" target="_blank">Donate Now!</Button>
  </MyCard>
  </Container>
  );
}

