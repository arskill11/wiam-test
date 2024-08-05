import { useEffect, useState } from 'react';
import {
  Form,
  FormButton,
  FormInput,
  FormSelect,
  RedFormButton,
  StyledPage,
  ValidationMessage,
} from './SecondForm.styles';

import { useNavigate, useOutletContext } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import type { SecondFormFields } from './types';
import { fetchWorkPlaces } from '../../api/workPlaces';
import { FormProps } from '../../shared/types';

export const SecondForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SecondFormFields>();

  const [workPlaces, setWorkPlaces] = useState<string[]>([]);
  const [formData, setFormData]: FormProps = useOutletContext();

  useEffect(() => {
    const dataFetch = async () => {
      const data: string[] = await fetchWorkPlaces();
      setWorkPlaces(data);
    };

    if (!formData.formsAccepted.first) {
      navigate('/');
      return;
    }

    dataFetch();
  }, []);

  const handleNext = (data: SecondFormFields) => {
    setFormData({
      ...formData,
      secondForm: {
        workPlace: data.workPlace,
        address: data.address,
      },
      formsAccepted: {
        ...formData.formsAccepted,
        second: true,
      },
    });
    navigate('/third-form');
  };

  const handlePrevious = () => {
    navigate('/first-form');
  };

  return (
    <StyledPage>
      <h2>Адрес и место работы</h2>
      <Form onSubmit={handleSubmit(handleNext)}>
        <div className="input">
          <label htmlFor="workPlace">Место работы</label>
          <FormSelect
            id="workPlace"
            {...register('workPlace', {
              required: 'Это обязательное поле',
            })}
          >
            <option value={formData.secondForm.workPlace}>
              {formData.secondForm.workPlace}
            </option>
            {workPlaces.map((place, id) => {
              return (
                <option key={id} value={place}>
                  {place}
                </option>
              );
            })}
          </FormSelect>
          {errors.workPlace && (
            <ValidationMessage>{errors.workPlace.message}</ValidationMessage>
          )}
        </div>
        <div className="input">
          <label htmlFor="address">Адрес проживания</label>
          <FormInput
            defaultValue={formData.secondForm.address}
            type="text"
            placeholder="Адрес"
            id="address"
            {...register('address', {
              required: 'Это обязательное поле',
            })}
          />
          {errors.address && (
            <ValidationMessage>{errors.address.message}</ValidationMessage>
          )}
        </div>
        <div className="buttons">
          <RedFormButton type="button" onClick={handlePrevious}>
            Назад
          </RedFormButton>
          <FormButton type="submit">Далее</FormButton>
        </div>
      </Form>
    </StyledPage>
  );
};
