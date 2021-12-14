import { useDispatch, useSelector } from 'react-redux';
import { getActualGenre } from 'store/selectors';
import { changeGenre } from 'store/actions';
import { QuestType, tabTypes, icons } from 'const';
import * as S from './quests-catalog.styled';

const QuestGenre = () => {
  const actualGenre = useSelector(getActualGenre);
  const dispatch = useDispatch();

  const genres = Object.values(QuestType);

  const handleTypeClick = (type) => {
    dispatch(changeGenre(genres[type]))
  }

  return (
    <S.Tabs>
      {icons.map((Icon, type) => (
          <S.TabItem key={genres[type]}>
            <S.TabBtn isActive={actualGenre === genres[type]} onClick={() => handleTypeClick(type)}>
              <Icon />
              <S.TabTitle>{tabTypes[type]}</S.TabTitle>
            </S.TabBtn>
          </S.TabItem>
      ))}
    </S.Tabs>
  );
}

export default QuestGenre;
