import { useReducer } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ValidationState {
  email: boolean;
  message: boolean;
}

interface ContactFormState {
  formData: FormData;
  sending: boolean;
  sendingFailed: boolean;
  failedValidation: ValidationState;
  validationErrorMessage: {
    email: string;
    message: string;
  };
}

interface Action {
  type: string;
  [key: string]: any;
}

interface UseContactFormReturn {
  setFormData: (formData: FormData) => void;
  setSending: (sending: boolean) => void;
  setSendingFailed: (failed: boolean) => void;
  setFailedValidation: (validation: ValidationState) => void;
  setValidationErrorMessage: (messages: { email: string; message: string }) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  validate: () => boolean;
  state: ContactFormState;
}

export default function useContactForm(): UseContactFormReturn {
  const SET_FORM_DATA = "SET_FORM_DATA";
  const SET_SENDING = "SET_SENDING";
  const SET_SENDING_FAILED = "SET_SENDING_FAILED";
  const SET_FAILED_VALIDATION = "SET_FAILED_VALIDATION";
  const SET_VALIDATION_ERROR_MESSAGE = "SET_VALIDATION_ERROR_MESSAGE";

  const initialState: ContactFormState = {
    formData: {
      name: "",
      email: "",
      message: "",
    },
    sending: false,
    sendingFailed: false,
    failedValidation: {
      email: false,
      message: false,
    },
    validationErrorMessage: {
      email: "",
      message: "",
    },
  };

  const reducer = (state: ContactFormState, action: Action): ContactFormState => {
    switch (action.type) {
      case SET_FORM_DATA:
        return { ...state, formData: action.formData };
      case SET_SENDING:
        return { ...state, sending: action.sending };
      case SET_SENDING_FAILED:
        return { ...state, sendingFailed: action.sendingFailed };
      case SET_FAILED_VALIDATION:
        return { ...state, failedValidation: action.failedValidation };
      case SET_VALIDATION_ERROR_MESSAGE:
        return {
          ...state,
          validationErrorMessage: action.validationErrorMessage,
        };
      default:
        throw new Error(`Tried to reduce with wrong action: ${action.type}`);
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setFormData = (formData: FormData) => dispatch({ type: SET_FORM_DATA, formData });
  const setSending = (sending: boolean) => dispatch({ type: SET_SENDING, sending });
  const setSendingFailed = (sendingFailed: boolean) => dispatch({ type: SET_SENDING_FAILED, sendingFailed });
  const setFailedValidation = (failedValidation: ValidationState) =>
    dispatch({ type: SET_FAILED_VALIDATION, failedValidation });
  const setValidationErrorMessage = (validationErrorMessage: { email: string; message: string }) =>
    dispatch({ type: SET_VALIDATION_ERROR_MESSAGE, validationErrorMessage });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.preventDefault();
    setFormData({
      ...state.formData,
      [event.target.name]: event.target.value,
    });
  };

  const validate = (): boolean => {
    let allowSubmit = true;
    if (state.formData.message === "") {
      setFailedValidation({ ...state.failedValidation, message: true });
      setValidationErrorMessage({
        ...state.validationErrorMessage,
        message: "Please tell me the reason for your contact request",
      });
      allowSubmit = false;
    }
    if (state.formData.email === "") {
      setFailedValidation({ ...state.failedValidation, email: true });
      setValidationErrorMessage({
        ...state.validationErrorMessage,
        email: "I'll need your email to contact you back",
      });
      allowSubmit = false;
    }

    return allowSubmit;
  };

  return {
    setFormData,
    setSending,
    setSendingFailed,
    setFailedValidation,
    setValidationErrorMessage,
    handleChange,
    validate,
    state,
  };
}
