import React from 'react';
import { Button, Input } from 'antd';

export default function WillJoinTest({handleConfirmOrderNum}) {
    const [orderNumber, setOrderNumber] = React.useState('');

    return (
      <div>
          <span>
              欢迎您参加测试，请去www.xxxx.com/item/123456 购买xxxx。购买以后将订单id输入到
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
