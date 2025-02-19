import { useCallback } from 'react';
import Head from 'next/head';
import router from 'next/router';
import { NextPage } from 'next';
import { Stack, Title, Text, Button, } from '@mantine/core';



import { RoutePath } from 'routes';

const PaymentSuccessfull: NextPage = () => {
  const handleClick = useCallback(() => {
    router.push(RoutePath.Home);
  }, []);

  return (
    <>
     <img src= "./partypopper.png"  />
      <Head>
        <title>Payment Successfull</title>
     
      </Head>
      <Stack
        m="auto"
        w={328}
        h="100vh"
        justify="center"
        display="flex"
      >
      
 <img src = "./partypopper.svg"  />

        <div className='Congrats '>
       <h2> Congrats</h2>

        </div>
        <Title order={2}>Payment Successfull</Title>

        <Text mx={0} mt={20} mb={24} c="gray.6">
        Huraay,you have completed your payment!
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

export default PaymentSuccessfull;


