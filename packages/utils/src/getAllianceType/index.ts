// 获取当前访问域名跟code的对应关系
const getAllianceType = function(){
  const { origin } = location;
  // 学大
  if(origin.includes('xueda')){
    return '103';
  }
  // 谷雨
  if(origin.includes('guyu')){
    return '101';
  }
  // 标准版点程云
  return '102';
};

export default getAllianceType;
