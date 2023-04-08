import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
const SocialLinks = () => {
  return (
    <article className='flex items-center justify-center w-full mt-6'>
      <p className='hidden text-2xl text-white xl:block'>Connect with me on:</p>
      <div className='flex px-6 '>
        <a href='https://www.linkedin.com/in/amitshuu/' target='_blank'>
          <AiFillLinkedin className='p-4 mx-2 text-6xl transition-all duration-100 border-2 rounded-full cursor-pointer text-primary-blue border-primary-blue hover:bg-primary-blue hover:text-black hover:transform hover:scale-110 ' />
        </a>
        <a href='https://github.com/amitshuu' target='_blank'>
          <AiFillGithub className='p-4 mx-2 text-6xl transition-all duration-100 border-2 rounded-full cursor-pointer text-primary-blue border-primary-blue hover:bg-primary-blue hover:text-black hover:transform hover:scale-110 ' />
        </a>
        <a href='https://wa.me/972549445667' target='_blank'>
          <BsWhatsapp className='p-4 mx-2 text-6xl transition-all duration-100 border-2 rounded-full cursor-pointer text-primary-blue border-primary-blue hover:bg-primary-blue hover:text-black hover:transform hover:scale-110 ' />
        </a>
        <a href='mailto:amitshuu@gmail.com'>
          <MdEmail className='p-4 mx-2 text-6xl transition-all duration-100 border-2 rounded-full cursor-pointer text-primary-blue border-primary-blue hover:bg-primary-blue hover:text-black hover:transform hover:scale-110 ' />
        </a>
      </div>
    </article>
  );
};

export default SocialLinks;
