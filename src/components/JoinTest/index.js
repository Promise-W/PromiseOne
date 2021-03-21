import React from 'react';
import { Button } from 'antd';

export default function WillJoinTest({handleAgreeTest, handleRejectTest}) {
    return (
      <div>
          <span>你愿意参加测试吗？</span>
          <Button
            htmlType="button"
            type="light"
            // size="small"
            onClick={handleAgreeTest}
            style={{marginRight: 8}}
          >
              是的
          </Button>
          <Button
            danger={true}
            htmlType="button"
            type="primary"
            // size="small"
            onClick={handleRejectTest}
          >
              否
          </Button>
      </div>
    )
}
