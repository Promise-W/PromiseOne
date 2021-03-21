import React from 'react';
import { Button, Input } from 'antd';

export default function CheckOrderFail({handleConfirmOrderNum}) {
    const [orderNumber, setOrderNumber] = React.useState('');

    return (
      <div>
          <span>
              订单核对失败，请重新输入订单
              <Input
                onChange={(e) => {setOrderNumber(e.target.value)}}
                type='text'
                value={orderNumber}
                style={{width: 180, marginRight: 8}}
                 // placeholder={formatMessage({id: 'app.page.joom-account-placeholder'})}
              />
          </span>
          <Button
            htmlType="button"
            type="light"
            // size="small"
            onClick={() => {handleConfirmOrderNum(orderNumber)}}
          >
              确定
          </Button>
      </div>
    )
}
