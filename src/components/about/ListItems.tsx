import React, { FunctionComponent } from 'react';

interface ListItemsProps {
  text: string;
}

const ListItems: FunctionComponent<ListItemsProps> = ({ text }) => {
  return (
    <div className="flex gap-[9px]">
      <div className="w-[20px] h-[20px] bg-[#F77F00] rounded-[50%]"></div>
      <p className="text-[#000] text-[1.25rem]">{text}</p>
    </div>
  );
};

export default ListItems;
