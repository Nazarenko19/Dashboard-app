import React from "react";

const TableLayout: React.FC = () => {
  return (
    <div className="border border-borderColor-default rounded-xl">
      <div className="grid grid-cols-6 gap-2 p-4">
        <div className="sm:col-span-2 col-span-1 text-base text-boulder-500 font-medium uppercase pr-1 items-center flex">
          Usdt
        </div>
        <div className="text-sm text-boulder-500 font-light uppercase px-1 items-center flex">
          10,000 USDT
        </div>
        <div className="text-sm text-boulder-500 font-light uppercase px-1 items-center flex">
          $10,000
        </div>
        <div className="sm:col-end-7 col-end-7 sm:col-span-1 col-span-2 text-sm text-boulder-500 font-light px-1 bg-boulder-200 text-center p-1.5 items-center flex justify-center rounded-xl">
          View contract
        </div>
      </div>

      <div className="grid grid-cols-6 gap-2 p-4 bg-boulder-50">
        <div className="sm:col-span-2 col-span-1 text-base text-boulder-500 font-medium uppercase pr-1 items-center flex">
          Eth
        </div>
        <div className="text-sm text-boulder-500 font-light uppercase px-1 items-center flex">
          10,000 USDT
        </div>
        <div className="text-sm text-boulder-500 font-light uppercase px-1 items-center flex">
          $10,000
        </div>
        <div className="sm:col-end-7 col-end-7 sm:col-span-1 col-span-2 text-sm text-boulder-500 font-light px-1 bg-boulder-200 text-center p-1.5 items-center flex justify-center rounded-xl">
          View contract
        </div>
      </div>

      <div className="grid grid-cols-6 gap-2 p-4">
        <div className="sm:col-span-2 col-span-1 text-base text-boulder-500 font-medium uppercase pr-1 items-center flex">
          Sushi
        </div>
        <div className="text-sm text-boulder-500 font-light uppercase px-1 items-center flex">
          10,000 USDT
        </div>
        <div className="text-sm text-boulder-500 font-light uppercase px-1 items-center flex">
          $10,000
        </div>
        <div className="sm:col-end-7 col-end-7 sm:col-span-1 col-span-2 text-sm text-boulder-500 font-light px-1 bg-boulder-200 text-center p-1.5 items-center flex justify-center rounded-xl">
          View contract
        </div>
      </div>

      <div className="grid grid-cols-6 gap-2 p-4 bg-boulder-50">
        <div className="sm:col-span-2 col-span-1 text-base text-boulder-500 font-medium uppercase pr-1 items-center flex">
          Dai
        </div>
        <div className="text-sm text-boulder-500 font-light uppercase px-1 items-center flex">
          10,000 USDT
        </div>
        <div className="text-sm text-boulder-500 font-light uppercase px-1 items-center flex">
          $10,000
        </div>
        <div className="sm:col-end-7 col-end-7 sm:col-span-1 col-span-2 text-sm text-boulder-500 font-light px-1 bg-boulder-200 text-center p-1.5 items-center flex justify-center rounded-xl">
          View contract
        </div>
      </div>

      <div className="grid grid-cols-6 gap-2 p-4">
        <div className="sm:col-span-2 col-span-1 text-base text-boulder-500 font-medium pr-1 items-center flex">
          yCRV
        </div>
        <div className="text-sm text-boulder-500 font-light uppercase px-1 items-center flex">
          10,000 USDT
        </div>
        <div className="text-sm text-boulder-500 font-light uppercase px-1 items-center flex">
          $10,000
        </div>
        <div className="sm:col-end-7 col-end-7 sm:col-span-1 col-span-2 text-sm text-boulder-500 font-light px-1 bg-boulder-200 text-center p-1.5 items-center flex justify-center rounded-xl">
          View contract
        </div>
      </div>
    </div>
  );
};

export default TableLayout;
