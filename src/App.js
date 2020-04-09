import React from 'react';
import { Accordion, Card, Header, Feature, Form, Wrapper } from './components';
import './App.css';
import logo from './logo.svg';

export function App() {
  return (
    <>
      <Wrapper>
        <Header>
          <Header.Image src={logo} alt="Netflix" />
          <Header.Button>Sign In</Header.Button>
        </Header>

        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <Form>
            <Form.Input placeholder="Email address" />
            <Form.Button>Try it now</Form.Button>
            <Form.Break />
            <Form.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </Form.Text>
          </Form>
        </Feature>
      </Wrapper>

      <Card>
        <Card.Pane>
          <Card.Title>Enjoy on your TV.</Card.Title>
          <Card.SubTitle>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </Card.SubTitle>
        </Card.Pane>
        <Card.Pane>
          <Card.Image
            src="/images/misc/home-tv.jpg"
            alt="Tiger King on Netflix"
          />
        </Card.Pane>
      </Card>

      <Card direction="row-reverse">
        <Card.Pane>
          <Card.Title>Download your programmes to watch on the go.</Card.Title>
          <Card.SubTitle>
            Save your data and watch all your favourites offline.
          </Card.SubTitle>
        </Card.Pane>
        <Card.Pane>
          <Card.Image
            src="/images/misc/home-mobile.jpg"
            alt="Tiger King on Netflix"
          />
        </Card.Pane>
      </Card>

      <Card>
        <Card.Pane>
          <Card.Title>Watch everywhere.</Card.Title>
          <Card.SubTitle>
            Stream unlimited films and TV programmes on your phone, tablet,
            laptop and TV without paying more.
          </Card.SubTitle>
        </Card.Pane>
        <Card.Pane>
          <Card.Image
            src="/images/misc/home-imac.jpg"
            alt="Money Heist on Netflix"
          />
        </Card.Pane>
      </Card>

      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        <Accordion.Frame>
          {[
            {
              id: 1,
              header: 'What is Netflix?',
              body:
                "Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more � on thousands of internet-connected devices.\n\nYou can watch as much as you want, whenever you want, without a single advert � all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!",
            },
            {
              id: 2,
              header: 'How much does Netflix cost?',
              body:
                'Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one low fixed monthly fee. Plans start from �5.99 a month. No extra costs or contracts.',
            },
            {
              id: 3,
              header: 'Where can I watch?',
              body:
                "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\n\nYou can also download your favourite programmes with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
            },
            {
              id: 4,
              header: 'How do I cancel?',
              body:
                'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees � start or stop your account at any time.',
            },
            {
              id: 5,
              header: 'What can I watch on Netflix?',
              body:
                'Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals, and more. Watch as much as you want, any time you want.',
            },
          ].map((item) => (
            <Accordion.Item key={item.id}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion.Frame>

        <Form>
          <Form.Input placeholder="Email address" />
          <Form.Button>Try it now</Form.Button>
          <Form.Break />
          <Form.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </Form.Text>
        </Form>
      </Accordion>
    </>
  );
}
