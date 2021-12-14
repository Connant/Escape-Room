import { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';

import { fetchQuest } from 'store/actions-api';
import { AppRoute, QuestTypeAdapt, LevelOfDifficultyAdapt } from 'const';
import { getActualQuest } from 'store/selectors';
import Error from 'components/error/error';


const DetailedQuest = () => {
  const actualQuest = useSelector(getActualQuest);
  const dispatch = useDispatch();

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const { id } = useParams();
  const questId = Number(id);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const onExitEvent = () => {
    setIsBookingModalOpened(false);
  };

  useEffect(() => {
    if (isNaN(questId)) {
      return function cleanup() {
        <Redirect to={AppRoute.Error} />;
      };
    }
    if (actualQuest.id !== questId) {
      dispatch(fetchQuest(questId));
    }
  });

  if (!actualQuest && actualQuest.id !== questId) {
    return <Error />;
  }

  if (actualQuest.id !== questId) {
    return (
      'Loading...'
    );
  }

  return (
      <MainLayout>
        {isNaN(id) ? <Redirect to={AppRoute.Error} /> : ''}
      <S.Main key={id}>
        <S.PageImage
          src={`/${actualQuest.coverImg}`}
          alt={actualQuest.title}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{actualQuest.title}</S.PageTitle>
            <S.PageSubtitle>{QuestTypeAdapt[actualQuest.type]}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{actualQuest.duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{actualQuest.peopleCount[0]+'-'+actualQuest.peopleCount[1]} чел</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{LevelOfDifficultyAdapt[actualQuest.level.toUpperCase()]}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {actualQuest.description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onExitEvent={onExitEvent} />}
      </S.Main>
      </MainLayout>
  )
};

export default DetailedQuest;
