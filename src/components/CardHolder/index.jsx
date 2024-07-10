import FlexWrapper from '../FlexWrapper';
import { nftDetails } from './data';

import CardDetails from '../CardData';
import { useDispatch, useSelector } from 'react-redux';
import { setCards } from '../../features/cards/cardsSlice';
import { Divider } from '@chakra-ui/react';

function CardHolder() {
  const dispatch = useDispatch();
  dispatch(setCards(nftDetails));

  const { cards } = useSelector((state) => state.cards);

  const { buyCards } = useSelector((state) => state.buyCards);

  return (
    <>
      <FlexWrapper>
        {cards.map((item) => {
          return <CardDetails {...item} cardName={'card'} />;
        })}
      </FlexWrapper>
      <Divider />
      <FlexWrapper>
        {buyCards.map((item) => {
          return <CardDetails {...item} cardName={'buyCards'} />;
        })}
      </FlexWrapper>
    </>
  );
}

export default CardHolder;
