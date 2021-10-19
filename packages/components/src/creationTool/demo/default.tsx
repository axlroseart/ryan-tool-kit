import * as React from 'react';
import { CreationTool, ApiEnv, ToolType } from '@frontend/dcc-system-components';
export default () => (
  <CreationTool
    token={'test'}
    apiEnv={ApiEnv.Test}
    save
    type={ToolType.Roki}
    exportFile
    height={350}
    uploadWork={false}
    onEvent={(event) => {
      console.log('event', event);
    }}
    workId={2}/>
);

