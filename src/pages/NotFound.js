import React from 'react';
import { useRouteError, useNavigate } from "react-router-dom";
import { Button, Result } from 'antd';

export default function NotFound() {
    const navigate = useNavigate();
    const error = useRouteError();

    return (
        <Result
            status="warning"
            title="There is no page!"
            subTitle="Sorry, there are not any pages in this url."
            extra={[
                <Button
                    type="primary"
                    onClick={() => navigate("/")}
                >Back Home</Button>,
                <div>{error.message || error.statusText}</div>
            ]}
        />
    );
}