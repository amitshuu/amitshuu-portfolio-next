import { useState, useEffect } from "react";

export const useMobile = (callback: VoidFunction) => {
  const [windowDimension, setWindowDimension] = useState(0);

  const isMobile = windowDimension <= 768;

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    if (!isMobile) {
      callback();
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile, callback]);

  return isMobile;
};

export const useForm = (callback: () => void, initialState: any) => {
  const [values, setValues] = useState(initialState);

  const onChange = (e: React.ChangeEvent<any>): void => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: React.ChangeEvent<any>): void => {
    e.preventDefault();
    callback();
  };

  return {
    values,
    onChange,
    onSubmit,
    setValues,
  };
};

export const usePageScroll = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 150);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return visible;
};
