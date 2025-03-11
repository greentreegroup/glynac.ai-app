import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';

const Dashboard = () => {
    const history = useHistory();

    return (
        <div>
            <Button onClick={() => history.push('/accounts')} style={{ float: 'right' }}>
                Accounts
            </Button>
        </div>
    );
};

export default Dashboard; 