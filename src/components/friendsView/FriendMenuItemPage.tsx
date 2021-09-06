import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import allActions from '../../state/actions/allActions';
import styled from 'styled-components';
import { OrangeButton, OrangeNavbar, HeaderImage } from '../../styles/shared';
import MenuItemIncrementor from '../Menu/MenuItemIncrementor';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

const MainConatiner = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CheckoutButton = styled(OrangeButton)`
  border-radius: 7px;
  width: 50%;
`;

const StyledDescription = styled.p`
  margin: 10%;
  font-family: Helvetica-light;
  font-size: 16px;
  text-align: center;
`;

const FoodName = styled(motion.h2)`
  font-family: Helvetica;
  font-size: 24px;
  text-align: center;
`;

export default function FriendMenuItemPage() {
  const currentOrder = useAppSelector((state) => state.orders.currentOrder);
  const item = useAppSelector((state) => state.item);
  const dispatch = useAppDispatch();
  const totalPrice = item.price * item.count;
  const history = useHistory();

  function handleClick() {
    if (item.count === 0) {
      return;
    }
    dispatch(allActions.addToPriceTotal(totalPrice));
    dispatch(allActions.addItemToOrders(currentOrder));
    history.push('/Menu/Friends');
  }

  React.useEffect(() => {
    dispatch(allActions.updateTotalPrice(totalPrice.toFixed(2)));
  }, [item]);

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.9,
      y: '50%',
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        type: 'tween',
      },
    },
    out: {
      opacity: 0,

      scale: 0.9,
      y: '50%',
      transition: {
        duration: 0.2,
        type: 'tween',
      },
    },
  };

  return (
    <>
      <OrangeNavbar />
      <HeaderImage src={currentOrder.restaurant_id === 1 ? '/Dannys_bg.png' : '/Bowl.png'} />
      <FoodName
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {currentOrder.food}
      </FoodName>
      <MainConatiner initial="initial" animate="in" exit="out" variants={pageVariants}>
        <StyledDescription>{item.description}</StyledDescription>
        <p>${item.price}</p>
        <MenuItemIncrementor />
        <CheckoutButton onClick={handleClick}>
          Add to order{`(${item.count})`} ${totalPrice.toFixed(2)}
        </CheckoutButton>
      </MainConatiner>
    </>
  );
}
