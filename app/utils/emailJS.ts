import emailjs from '@emailjs/browser';

interface IEmailForm {
  name: string;
  email: string;
  message: string;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  onError: VoidFunction;
  onSuccess: VoidFunction;
}

export const fetchEmailJS = async ({
  name,
  email,
  message,
  setLoading,
  onSuccess,
  onError,
}: IEmailForm) => {
  try {
    setLoading(true);
    await emailjs.send(
      'service_l3povrq',
      'template_84m4xfp',
      { name, email, message },
      'ufR-KZS0kTLwnQ6Ao'
    );
    onSuccess();
  } catch (error) {
    onError();
    console.log(error);
  }
};
