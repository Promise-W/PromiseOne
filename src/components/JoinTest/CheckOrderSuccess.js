import React from 'react';
import { Button, Input } from 'antd';

export default function CheckOrderSuccess({handleConfirmAccount}) {
    const [account, setAccount] = React.useState('');
    return (
      <div>
          <span>
              订单核对正确，请留下你的收款账号，我们会将货物发出，并且将钱退回您的账号。收款账号
              <Input
                onChange={(e) => {setAccount(e.target.value)}}
                 type='text'
                value={account}
                style={{width: 180, marginRight: 8}}
                 // placeholder={formatMessage({id: 'app.page.joom-account-placeholder'})}
              />
          </span>
          <Button
            htmlType="button"
            type="light"
            // size="small"
            onClick={() => {handleConfirmAccount(account)}}
          >
              确定
          </Button>
      </div>
    )
}
