interface FormDataTypes {
  firstForm: {
    phone: string;
    firstName: string;
    lastName: string;
    gender: string;
  };
  secondForm: {
    workPlace: string;
    address: string;
  };
  thirdForm: {
    loanSum: number;
    loanTerm: number;
  };
  formsAccepted: {
    first: boolean;
    second: boolean;
    third: boolean;
  };
}

type FormProps = [
  FormDataTypes,
  React.Dispatch<React.SetStateAction<FormDataTypes>>,
];

export type { FormDataTypes, FormProps };
