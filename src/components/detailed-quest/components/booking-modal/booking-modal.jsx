import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { validatePhone, validatePeopleCount } from 'utils';
import { ToastMessage } from 'const';
import { sendRequest } from 'store/actions-api'
import 'react-toastify/dist/ReactToastify.css';

const BookingModal = ({onExitEvent}) => {
  const [formData, setFormData] = useState({
    name: '',
    peopleCount: null,
    phone: '',
    isLegal: false,
  });

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const isPhoneValid = validatePhone(formData.phone);
    const isPeopleCountValid = validatePeopleCount(formData.peopleCount);

    if (!isPhoneValid) {
      return (toast.info(ToastMessage.PHONE, {
        position: toast.POSITION.TOP_CENTER,
      }));
    }

    if (!isPeopleCountValid) {
      return (toast.info(ToastMessage.PEOPLE_COUNT, {
        position: toast.POSITION.TOP_CENTER,
      }));
    }

    if (isPhoneValid && isPeopleCountValid) {
      dispatch(sendRequest(formData));
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
            onInput={(evt) => setFormData({...formData, name: evt.target.value})}
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
            onInput={(evt) => setFormData({...formData, phone: evt.target.value})}
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
            onInput={(evt) => setFormData({...formData, peopleCount: +evt.target.value})}
          />
        </S.BookingField>
        <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
        <S.BookingCheckboxWrapper>
          <S.BookingCheckboxInput
            type="checkbox"
            id="booking-legal"
            name="booking-legal"
            required
            onChange={() => setFormData({...formData, isLegal: !formData.isLegal})}
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
