import React from 'react';
import Fade from 'react-reveal/Fade';
import {Icon} from 'react-icons-kit';
import {check} from 'react-icons-kit/feather/check';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right';
import Container from 'common/components/UI/Container';
import NextImage from 'common/components/NextImage';
import Button from 'common/components/Button';
import Text from 'common/components/Text';
import Link from 'common/components/Link';
import Heading from 'common/components/Heading';
import Section, {Grid, Figure, Content, Features} from './analytics.style';
import parallaxBg from 'common/assets/image/webAppMinimal/parallax-1.png';
import app from 'common/assets/image/webAppMinimal/app.png';

import {analyticsTool} from 'common/data/WebAppMinimal';

const AnalyticsTool = () => {
    return (<Section>
        <Container width="1400px">
            <Grid>
                <Figure>
                    <Fade up>
                        <NextImage src={app} alt="analytics"/>
                    </Fade>
                </Figure>
                <Content>
                    <Text className="subtitle" content={"Get your brand noticed"}/>
                    <Heading content={"Vehicle branding, signage & sticker printing in Dubai."}/>
                    <Text className="description"
                          content={"At Printajo, we’re more than just a signage and vehicle branding company. We’re passionate about helping businesses and organizations in Dubai grow by increasing their visibility and building their brand through high-quality graphics and marketing materials. With over 10 years of experience in the industry, our team of experts knows what it takes to create designs that will make your business stand out in a crowded market. From simple window decals to complex vehicle wraps, we offer a wide range of services to suit your needs and budget. With our personalized approach and commitment to customer satisfaction, you can trust us to deliver results that will exceed your expectations. Don’t wait any longer to take your brand to the next level – contact us today to schedule a consultation and see how we can help you grow!"}/>
                    {/*<Features>*/}
                    {/*  {analyticsTool.features.map((feat, i) => (*/}
                    {/*    <li key={i}>*/}
                    {/*      <Icon icon={check} size={22} />*/}
                    {/*      {feat}*/}
                    {/*    </li>*/}
                    {/*  ))}*/}
                    {/*</Features>*/}
                    {/*<Link href={analyticsTool.button.link} className="explore">*/}
                    {/*  <Button*/}
                    {/*    title={analyticsTool.button.label}*/}
                    {/*    icon={<Icon icon={ic_keyboard_arrow_right} size={24} />}*/}
                    {/*  />*/}
                    {/*</Link>*/}
                </Content>
            </Grid>
        </Container>
        <Container width="1400px">
            <Grid>

                <Content>
                    <Text className="subtitle" content={"Our Expertise"}/>
                    <Heading content={"Partner with the vehicle branding experts"}/>
                    <Text className="description"
                          content={"Partner with the vehicle branding experts at Printajo to take your brand to the next level. We have over 10 years of experience in creating custom graphics for cars, trucks, buses, and other vehicles in Dubai. With our expertise, you can be sure that your vehicle branding will stand out from the competition and make a lasting impression on your customers. Let us help you grow your business today!"}/>
                    {/*<Features>*/}
                    {/*  {analyticsTool.features.map((feat, i) => (*/}
                    {/*    <li key={i}>*/}
                    {/*      <Icon icon={check} size={22} />*/}
                    {/*      {feat}*/}
                    {/*    </li>*/}
                    {/*  ))}*/}
                    {/*</Features>*/}
                    {/*<Link href={analyticsTool.button.link} className="explore">*/}
                    {/*  <Button*/}
                    {/*    title={analyticsTool.button.label}*/}
                    {/*    icon={<Icon icon={ic_keyboard_arrow_right} size={24} />}*/}
                    {/*  />*/}
                    {/*</Link>*/}
                </Content>
                <Figure>
                    <Fade up>
                        <NextImage src={app} alt="analytics"/>
                    </Fade>
                </Figure>
            </Grid>
        </Container>
        <Container width="1400px">
            <Grid>
                <Figure>
                    <Fade up>
                        <NextImage src={app} alt="analytics"/>
                    </Fade>
                </Figure>
                <Content>

                    <Heading content={"Successfully branding your business"}/>
                    <Text className="description"
                          content={"Successfully branding your business is our top priority at Printajo. We understand that your brand is the face of your business and plays a crucial role in attracting and retaining customers. Our team of experts has the experience and creativity needed to bring your vision to life and create a unique, impactful brand image for your business through vehicle branding, signage, and sticker printing. We use only the highest quality materials and modern printing techniques to ensure that your brand looks its best and lasts as long as possible. Let us help you successfully brand your business and watch as your customer base grows."}/>
                    {/*<Features>*/}
                    {/*  {analyticsTool.features.map((feat, i) => (*/}
                    {/*    <li key={i}>*/}
                    {/*      <Icon icon={check} size={22} />*/}
                    {/*      {feat}*/}
                    {/*    </li>*/}
                    {/*  ))}*/}
                    {/*</Features>*/}
                    {/*<Link href={analyticsTool.button.link} className="explore">*/}
                    {/*  <Button*/}
                    {/*    title={analyticsTool.button.label}*/}
                    {/*    icon={<Icon icon={ic_keyboard_arrow_right} size={24} />}*/}
                    {/*  />*/}
                    {/*</Link>*/}
                </Content>
            </Grid>
        </Container>
        <Container width="1400px">
            <Grid>

                <Content>

                    <Heading content={"Customize your brand."}/>
                    <Text className="description"
                          content={"Branding is about customized messaging for your business. It’s about delivering a message that resonates with your target audience and that stands out in a crowded market space. We offer branding solutions that are perfect for companies looking to make a big impact and grow their customer base in the UAE region."}/>
                    {/*<Features>*/}
                    {/*  {analyticsTool.features.map((feat, i) => (*/}
                    {/*    <li key={i}>*/}
                    {/*      <Icon icon={check} size={22} />*/}
                    {/*      {feat}*/}
                    {/*    </li>*/}
                    {/*  ))}*/}
                    {/*</Features>*/}
                    {/*<Link href={analyticsTool.button.link} className="explore">*/}
                    {/*  <Button*/}
                    {/*    title={analyticsTool.button.label}*/}
                    {/*    icon={<Icon icon={ic_keyboard_arrow_right} size={24} />}*/}
                    {/*  />*/}
                    {/*</Link>*/}
                </Content>
                <Figure>
                    <Fade up>
                        <NextImage src={app} alt="analytics"/>
                    </Fade>
                </Figure>
            </Grid>
        </Container>
        <Container width="1400px">
            <Grid>
                <Figure>
                    <Fade up>
                        <NextImage src={app} alt="analytics"/>
                    </Fade>
                </Figure>
                <Content>
                    <Text className="subtitle" content={"Why choose us?"}/>
                    <Heading content={"What sets us apart in Dubai's signage industry"}/>
                    <Text className="description"
                          content={"Our team has over 10 years of experience in vehicle branding, signage, and sticker printing. We have worked with various businesses and organizations in Dubai, providing them with unique and eye-catching designs that help them stand out in their respective industries. We have the expertise needed to handle everything from simple window decals to complex car wraps, and we use the latest technology and materials to ensure that our work is of the highest quality. When you choose Printajo for your vehicle branding needs, you can trust that you are partnering with the experts in the field."}/>
                    {/*<Features>*/}
                    {/*  {analyticsTool.features.map((feat, i) => (*/}
                    {/*    <li key={i}>*/}
                    {/*      <Icon icon={check} size={22} />*/}
                    {/*      {feat}*/}
                    {/*    </li>*/}
                    {/*  ))}*/}
                    {/*</Features>*/}
                    {/*<Link href={analyticsTool.button.link} className="explore">*/}
                    {/*  <Button*/}
                    {/*    title={analyticsTool.button.label}*/}
                    {/*    icon={<Icon icon={ic_keyboard_arrow_right} size={24} />}*/}
                    {/*  />*/}
                    {/*</Link>*/}
                </Content>
            </Grid>
        </Container>
    </Section>);
};

export default AnalyticsTool;
