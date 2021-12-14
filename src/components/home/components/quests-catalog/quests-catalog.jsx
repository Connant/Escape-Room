import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeGenre } from 'store/actions'
import { getQuests, getActualGenre } from 'store/selectors';
import { AppRoute, LevelOfDifficultyAdapt, QuestType } from 'const';
import { filterQuestsByType } from 'utils';
import QuestGenre from './quest-genre';

const QuestsCatalog = () => {
  const quests = useSelector(getQuests);
  const actualGenre = useSelector(getActualGenre);
  const dispatch = useDispatch();
  const [sortedQuests, setSortedQuests] = useState([]);

  useEffect(() => {
    if (!sortedQuests.length) {
      dispatch(changeGenre(QuestType.ALL));
    }
  })

  useEffect(() => {
    setSortedQuests(filterQuestsByType(quests, actualGenre));
  }, [actualGenre, quests]);


  return (
  <React.Fragment>

    <QuestGenre />

    <S.QuestsList>

    {sortedQuests.map((quest) => (
      <S.QuestItem key={quest.id}>
        <S.QuestItemLink to={AppRoute.Quest.replace(':id', `${quest.id}`)}>
          <S.Quest>
            <S.QuestImage
              src={quest.previewImg}
              width="344"
              height="232"
              alt={quest.title}
            />

            <S.QuestContent>
              <S.QuestTitle>{quest.title}</S.QuestTitle>

              <S.QuestFeatures>
                <S.QuestFeatureItem>
                  <IconPerson />
                  {quest.peopleCount[0]+'-'+quest.peopleCount[1]}
                </S.QuestFeatureItem>
                <S.QuestFeatureItem>
                  <IconPuzzle />
                  {LevelOfDifficultyAdapt[quest.level.toUpperCase()]}
                </S.QuestFeatureItem>
              </S.QuestFeatures>
            </S.QuestContent>
          </S.Quest>
        </S.QuestItemLink>
      </S.QuestItem>
    ))}
    </S.QuestsList>
  </React.Fragment>
  )};

export default QuestsCatalog;
