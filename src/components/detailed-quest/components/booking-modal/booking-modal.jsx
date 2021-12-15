import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastMessage } from 'const';
import { sendRequest } from 'api/actions-api'
import 'react-toastify/dist/ReactToastify.css';

const BookingModal = ({onExitEvent}) => {
  const [formInfo, setFormInfo] = useState({
    name: '',
    peopleCount: null,
    phone: '',
    isLegal: false,
  });

  const dispatch = useDispatch();

  const validatePeople = (peopleCount) => {
    return peopleCount > 0;
  };
  const validatePhone = (phone) => {
    return /^[0-9]{10}$/.test(phone);
  };

  const peopleValid = validatePeople(formInfo.peopleCount);
  const phoneValid = validatePhone(formInfo.phone);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!phoneValid) {
      return (toast.info(ToastMessage.PHONE, {
        position: toast.POSITION.TOP_CENTER,
      }));
    }

    if (!peopleValid) {
      return (toast.info(ToastMessage.PEOPLE_COUNT, {
        position: toast.POSITION.TOP_CENTER,
      }));
    }

    if (phoneValid && peopleValid) {
      dispatch(sendRequest(formInfo));
      onExitEvent();
      toast.info(ToastMessage.SUCCESS, {
        position: toast.POSITION.TOP_CENTER,
      })
    }
  };

  return (
  <S.BlockLayer>
    <S.Modal>
      <S.ModalCloseBtn onClick={onExitEvent}>
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
            onInput={(evt) => setFormInfo({...formInfo, name: evt.target.value})}
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
            onInput={(evt) => setFormInfo({...formInfo, phone: evt.target.value})}
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
            onInput={(evt) => setFormInfo({...formInfo, peopleCount: +evt.target.value})}
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
            onChange={() => setFormInfo({...formInfo, isLegal: !formInfo.isLegal})}
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
