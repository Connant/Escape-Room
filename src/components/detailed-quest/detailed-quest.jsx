import { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';

import { fetchQuest } from 'server-api/actions-api';
import { AppRoute } from 'const';
import Error from 'components/error/error';

const DetailedQuest = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const { id } = useParams();

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  useEffect(() => {
    if (selectedValue === null) {
      fetchQuest(id, setSelectedValue);
      console.log(selectedValue)
    }
  })

  return (selectedValue === null ? 'Loading...' :
  ((selectedValue !== -1 && !isNaN(id)) ? (
      <MainLayout>
        {isNaN(id) ? <Redirect to={AppRoute.Error} /> : ''}
      <S.Main key={selectedValue.id}>
        <S.PageImage
          src={`/${selectedValue.coverImg}`}
          alt={selectedValue.title}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{selectedValue.title}</S.PageTitle>
            <S.PageSubtitle>{selectedValue.type}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{selectedValue.duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{selectedValue.peopleCount[0]+'-'+selectedValue.peopleCount[1]} чел</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{selectedValue.level}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {selectedValue.description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal />}
      </S.Main>
      </MainLayout>
  ): <Error />))
};

export default DetailedQuest;
