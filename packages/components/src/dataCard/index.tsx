import * as React from 'react';

export interface PlatformIncomeProps {
  [propName:string]:any;
  title?:string;
  subTitle?:string;
  subTitle2?:string;
  totalCount?:number;
  subValue?:number;
  subValue2?:number;
  subValue3?:number;
  icons?:string[];
  className?:string;
}

const DataCard:React.FC<PlatformIncomeProps> = (props) => {
  const { icons, title, subTitle2, subTitle, subValue2, subTitle3, subValue3, subValue, totalCount } = props;
  return (
    <div
      className="mb-24"
    >
      <a className="block shadow p-16 rounded-8  hover:bg-primary  group">

        <div className="flex items-center">
          <img
            className="group-hover:hidden borderRadius"
            width={42}
            src={icons![0]}
          />
          <img
            className="hidden group-hover:inline-block borderRadius"
            width={42}
            src={icons![1]}
          />
          <span className="ml-16 text-14 text-gray-700 group-hover:text-white font-medium">{title}</span>
        </div>
        <div className="text-black-85 font-bold text-20 mt-16 truncate group-hover:text-white">{totalCount || '--'}</div>
        <div className="text-12 text-black-25 leading-loose mt-16 group-hover:text-white">
          <div className="truncate">{subTitle}：{subValue}</div>
          <div className="truncate">{subTitle2}：{subValue2}</div>
          <div className="truncate">{subTitle3}：{subValue3}</div>
        </div>
      </a>
    </div>
  );
};

export default DataCard;
