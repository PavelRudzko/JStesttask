

import Head from 'next/head';
import { NextPage } from 'next';
import { useState } from 'react';
import { Stack, Title, Text, Button, FileInput, Container } from '@mantine/core';
import { RoutePath } from 'routes';

const AddNewProduct: NextPage = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const handlePhotoUpload = (files: FileList | null) => {
    // Handle photo upload logic here
  };

  const handleSaveProduct = () => {
    // Handle save product logic here
  };

  return (
    <>
      <Head>
        <title>Add New Product</title>
      </Head>
      <Container size="md" mx="auto">
        <Stack gap="lg" align="left">
          <Title order={2}>Create New Product</Title>
          <div>
            <Text>Product Title:</Text>
            <input type="text" value={title} onChange={handleTitleChange} />
          </div>
          <div>
            <Text>Product Price:</Text>
            <input type="text" value={price} onChange={handlePriceChange} />
          </div>
          <div>
            <Text>Upload Product Photo:</Text>
            <FileInput
              onChange={(files) => handlePhotoUpload(files)}
              placeholder="Choose file..."
            />
          </div>
          <Button onClick={handleSaveProduct}>Save Product</Button>
        </Stack>
      </Container>
    </>
  );
};

export default AddNewProduct;