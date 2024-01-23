import Head from 'next/head';
import { NextPage } from 'next';
import {
  Title,
  Stack,
} from '@mantine/core';

import classes from './index.module.css';

const Shop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>
      <Stack gap="lg">
        <Title order={2}>Shop</Title>
      </Stack>
    </>
  );
};

export default Shop;
