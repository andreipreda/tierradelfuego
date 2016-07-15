import React from 'react';
import { PageHeader, Container, Footer } from 'rebass';
import { ErrorMsg, ForecastDataWrap } from './../../forecast';

export const Header = () =>
  <Container>
    <PageHeader
      description="5 days weather forecast"
      heading="Ushuaia (Tierra del fuego)"
      color="cornflowerblue"
    />
  </Container>;

export const Wrap = () =>
  <div>
    <ErrorMsg />
    <Header />
    <ForecastDataWrap />
    <Footer />
  </div>;
