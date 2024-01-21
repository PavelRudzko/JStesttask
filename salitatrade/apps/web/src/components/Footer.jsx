import React from 'react';
import { Container, Group, Text, Button } from '@mantine/core';

const MarketplaceFooter = () => {
  return (
    <Container size="xl">
      <Group align="center" justify="space-between">
        <Text>All rights reserved © 2023 Your Marketplace</Text>
        <Group>
          <Button>About Us</Button>
          <Button>Contact</Button>
          <Button>Privacy Policy</Button>
          {/* Add more buttons or links as needed */}
        </Group>
      </Group>
    </Container>
  );
};

export default MarketplaceFooter;