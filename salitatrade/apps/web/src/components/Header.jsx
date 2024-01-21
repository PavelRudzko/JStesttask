import React from 'react';
import { Container, Group, Button, Title } from '@mantine/core';

const MarketplaceHeader = () => {
  return (
    <Container size="xl">
      <Group align="center" justify="space-between">
        <Title order={2}>Your Marketplace</Title>
        <Group>
          <Button>Home</Button>
          <Button>Products</Button>
          <Button>Categories</Button>
          <Button>Cart</Button>
          {/* Add more buttons or navigation elements as needed */}
        </Group>
      </Group>
    </Container>
  );
};

export default MarketplaceHeader;