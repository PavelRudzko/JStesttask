import { useCallback } from 'react';
import Head from 'next/head';
import router from 'next/router';
import { NextPage } from 'next';
import { Stack, Title, Text, Button } from '@mantine/core';
import { Image } from '@mantine/core'; 

import { RoutePath } from 'routes';

const NotFound: NextPage = () => {
  const handleClick = useCallback(() => {
    router.push(RoutePath.Home);
  }, []);

  return (
    <>
      <Head>
        <title>Payment Failed</title>
      </Head>
      <Stack
        m="auto"
        w={328}
        h="100vh"
        justify="center"
        display="flex"
      >
        <Title order={2}>Payment failed.</Title>

        <Image
      visibleFrom="sm"
      alt="App Info"
     // src="./failedimage.svg"
      src = '/congrats.png'
      h="100vh"
    />
        

        <Text mx={0} mt={20} mb={24} c="gray.6">
        Sorry , your payment failed.
        Wood you like to try again?
        </Text>

        <Button
          type="submit"
          onClick={handleClick}
        >
          Back to Cart
        </Button>
      </Stack>
    </>
  );
};

export default NotFound;
