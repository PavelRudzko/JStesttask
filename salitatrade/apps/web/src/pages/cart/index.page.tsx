import Head from 'next/head';
import { NextPage } from 'next';
import {
  Title,
  Stack,
} from '@mantine/core';

import classes from './index.module.css';

const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <Stack gap="lg">
        <Title order={2}>Cart</Title>
      </Stack>
    </>
  );
};

export default Cart;
