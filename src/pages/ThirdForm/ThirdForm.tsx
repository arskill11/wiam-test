import { useEffect, useState } from 'react';
import {
  Form,
  FormButton,
  FormInput,
  RedFormButton,
  StyledPage,
} from './ThirdForm.styles';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ThirdFormFields } from './types';
import { FormProps } from '../../shared/types';
import sendUserData from '../../api/userData';
import { Modal } from '../../components/Modal';
import { initialFormData } from '../../App';

const initialLoanSum = 200;
const initialLoanTerm = 10;

export const ThirdForm = () => {
  const [loanSum, setLoanSum] = useState<number>(initialLoanSum);
  const [loanTerm, setLoanTerm] = useState<number>(initialLoanTerm);
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData]: FormProps = useOutletContext();

  const { register, handleSubmit } = useForm<ThirdFormFields>();

  const navigate = useNavigate();

  const handleNext = async (data: ThirdFormFields) => {
    setFormData({
      ...formData,
      thirdForm: {
        loanSum: data.loanSum,
        loanTerm: data.loanTerm,
      },
      formsAccepted: {
        ...formData.formsAccepted,
        third: true,
      },
    });

    const response = await sendUserData(
      formData.firstForm.firstName,
      formData.firstForm.lastName,
    );
    if (response.status === 201) {
      setIsSent(true);
    }

    setTimeout(() => {
      navigate('/');
      setIsSent(false);
      setFormData(initialFormData);
    }, 3000);
  };

  useEffect(() => {
    setLoanTerm(formData.thirdForm.loanTerm);
    setLoanSum(formData.thirdForm.loanSum);

    if (!formData.formsAccepted.first || !formData.formsAccepted.second) {
      navigate('/');
      return;
    }
  }, []);

  const handlePrevious = () => {
    navigate('/second-form');
  };

  const handleLoanSumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoanSum(+e.target.value);
  };

  const handleLoanTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoanTerm(+e.target.value);
  };

  return (
    <>
      <StyledPage className={isSent ? 'blur' : ''}>
        <h2>Параметры займа</h2>
        <Form onSubmit={handleSubmit(handleNext)}>
          <div className="input">
            <label htmlFor="loanSum">Сумма займа</label>
            <div className="values">
              <p>200$</p>
              <p>{loanSum}$</p>
              <p>1000$</p>
            </div>
            <FormInput
              type="range"
              min="200"
              max="1000"
              step="100"
              {...register('loanSum', {
                required: 'Это обязательное поле',
              })}
              defaultValue={formData.thirdForm.loanSum}
              onChange={handleLoanSumChange}
              id="loanSum"
            />
          </div>
          <div className="input">
            <label htmlFor="loanTerm">Срок займа (в днях)</label>
            <div className="values">
              <p>10</p>
              <p>{loanTerm}</p>
              <p>30</p>
            </div>
            <FormInput
              type="range"
              min="10"
              max="30"
              step="1"
              {...register('loanTerm', {
                required: 'Это обязательное поле',
              })}
              defaultValue={formData.thirdForm.loanTerm}
              onChange={handleLoanTermChange}
              id="loanTerm"
            />
          </div>

          <div className="buttons">
            <RedFormButton type="button" onClick={handlePrevious}>
              Назад
            </RedFormButton>
            <FormButton type="submit">Далее</FormButton>
          </div>
        </Form>
      </StyledPage>
      {isSent && (
        <Modal
          firstName={formData.firstForm.firstName}
          lastName={formData.firstForm.lastName}
          loanSum={formData.thirdForm.loanSum}
          loanTerm={formData.thirdForm.loanTerm}
        />
      )}
    </>
  );
};
