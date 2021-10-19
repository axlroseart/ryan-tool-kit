import * as React from 'react';
import { CreationTool, ApiEnv, ToolType } from '@frontend/dcc-system-components';
export default () => (
  <CreationTool
    token={'test'}
    apiEnv={ApiEnv.Test}
    type={ToolType.Roki}
    exportFile
    height={350}
    uploadWork
    onEvent={(event) => {
      console.log(event);
    }}
    workId={2}/>
);

