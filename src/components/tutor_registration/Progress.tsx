import React from 'react';

type ProgressProps = {
  number: number;
};

const Progress: React.FC<ProgressProps> = ({ number }) => {
  let color1: string;
  let color2: string;
  let color3: string;

  if (number === 1) {
    color1 = '#F77F00';
    color2 = '#fafafa';
    color3 = '#fafafa';
  } else if (number === 2) {
    color1 = '#F77F00';
    color2 = '#F77F00';
    color3 = '#fafafa';
  } else if (number === 3) {
    color1 = '#F77F00';
    color2 = '#F77F00';
    color3 = '#F77F00';
  } else {
    color1 = '#F77F00';
    color2 = '#fafafa';
    color3 = '#fafafa';
  }

  return (
    <div className="flex items-center py-3">
      <div
        className="h-10 w-10 flex items-center justify-center rounded-full"
        style={{ backgroundColor: color1 }}
      >
        1
      </div>
      <div className="border-b border-black w-20 flex-grow"></div>
      <div
        className="h-10 w-10 flex items-center justify-center rounded-full"
        style={{ backgroundColor: color2 }}
      >
        2
      </div>
      <div className="border-b border-black w-20 flex-grow"></div>
      <div
        className="h-10 w-10 flex items-center justify-center rounded-full"
        style={{ backgroundColor: color3 }}
      >
        3
      </div>
    </div>
  );
};

export default Progress;