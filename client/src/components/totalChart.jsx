import React from 'react';

function ProgressBar() {
  return (
    <div className="relative h-10  rounded-full overflow-hidden ">
      <div className="absolute w-full h-full bg-gray-300 " ></div>
      <div className="absolute top-0 left-0 h-full bg-violet-500" style={{ width: '77%' }}></div>
      <div className="absolute inset-0 flex items-center justify-center text-white font-bold">77%</div>
    </div>
  );
}

export default ProgressBar;