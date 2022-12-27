import React from 'react';
import { useRouteError } from "react-router-dom";
import { Button, Result } from 'antd';

export default function NotFound() {
    const error = useRouteError();

    return (
        <Result
            status="warning"
            title="There is no page!"
            subTitle="Sorry, there are not any pages in this url."
            extra={[
                <Button type="primary">Back Home</Button>,
                <div>{error.message || error.statusText}</div>
            ]}
        />
    );
}