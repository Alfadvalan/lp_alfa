import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns'; 
import logo_color from './assets/logo_color.png';
import mobi from './assets/mobi.png';
import Accordion from './components/Accordion';
import Component_3 from './assets/Component_3.png';
import Component_4 from './assets/Component_4.png';
import Component_5 from './assets/Component_5.png';
import Component_6 from './assets/Component_6.png';
import Component_7 from './assets/Component_7.svg';
import logo from './assets/logo.png';
import { FaWhatsapp } from "react-icons/fa";



// interface Option {
//   value: string;
//   label: string;
// }

function App() {
  const navigate = useNavigate();

  const HelpMessage = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setIsVisible((prevVisibility) => !prevVisibility);
      }, 5000);

      return () => clearInterval(intervalId);
    }, []);

    return (
      <p className={`bg-white fixed bottom-[22vw] text-center right-5 p-2 rounded-lg text-[3.5vw] md:hidden ${isVisible ? '' : 'hidden'}`}>Converse com um consultor</p>
    );
  };

  // const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  // const [isDropdownOpen, setDropdownOpen] = useState(false);

  // const options: Option[] = [
  //   { value: 'carro', label: 'Carro' },
  //   { value: 'moto', label: 'Moto' },
  //   { value: 'caminhão', label: 'Caminhão' },
  //   { value: 'bicicleta', label: 'Bicicleta' },
  // ];

  // const handleOptionChange = (option: Option) => {
  //   if (selectedOptions.some((item) => item.value === option.value)) {
  //     setSelectedOptions(selectedOptions.filter((item) => item.value !== option.value));
  //   } else {
  //     setSelectedOptions([...selectedOptions, option]);
  //   }
  // };

  // const toggleDropdown = () => {
  //   setDropdownOpen(!isDropdownOpen);
  // };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentDateTime = new Date();
    const formattedDateTime = format(currentDateTime, "dd-MM-yyyy HH:mm:ss");
  
    const formData = {
      Nome: e.currentTarget.Nome.value,
      Whatsapp: e.currentTarget.Whatsapp.value,
      // Veiculo: selectedOptions.map(option => option.label).join(', '),
      DataHoraPreenchimento: formattedDateTime,
    };
  
    console.log('Dados do formulário antes do envio:', formData);
  
    try {
      const response = await fetch(import.meta.env.VITE_REACT_APP_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Dados enviados com sucesso!');
        console.log('Redirecionando...');
        navigate('/video')
      } else {
        console.error('Erro ao enviar dados:', response.status, response.statusText);
        
        // Adicione esta parte para logar a resposta da API em caso de erro
        const responseData = await response.json();
        console.error('Resposta da API:', responseData);

        if (window.location.pathname !== '/VideoScreen') {
          console.error('Rota não encontrada: /video');
        }
      }
    } catch (error) {
      console.error('Erro durante a requisição:', error);
    }
  };
  

  const list = ([
    {
      question: "O que é proteção veicular?",
      answer: "A proteção veicular é mais do que um serviço, é a garantia de tranquilidade para quem está ao volante. Na Alfa, entendemos que proteger seu veículo vai além de um simples contrato. É um compromisso com você em qualquer jornada. Oferecemos coberturas abrangentes assistência 24 horas e a certeza de que em cada quilômetro estamos ao seu lado.",
    },
    {
      question: "Quem pode se associar a Alfa?",
      answer: "Para ser associado Alfa basta ser habilitado e possuir um veículo seja CARRO, MOTO, CAMINHÃO, BICICLETA. Não consultamos o Serviço de Proteção ao Credito(SPC).",
    },
    {
      question: "Onde a Alfa atende?",
      answer: "Atendemos em todo o território brasileiro, e temos escritórios no Ceará, Rio Grande do Norte e Pernambuco.",
    },
    {
      question: "Existe pagamento da adesão?",
      answer: "Na Alfa não temos pagamento de Adesão, no primeiro mês você vai pagar a mensalidades e mais algumas taxas, como taxa de rastreador...",
    },
    {
      question: "Na Alfa tem fidelidade?",
      answer: "Não, não temos. Você pode cancelar a qualquer momento sem pagar nada a mais.",
    }
  ]);

  const ScrollDownArrow = () => {
    const scrollToBottom = () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    };
  
    return (
      <div className='absolute left-1/2 bottom-8 lg:-bottom-16'>
        <button onClick={scrollToBottom} className=''>
          <img src={Component_7} alt="Custom Icon" className="h-8 md:h-12 "></img>
        </button>
      </div>
    );
  };

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior:'smooth',
    });
  };

  const onClick = () => {
    navigate('./terms')
  };

  return (
    <div className='overflow-x-hidden w-full bg-blue flex flex-col font-montserrat items-center'>
      <header className='bg-white h-10 w-full flex flex-row items-center justify-evenly lg:justify-around md:h-16 lg:h-20'>

          <img src={logo_color} alt='logo' className='w-32 md:w-48 lg:w-60 cursor-pointer' />
          <a className='bg-green-500 py-1 px-2 text-sm rounded-lg shadow-bs1 text-white font-bold md:flex gap-2 items-center justify-around md:text-lg lg:py-3 lg:px-6 md:py-2 md:px-3 cursor-pointer hidden' href='https://bit.ly/3Sk88LS'>
            <FaWhatsapp className='lg:w-6 lg:h-6 w-3 h-3 md:w-5 md:h-5'/>
            Fale conosco
          </a>

      </header>
      <section className='h-full w-full bg-bg-sm md:bg-bg-mid lg:bg-bg-image bg-cover  '>
        <div className='flex items-center justify-center lg:justify-start lg:ml-44 h-screen m-2'>
          <div className='backdrop-blur-lg bg-black/10 border-0 rounded-3xl flex flex-col justify-center items-center p-5 w-full md:w-[600px] lg:w-[480px] lg:h-[480px]'>
            <div className=''>
              <h1 className='uppercase text-white text-xl font-extrabold text-center md:text-4xl md:mt-10 lg:text-2xl'>
                proteção completa <br /> para o seu veículo
              </h1>
              <p className='text-white font-semibold text-[14px] mx-2 my-1 text-center md:text-xl lg:text-base'>
              preencha o formulário que em instantes <br /> a nossa equipe entrará em contato. 
              </p>
            </div>
            <div>
              <form className='flex flex-col items-center justify-center md:m-5 lg:m-0 lg:gap-5' onSubmit={handleFormSubmit}>
                <input
                  name='Nome' 
                  placeholder='Nome*' 
                  required
                  type='text'
                  className='w-full px-3 py-2 rounded-lg m-1 md:w-[460px] md:py-4 md:mb-4 md:text-2xl lg:text-lg lg:w-[400px] lg:mb-1 lg:py-3'
                />
                <InputMask
                  mask ='(99) 99999-9999'
                  name='Whatsapp' 
                  placeholder='Whatsapp*'
                  required 
                  type='tel'
                  className='w-full px-3 py-2 rounded-lg m-1 md:w-[460px] md:py-4 md:mb-4 md:text-2xl lg:text-lg lg:w-[400px] lg:mb-1 lg:py-3'
                />
                {/*<div className='py-1 rounded-lg'>
                  <div
                    className='bg-white cursor-pointer flex justify-between px-4 py-2 rounded-lg w-80 text-black/80 md:w-[460px] md:py-4 md:mb-3 md:text-2xl lg:text-lg lg:w-[400px] lg:mb-1 lg:py-3'
                    onClick={toggleDropdown}
                  >
                    Qual o seu veículo?
                    <span className=''>▼</span>
                  </div>
                  {isDropdownOpen && (
                    <div className='absolute bg-white cursor-pointer flex flex-col justify-between px-4 py-2 rounded-lg w-56 mt-1 md:w-[460px] md:text-2xl lg:text-lg lg:w-[400px]'>
                      {options.map((option) => (
                        <label key={option.value} className='block'>
                          <input
                            type='checkbox'
                            value={option.value}
                            checked={selectedOptions.some((item) => item.value === option.value)}
                            key={option.value}
                            name='Veiculo'
                            onChange={() => handleOptionChange(option)}
                            className='lg:w-5 md:w-3 md:h-3'
                          />
                          {option.label}
                        </label>
                      ))}
                    </div>
                  )}
                      </div>*/}
                <button className='bg-red-700 rounded-lg text-white uppercase font-extrabold p-3 text-xs my-3 hover:animate-spin shadow-bs1 hover:shadow-red-700/80 shadow-red-700/50 hover:scale-[1.03] md:p-5 md:text-xl md:mt-10 lg:mb-5 lg:my-0 lg:mx-12 lg:text-base'>quero proteger meu veículo</button>
              </form>
              <p className='text-white text-center px-9 md:px-20 lg:px-10 md:text-xs text-[8px]'>Ao preencher o formulário, concordo em receber comunicação e estou de acordo com os <a onClick={onClick} className='cursor-pointer underline font-semibold'>termos de uso</a>.</p>
            </div>
          </div>
        </div>
        <ScrollDownArrow />
      </section>
      <section className='w-full h-full bg-white flex flex-col items-center justify-center '>
        <div className='my-10'>
          <div className=''>
            <h1 className='uppercase text-blue font-extrabold text-center text-lg md:text-5xl md:my-10'>benefícios que o <br />associado <span className='text-red-700'>alfa</span> tem</h1>
          </div>
          <div className='sm:grid sm:grid-cols-2 sm:p-4 sm:items-center sm:justify-center lg:flex'>
            <div className=''>
              <img src={Component_3} alt='acidente' className='hover:scale-[1.1] md:scale-90' />
            </div>
            <div className=''>
              <img src={Component_4} alt='telefone' className='hover:scale-[1.1] md:scale-90 cove'/>
            </div>
            <div className=''>
              <img src={Component_5} alt='mapa' className='hover:scale-[1.1] md:scale-90'/>
            </div>
            <div className=''>
              <img src={Component_6} alt='carro/moto' className='hover:scale-[1.1] md:scale-90'/>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <button onClick={ScrollToTop} className='bg-red-700 rounded-lg text-white uppercase font-extrabold p-3 m-5 my-2 text-xs hover:animate-spin shadow-bs1 hover:shadow-red-700/80 shadow-red-700/50 hover:scale-[1.03] md:p-8 md:text-2xl md:mb-10'>quero proteger meu veículo</button>
          </div>
        </div>
      </section>
      <section className='flex flex-col lg:w-full'>
        <div className='flex items-center justify-center lg:justify-between p-5'>
            <div className='w-full h-full md:px-10'>
              <div className=''>
                <h1 className='capitalize text-white font-extrabold text-3xl text-center my-10 md:text-5xl'>dúvidas frequentes</h1>
              </div>
              <div className='list md:py-5'>
                {
                    list.map((item, key) => (
                      <Accordion key={key} datas={item} />
                    ))
                }
              </div>
            </div>
            <div className='hidden lg:w-full lg:h-full lg:block'>
              <img 
                src={mobi}
                alt='carro'
                className='lg:relative lg:w-full lg:scale-[1.3] lg:ml-20'  
              />
            </div>
        </div>
        <div className='flex items-center justify-center mb-5'>
          <button onClick={ScrollToTop} className='bg-red-700 rounded-lg text-white uppercase font-extrabold p-3 m-5 my-2 text-xs hover:animate-spin shadow-bs1 hover:shadow-red-700/80 shadow-red-700/50 hover:scale-[1.03] md:p-8 md:text-2xl md:mb-10'>quero proteger meu veículo</button>
        </div>
      </section>
      <div className='flex'>
        <HelpMessage />
        <a className='bg-green-500 py-2 px-2 rounded-full shadow-bs1 text-white font-bold md:hidden gap-2 cursor-pointer fixed bottom-5 right-5' href='https://bit.ly/3Sk88LS'>
          <FaWhatsapp className='w-[5vh] h-[5vh]'/>
        </a>
      </div>
      <footer className='flex items-center justify-around w-full h-10 bg-[#353535] md:h-20'>
        <div className='flex w-full items-center justify-between'>
          <div className='flex justify-center w-full'>
            <img src={logo} alt="alfa logo" className='w-20 md:w-36 lg:w-44' />
          </div>
          <div className='flex flex-col items-center justify-center w-full'>
            <h2 className=' text-white md:text-base text-[8px]'>CNPJ: 36.117.103/0001-83</h2>
            <h2 className=' text-white md:text-base text-[8px]'>Telefone: (81) 3771-4938</h2>
          </div>
          <div className='flex justify-center w-full'>
            <h2 className=' text-white md:text-base text-[8px]'>{(new Date().getFullYear())} - Copyright ©</h2>
          </div>    
        </div>
      </footer>
    </div>
  )
}

export default App;