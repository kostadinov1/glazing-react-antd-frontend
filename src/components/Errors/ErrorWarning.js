import { Button, Result } from 'antd';
import React from 'react';

const ErrorWarning = () => (
  <Result
    status="warning"
    title="The website cannot be reach at the moment. Please try again later."
    extra={
      <Button type="primary" key="console">
        Go Console
      </Button>
    }
  />
);

export default ErrorWarning;