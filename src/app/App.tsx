import React, { useEffect, useState } from 'react';

import Header from './pages/header';
import Routes from './Routes';

const App = (): JSX.Element => {
   const [loading, isLoading] = useState<boolean>(true);
   const [authenticated, setAuthenticated] = useState<boolean>(true);

   useEffect(() => {
       // TODO: Authenticate user

   }, []);

   return (
      <div className="w-100">
         <Header />
         <Routes authenticated={authenticated} />
      </div>
   );
}

export default App;
