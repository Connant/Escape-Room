import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useEffect, useState } from 'react';
import { sendRequest } from '../../../../server-api/actions-api'


const BookingModal = () => {
  const [request, setRequest] = useState();
  const [userName, setUserName] = useState('');
  const [peopleCount, setPeopleCount] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [isLegal, setIsLegal] = useState(false);

  // useEffect(() => {
  //   if (request === null) {
  //   sendRequest(setSelectedValue);
  //   console.log(selectedValue)
  //   }
  // }, [request])


  const handleSubmit = (evt) => {
    evt.preventDefault();
    const requestData = {
      name: userName,
      peopleCount: peopleCount,
      phone: userPhone,
      isLegal: isLegal
    }
    sendRequest(requestData);
  }

  console.log(userName, peopleCount, userPhone, isLegal)

  return (
  <S.BlockLayer>
    <S.Modal>
      <S.ModalCloseBtn>
        <IconClose width="16" height="16" />
        <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
      </S.ModalCloseBtn>
      <S.ModalTitle>Оставить заявку</S.ModalTitle>
      <S.BookingForm
        action="https://echo.htmlacademy.ru"
        method="post"
        id="booking-form"
        onSubmit={handleSubmit}
      >
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
          <S.BookingInput
            type="text"
            id="booking-name"
            name="booking-name"
            placeholder="Имя"
            required
            value={userName}
            onChange={(evt) => setUserName(evt.currentTarget.value)}
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-phone">
            Контактный телефон
          </S.BookingLabel>
          <S.BookingInput
            type="tel"
            id="booking-phone"
            name="booking-phone"
            placeholder="Телефон"
            required
            value={userPhone}
            onChange={(evt) => setUserPhone(evt.currentTarget.value)}
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-people">
            Количество участников
          </S.BookingLabel>
          <S.BookingInput
            type="number"
            id="booking-people"
            name="booking-people"
            placeholder="Количество участников"
            required
            value={peopleCount}
            onChange={(evt) => setPeopleCount(Number.parseInt(evt.currentTarget.value))}
            onWheel={(e) => e.target.blur()}
          />
        </S.BookingField>
        <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
        <S.BookingCheckboxWrapper>
          <S.BookingCheckboxInput
            type="checkbox"
            id="booking-legal"
            name="booking-legal"
            required
            value={isLegal}
            onChange={(evt) => setIsLegal(evt.currentTarget.checked)}
          />
          <S.BookingCheckboxLabel
            className="checkbox-label"
            htmlFor="booking-legal"
          >
            <S.BookingCheckboxText>
              Я согласен с{' '}
              <S.BookingLegalLink href="#">
                правилами обработки персональных данных и пользовательским
                соглашением
              </S.BookingLegalLink>
            </S.BookingCheckboxText>
          </S.BookingCheckboxLabel>
        </S.BookingCheckboxWrapper>
      </S.BookingForm>
    </S.Modal>
  </S.BlockLayer>
)};

export default BookingModal;
