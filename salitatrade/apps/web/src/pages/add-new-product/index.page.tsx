
// import Head from 'next/head';
// import { NextPage } from 'next';
// import {
//   Title,
//   Stack,
//   Slider,
// } from '@mantine/core';

// import { useState } from 'react'; 
// import classes from '.HeaderMegaMenu.module.css'


// import {
//   HoverCard,
//   Group,
//   Button,
//   UnstyledButton,
//   Text,
//   SimpleGrid,
//   ThemeIcon,
//   Anchor,
//   Divider,
//   Center,
//   Box,
//   Burger,
//   Drawer,
//   Collapse,
//   ScrollArea,
//   rem,
//   useMantineTheme,
//   Pagination,
// } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
// import {
//   IconNotification,
//   IconCode,
//   IconBook,
//   IconChartPie3,
//   IconFingerprint,
//   IconCoin,
//   IconChevronDown,
// } from '@tabler/icons-react';
// import headerClasses from './HeaderMegaMenu.module.css';
//  //const [minPrice, setMinPrice] = useState("");
//   //const [maxPrice, setMaxPrice] = useState("");

// const mockdata = [
//   {
//     icon: IconCode,
//     title: 'Open source',
//     description: 'This Pokémon’s cry is very loud and distracting',
//   },
//   {
//     icon: IconCoin,
//     title: 'Free for everyone',
//     description: 'The fluid of Smeargle’s tail secretions changes',
//   },
//   {
//     icon: IconBook,
//     title: 'Documentation',
//     description: 'Yanma is capable of seeing 360 degrees without',
//   },
//   {
//     icon: IconFingerprint,
//     title: 'Security',
//     description: 'The shell’s rounded shape and the grooves on its.',
//   },
//   {
//     icon: IconChartPie3,
//     title: 'Analytics',
//     description: 'This Pokémon uses its flying ability to quickly chase',
//   },
//   {
//     icon: IconNotification,
//     title: 'Notifications',
//     description: 'Combusken battles with the intensely hot flames it spews',
//   },
// ];


// function useHover() {
//   const [hovered, setHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setHovered(false);
//   };

  
//   return {
//     hovered,
//     onMouseEnter: handleMouseEnter,
//     onMouseLeave: handleMouseLeave
//   };
// }

// const AddNewProduct: NextPage = () => {
  
  
//   const { hovered, onMouseEnter, onMouseLeave } = useHover();

  
//   const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
//   const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
//   const theme = useMantineTheme();

//   const links = mockdata.map((item) => (
//     <UnstyledButton className={headerClasses.subLink} key={item.title}>
//       <Group wrap="nowrap" align="flex-start">
//         <ThemeIcon size={34} variant="default" radius="md">
//           <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
//         </ThemeIcon>
//         <div>
//           <Text size="sm" fw={500}>
//             {item.title}
//           </Text>
//           <Text size="xs" c="dimmed">
//             {item.description}
//           </Text>
//         </div>
//       </Group>
//     </UnstyledButton>
//   ));

//   return (
//     <>
//       {/* <Head>
//         <title>Shop1</title>        
//       </Head> */}      
//       <Stack gap="lg">
//         <Title order={2}>Shopy</Title>
//         </Stack>


// {/* <div className='Filters'>
  
//   <div className='Create new product'></div>
//   <h3>Create new product </h3> 
//   <h3>Title of the product</h3> <br />
//   <input type="text"  aria-label="Title of the product" 
//   placeholder='Enter title of the product' /> <br />
  
//   <br />
// <input 
//         type="text" 
        
     
//         placeholder="Enter price of the product"
//       />

// </div> */}

//       {/* Render HeaderMegaMenu component */}
//       <Box pb={120}>
//         <header className={headerClasses.header}>
//           <Group justify="space-between" h="100%">
//             <Group h="100%" gap={0} visibleFrom="sm">
//               {/* <a href="#" className={headerClasses.link}>
//                 Home
//               </a> */}
//               <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
//                 <HoverCard.Target>
//                   <a href="#" className={headerClasses.link}>
//                     <Center inline>
//                       <Box component="span" mr={5}>
//                         Marketplace
//                       </Box>
//                       <IconChevronDown
//                         style={{ width: rem(16), height: rem(16) }}
//                         color={theme.colors.blue[6]}
//                       />
//                     </Center>
//                   </a>
//                 </HoverCard.Target>

//                 <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
//                   <Group justify="space-between" px="md">
//                     <Text fw={500}>Features</Text>
//                     <Anchor href="#" fz="xs">
//                       View all
//                     </Anchor>
//                   </Group>

//                   <Divider my="sm" />

//                   <SimpleGrid cols={2} spacing={0}>
//                     {links}
//                   </SimpleGrid>

//                   <div className={headerClasses.dropdownFooter}>
//                     <Group justify="space-between">
//                       <div>
//                         <Text fw={500} fz="sm">
//                           Get started
//                         </Text>
//                         <Text size="xs" c="dimmed">
//                           Their food sources have decreased, and their numbers
//                         </Text>
//                       </div>
//                       <Button variant="default">Get started</Button>
//                     </Group>
//                   </div>
//                 </HoverCard.Dropdown>
//               </HoverCard>
            
//               <a href="#" className={headerClasses.link}>
//                 Your products
//               </a>
//             </Group>

           

//             <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
//           </Group>
//         </header>

//         <Drawer
//           opened={drawerOpened}
//           onClose={closeDrawer}
//           size="100%"
//           padding="md"
//           title="Navigation"
//           hiddenFrom="sm"
//           zIndex={1000000}
//         >
//           <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
//             <Divider my="sm" />

//             <a href="#" className={headerClasses.link}>
//               Home
//             </a>
//             <UnstyledButton className={headerClasses.link} onClick={toggleLinks}>
//               <Center inline>
//                 <Box component="span" mr={5}>
//                   Features
//                 </Box>
//                 <IconChevronDown
//                   style={{ width: rem(16), height: rem(16) }}
//                   color={theme.colors.blue[6]}
//                 />
//               </Center>
//             </UnstyledButton>
//             <Collapse in={linksOpened}>{links}</Collapse>
//             <a href="#" className={headerClasses.link}>
//               Learn
//             </a>
//             <a href="#" className={headerClasses.link}>
//               Academy
//             </a>

//             <Divider my="sm" />

//             <Group justify="center" grow pb="xl" px="md">
//               <Button variant="default">Log in</Button>
//               <Button>Sign up</Button>
//             </Group>
//           </ScrollArea>
//         </Drawer>
//       </Box>

//       <div className='Filters'>
  
//   <div className='Create new product'></div>
//   <h3>Create new product </h3> 
//   <h3>Title of the product</h3> <br />
//   <input type="text"  aria-label="Title of the product" 
//   placeholder='Enter title of the product' /> <br />
  
//   <br />
// <input 
//         type="text" 
        
     
//         placeholder="Enter price of the product"
//       />

// </div>



//     </>
//   );
// };

// export default AddNewProduct;


// import Head from 'next/head';
// import { NextPage } from 'next';
// import { useState } from 'react';
// import { Stack, Title, Text, Button, FileInput } from '@mantine/core';
// import { RoutePath } from 'routes';

// const AddNewProduct: NextPage = () => {
//   const [title, setTitle] = useState('');
//   const [price, setPrice] = useState('');

//   const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setTitle(event.target.value);
//   };

//   const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setPrice(event.target.value);
//   };

//   const handlePhotoUpload = (files: FileList | null) => {
//     // Handle photo upload logic here
//   };

//   const handleSaveProduct = () => {
//     // Handle save product logic here
//   };

//   return (
//     <>
//       <Head>
//         <title>Add New Product</title>
//       </Head>
//       <Stack gap="lg" align="center">
//         <Title order={2}>Create New Product</Title>
//         <div>
//           <Text>Product Title:</Text>
//           <input type="text" value={title} onChange={handleTitleChange} />
//         </div>
//         <div>
//           <Text>Product Price:</Text>
//           <input type="text" value={price} onChange={handlePriceChange} />
//         </div>
//         <div>
//           <Text>Upload Product Photo:</Text>
//           <FileInput
//             onChange={(files) => handlePhotoUpload(files)}
//             placeholder="Choose file..."
//           />
//         </div>
//         <Button onClick={handleSaveProduct}>Save Product</Button>
//       </Stack>
//     </>
//   );
// };

// export default AddNewProduct;



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