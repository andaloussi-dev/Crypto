import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import Carousel, { slidesToShowPlugin, slidesToScrollPlugin, arrowsPlugin, autoplayPlugin } from '@brainhubeu/react-carousel';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import '@brainhubeu/react-carousel/lib/style.css';

const { Meta } = Card;
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
const { Text, Title } = Typography;

function CarouselComp({ news }) {
  return (
    <div className="carousel">
      <Carousel
        plugins={[
          'centered',
          'infinite',
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
          {
            resolve: slidesToScrollPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: <LeftOutlined />,
              arrowLeftDisabled: <LeftOutlined />,
              arrowRight: <RightOutlined />,
              arrowRightDisabled: <RightOutlined />,
              addArrowClickHandler: true,
            }
          },
          {
            resolve: autoplayPlugin,
            options: {
              interval: 2000,
            }
          },
        ]}
        breakpoints={{
          640: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1
                }
              },
            ]
          },
          900: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2
                }
              },
            ]
          }
        }}
        animationSpeed={1500}

      >
        {news.map((item, i) => (
          <a className='news-container' href={item.url} target="_blank" rel="noreferrer">
            <div className="news-image-container">
              <img className='news-image' src={item?.image?.thumbnail?.contentUrl || demoImage} alt="" />
              <div className="title-provider-container">
                <Title className="news-title" level={5}>{item.name.length>75 ? `${item.name.substring(0,75)}...`:item.name}</Title>
                <div className="provider-container">
                  <div>
                    <Avatar src={item.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                    <Text className="provider-name">{item.provider[0]?.name}</Text>
                  </div>
                  <Text>{moment(item.datePublished).startOf('ss').fromNow()}</Text>
                </div>
              </div>
            </div>
          </a>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComp;
