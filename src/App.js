import React from 'react';
import MainRoute from './app/routes';
import { BrowserRouter } from 'react-router-dom'
import { MediaQueryProvider } from 'react-media-query-hoc';

const kumoQuery={
  mobile: 'screen and (max-width:640px)',
  tablet: 'screen and (min-width:1440px)',
  desktop: 'screen and (min-width:1441px)'
}

const App =()=> {
  return (
    <MediaQueryProvider queries={kumoQuery}>      
      <BrowserRouter>
      <MainRoute />
    </BrowserRouter>
    </MediaQueryProvider>   
  );
}

export default App;
