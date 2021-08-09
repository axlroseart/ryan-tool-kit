const addResource = (() => {
  const head = document.getElementsByTagName('html')[0];

  const isLoadResource = new Set<string>();

  const loadJs = (path:string):Promise<boolean> => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = path;
    script.type = 'text/javascript';
    head.appendChild(script);
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      reject(false);
    };
  });

  const loadCss = (path:string):Promise<boolean> => new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.href = path;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    head.appendChild(link);
    link.onload = () => {
      resolve(true);
    };
    link.onerror = () => {
      reject(false);
    };
  });

  return async({
    resourceUrl,
    resourceType,
  }:{
    resourceUrl:string;
    resourceType:'css'|'js';
  }) => {
    try {
      if (!isLoadResource.has(resourceUrl)) {
        isLoadResource.add(resourceUrl);
        switch(resourceType){
          case 'css': return await loadCss(resourceUrl);
          case 'js':return await loadJs(resourceUrl);
          default: return Promise.resolve(false);
        }
      }else{
        return Promise.resolve(true);
      }
    } catch (error) {
      return Promise.resolve(false);
    }
  };
})();

export default addResource;
