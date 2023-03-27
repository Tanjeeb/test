import React from 'react';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Section, {
    Pattern,
    BannerContentWrapper,
    BannerContent,
    Figure,
} from './banner.style';
import dashboard from 'common/assets/image/webAppMinimal/banner.png';

const Banner = () => {
    return (
        <Section id="home">
            <Pattern/>
            <Container width="1400px">
                <BannerContentWrapper>
                    <BannerContent>
                        <Heading
                            className="animate__animated animate__fadeInUp"
                            content="Drive Your Brand Forward with Printajo"
                        />
                        <Text
                            className="animate__animated animate__fadeInUp"
                            content="Transform your fleet with custom vehicle branding solutions"
                        />

                        <Text
                            className="animate__animated animate__fadeInUp"
                            content="Printajo is the most trusted signage and vehicle branding company in Dubai. We offer a wide range of services and products for signage, vehicle branding and wrap in Dubai, UAE. All our materials are manufactured from top quality materials, ensuring the long lasting longevity of your brand."
                        />
                        <div id="slider_frame">
                            <img id="img" src="https://superprops-landing.vercel.app/_next/static/media/banner.2da4f1b8.png" />
                        </div>
                    </BannerContent>

                    {/*<Figure className="animate__animated animate__fadeInUp animate__fast">*/}
                    {/*    <NextImage src={dashboard} alt="dashboard"/>*/}
                    {/*</Figure>*/}

                </BannerContentWrapper>
            </Container>
        </Section>
    );
};

export default Banner;
