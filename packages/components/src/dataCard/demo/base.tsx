import * as React from 'react';
import DataCard from '..';
import '../style';
// import 'tailwindcss/tailwind.css';


const allienceCountImg = require('./platform.png');
const allienceCountOpercyImg = require('./platform-opercy.png');

export default (props) => (
  <DataCard
    title="全部机构总数量"
    subTitle="加盟"
    subTitle2="直营"
    subTitle3="幼儿园"
    icons={[allienceCountImg, allienceCountOpercyImg]}
    totalCount={1}
    subValue={2}
    subValue2={3}
    subValue3={4}
    {...props}
  />
);
