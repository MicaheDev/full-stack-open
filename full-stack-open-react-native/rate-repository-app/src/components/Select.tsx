import { styled } from 'nativewind';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { List, Menu } from 'react-native-paper';

const MenuItem = styled(Menu.Item);

export default function Select({
  order,
  setOrder,
}: {
  order: { orderBy: string; orderDirection: string };
  setOrder: Dispatch<
    SetStateAction<{ orderBy: string; orderDirection: string }>
  >;
}) {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('Latest repositories');

  const closeMenu = () => setVisible(false);

  function setLatest() {
    setOrder({ orderBy: 'CREATED_AT', orderDirection: 'DESC' });
  }
  function setHighest() {
    setOrder({ orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' });
  }
  function setLowest() {
    setOrder({ orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' });
  }


  function setOrderTitle() {
    if (order.orderBy === 'CREATED_AT') {
      setTitle('Latest repositories');
    } else if (
      order.orderBy === 'RATING_AVERAGE' &&
      order.orderDirection === 'DESC'
    ) {
      setTitle('Highest rated repositories');
    } else {
      setTitle('Lowest rated repositories');
    }
  }
  
  useEffect(() => {
    setOrderTitle();
  }, [order]);


  return (
    <List.Accordion
      expanded={visible}
      title={title}
      onPress={() => setVisible(!visible)}
    >
      <MenuItem
        onPress={() => {
          setLatest();
          closeMenu();
          setOrderTitle();
        }}
        title="Latest repositories"
      />
      <MenuItem
        onPress={() => {
          setHighest();
          closeMenu();
          setOrderTitle();
        }}
        title="Highest rated repositories"
      />
      <MenuItem
        onPress={() => {
          setLowest();
          closeMenu();
          setOrderTitle();
        }}
        title="Lowest rated repositories"
      />
    </List.Accordion>
  );
}
