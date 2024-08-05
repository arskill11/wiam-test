import {
  Form,
  FormButton,
  FormInput,
  FormSelect,
  StyledPage,
  ValidationMessage,
} from './FirstForm.styles';

import { useNavigate, useOutletContext } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import type { FirstFormFields } from './types';
import { InputMask } from '@react-input/mask';
import {
  validateName,
  validatePhone,
  validateGender,
} from '../../shared/helpers/formValidation';
import type { FormProps } from '../../shared/types';

export const FirstForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FirstFormFields>();

  const navigate = useNavigate();
  const [formData, setFormData]: FormProps = useOutletContext();

  const handleNext = (data: FirstFormFields) => {
    setFormData({
      ...formData,
      firstForm: {
        phone: data.phone,
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender,
      },
      formsAccepted: {
        ...formData.formsAccepted,
        first: true,
      },
    });
    navigate('/second-form');
  };

  return (
    <StyledPage>
      <h2>Личные данные</h2>
      <Form onSubmit={handleSubmit(handleNext)}>
        <div className="input">
          <label htmlFor="phone">Номер телефона:</label>
          <InputMask
            defaultValue={formData.firstForm.phone}
            type="text"
            mask="0XXX XXX XXX"
            placeholder="0XXX XXX XXX"
            replacement={{ X: /\d/ }}
            {...register('phone', {
              required: 'Это обязательное поле',
              validate: (value) => validatePhone(value),
            })}
          />
          {errors.phone && (
            <ValidationMessage>{errors.phone.message}</ValidationMessage>
          )}
        </div>
        <div className="input">
          <label htmlFor="firstName">Имя</label>
          <FormInput
            defaultValue={formData.firstForm.firstName}
            type="text"
            placeholder="Имя"
            {...register('firstName', {
              required: 'Это обязательное поле',
              validate: (value) => validateName(value),
            })}
            id="firstName"
          />
          {errors.firstName && (
            <ValidationMessage>{errors.firstName.message}</ValidationMessage>
          )}
        </div>
        <div className="input">
          <label htmlFor="lastName">Фамилия</label>
          <FormInput
            defaultValue={formData.firstForm.lastName}
            type="text"
            placeholder="Фамилия"
            {...register('lastName', {
              required: 'Это обязательное поле',
              validate: (value) => validateName(value),
            })}
            id="lastName"
          />
          {errors.lastName && (
            <ValidationMessage>{errors.lastName.message}</ValidationMessage>
          )}
        </div>
        <div className="input">
          <label htmlFor="gender">Пол</label>
          <FormSelect
            defaultValue={formData.firstForm.gender}
            id="gender"
            {...register('gender', {
              required: 'Это обязательное поле',
              validate: (value) => validateGender(value),
            })}
          >
            <option value="">Выберите пол</option>
            <option value="мужской">Мужской</option>
            <option value="женский">Женский</option>
          </FormSelect>
          {errors.gender && (
            <ValidationMessage>{errors.gender.message}</ValidationMessage>
          )}
        </div>
        <FormButton type="submit">Далее</FormButton>
      </Form>
    </StyledPage>
  );
};
