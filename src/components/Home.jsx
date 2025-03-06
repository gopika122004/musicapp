import React from 'react';
import Sidebar from './Sidebar';
import Player from './Player';
import Display from './Display';

const Home = () => {
  return (
    <div className="min-h-screen bg-blue-900 flex flex-col">
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex flex-col w-full">
          {/* <Search />  ✅ Uncomment if Search exists */}
          <Display />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full z-50"> 
        <Player />
      </div>
    </div>
  );
};

export default Home;
