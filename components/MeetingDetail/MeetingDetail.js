import styled from "styled-components";
import ImageWithText from "../ImageWithText/ImageWithText";
import DogList from "../DogList/DogList";
import Link from "next/link";
import Image from "next/image";

export default function MeetingDetail({ data }) {
  const { location, date, time, excluded, furtherInfo, attending, id } = data;

  return (
    <StyledArticle>
      <StyledHeading>{location}</StyledHeading>
      <ImageWithText
        image="/calendar-icon.svg"
        altText="Kalender Icon"
        text={date}
      />
      <ImageWithText image="/clock-icon.svg" altText="Uhr Icon" text={time} />
      {excluded.length !== 0 && (
        <ImageWithText
          data-testid="excluded"
          image="/stop-icon.svg"
          altText="Stop Icon"
          text={excluded}
        />
      )}
      {furtherInfo && (
        <StyledInfobox data-testid="info">
          <StyledSubHeading>Weitere Infos:</StyledSubHeading>
          <StyledParagraph>{furtherInfo}</StyledParagraph>
        </StyledInfobox>
      )}
      <StyledInfobox>
        <StyledSubHeading>Wir sind dabei:</StyledSubHeading>
        <DogList id={id} attendingDogs={attending} />
      </StyledInfobox>
      <StyledLink href={`/meetings/${id}/edit`}>
        <StyledIcon
          src="/edit-icon.svg"
          alt="stift icon"
          width={20}
          height={20}
        />
        bearbeiten
      </StyledLink>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  margin-top: 12vh;
  margin-left: 5vw;
  border: 2px solid black;
  border-radius: 20px;
  padding: 0.8rem;
  text-align: start;
  background-color: var(--white);
`;

const StyledInfobox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 1rem 0 0.5rem;
`;
const StyledParagraph = styled.p`
  margin: 0.2rem 0 0;
`;

const StyledHeading = styled.h2`
  border: 2px solid black;
  border-radius: 10px;
  padding: 0.5rem 1rem;
`;

const StyledSubHeading = styled.h3`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  line-height: 1rem;
  width: auto;
  padding: 0.5rem 1rem 0.7rem 0.5rem;
  text-align: center;
  margin: 2.5rem 0 3vh 40vw;
  color: var(--white);
  background-color: var(--orange);
  border-radius: 10px;
  text-decoration: none;
`;

const StyledIcon = styled(Image)`
  position: relative;
  top: 5px;
  left: 5px;
  margin-right: 1rem;
`;
