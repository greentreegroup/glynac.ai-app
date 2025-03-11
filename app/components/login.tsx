import React from 'react';
import { Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const handleSignIn = () => {
    // Implement sign-in logic here
  };

  return (
    <div>
      <Button onClick={handleSignIn}>Sign In</Button>
      <Text>
        Don't have an account? <Link to="/register">Create Account</Link>
      </Text>
    </div>
  );
};

export default Login; 