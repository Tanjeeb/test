import React from 'react';
import Fade from 'react-reveal/Fade';
import Container from 'common/components/UI/Container';
import Image from 'common/components/Image';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import users from 'common/assets/image/saasCreative/users.png';
import Section, { SectionHeading, Figure } from './community.style';

const OurCommunity = () => {
  return (
    <Section>
      <Container width="1400px">
        <SectionHeading>
          <Text className="slogan" content="Our Community" />
          <Heading content="Over 10 years of experience." />
          <Text
            className="description"
            content="You can rely on us to make your next vehicle advertising or brand experience a memorable one. With our expert staff, we have many years of experience and proven success in the outdoor advertising industry in Dubai."
          />
        </SectionHeading>
        <Fade up>
          <Figure>
            <NextImage src={users} alt="users" />
          </Figure>
        </Fade>
      </Container>
    </Section>
  );
};

export default OurCommunity;
