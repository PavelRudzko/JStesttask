
import Head from 'next/head';
import { NextPage } from 'next';
import {
  Title,
  Stack,
  Slider,
} from '@mantine/core';

import { useState } from 'react'; 
import classes from '.HeaderMegaMenu.module.css'


import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  Pagination,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from '@tabler/icons-react';
import headerClasses from './HeaderMegaMenu.module.css';
 //const [minPrice, setMinPrice] = useState("");
  //const [maxPrice, setMaxPrice] = useState("");

const mockdata = [
  {
    icon: IconCode,
    title: 'Open source',
    description: 'This Pokémon’s cry is very loud and distracting',
  },
  {
    icon: IconCoin,
    title: 'Free for everyone',
    description: 'The fluid of Smeargle’s tail secretions changes',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'Yanma is capable of seeing 360 degrees without',
  },
  {
    icon: IconFingerprint,
    title: 'Security',
    description: 'The shell’s rounded shape and the grooves on its.',
  },
  {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'This Pokémon uses its flying ability to quickly chase',
  },
  {
    icon: IconNotification,
    title: 'Notifications',
    description: 'Combusken battles with the intensely hot flames it spews',
  },
];


function useHover() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  
  return {
    hovered,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  };
}

const Shop: NextPage = () => {
  
  
  const { hovered, onMouseEnter, onMouseLeave } = useHover();

  
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={headerClasses.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <>
      {/* <Head>
        <title>Shop1</title>        
      </Head> */}      
      <Stack gap="lg">
        <Title order={2}>Shopy</Title>
        </Stack>


<div className='Filters'>
  <h2>Filters</h2>
  <button>Reset all X</button>
  <div className='Price'></div>
  <h3>Price</h3> 
  <input type="text" name="minPrice" 
  placeholder='min' />
  {/* value={minPrice} 
  onChange={(e) => setMinPrice(e.target.value.match(/^\d*$/))} */}
   
 {/* <input type="text" name="maxPrice" 
  placeholder='max'/>
 // value={maxPrice} /> 
  onChange={(e) => setmaxPrice(e.target.value.match(/^[a-zA-Z\s]*$/))} */}
<input
        type="text"
        // value={maxPrice}
        // onChange={(e) => setMaxPrice(e.target.value.match(/^\d*$/)[0])}
        placeholder="Enter max price"
      />

</div>

      {/* Render HeaderMegaMenu component */}
      <Box pb={120}>
        <header className={headerClasses.header}>
          <Group justify="space-between" h="100%">
            <Group h="100%" gap={0} visibleFrom="sm">
              {/* <a href="#" className={headerClasses.link}>
                Home
              </a> */}
              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="#" className={headerClasses.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Marketplace
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.blue[6]}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>

                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>Features</Text>
                    <Anchor href="#" fz="xs">
                      View all
                    </Anchor>
                  </Group>

                  <Divider my="sm" />

                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>

                  <div className={headerClasses.dropdownFooter}>
                    <Group justify="space-between">
                      <div>
                        <Text fw={500} fz="sm">
                          Get started
                        </Text>
                        <Text size="xs" c="dimmed">
                          Their food sources have decreased, and their numbers
                        </Text>
                      </div>
                      <Button variant="default">Get started</Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
              {/* <a href="#" className={headerClasses.link}>
                Learn
              </a> */}
              <a href="#" className={headerClasses.link}>
                Your products
              </a>
            </Group>

            <Group visibleFrom="sm">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>

            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </header>

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />

            <a href="#" className={headerClasses.link}>
              Home
            </a>
            <UnstyledButton className={headerClasses.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Features
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
            <a href="#" className={headerClasses.link}>
              Learn
            </a>
            <a href="#" className={headerClasses.link}>
              Academy
            </a>

            <Divider my="sm" />

            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    </>
  );
};

export default Shop;
