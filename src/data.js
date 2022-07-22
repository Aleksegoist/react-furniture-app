// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from 'react-icons/io';

// import images
import Features1Img from './assets/img/features-1.png';
import Features2Img from './assets/img/features-2.png';
import ChairImg from './assets/img/chair.png';
import MdfFarba from './assets/img/bed11.png';

import BedImg from './assets/img/bed.png';
import CupboardImg from './assets/img/cupboard.png';
import LightingImg from './assets/img/lighting.png';
import Product1Img from './assets/img/products/product-1.png';
import Product2Img from './assets/img/products/product-2.png';
import Product3Img from './assets/img/products/product-3.png';
import Product4Img from './assets/img/products/product-4.png';
import Product5Img from './assets/img/products/product-5.png';
import Product6Img from './assets/img/products/product-6.png';
import Product7Img from './assets/img/products/product-7.png';
import Product8Img from './assets/img/products/product-8.png';
import Product9Img from './assets/img/products/product-9.png';
import Product10Img from './assets/img/products/product-10.png';
import TestimonialImg from './assets/img/testimonial.jpeg';
import Avatar1Img from './assets/img/avatar-1.png';
import Avatar2Img from './assets/img/avatar-2.png';
import Avatar3Img from './assets/img/avatar-3.png';
// import Avatar4Img from './assets/img/avatar-4.png';

export const navigation = [
  {
    name: 'Головна',
    href: 'home',
  },
  {
    name: 'Про нас',
    href: 'about',
  },
  {
    name: 'Меблі',
    href: 'features',
  },
  {
    name: 'Контакти',
    href: 'contact',
  },
];

export const hero = {
  title: 'Створимо меблі твоєї мрії',
  subtitle:
    'Ми створимо саме такі меблі, які захочете Ви, за Вашими розмірами та різноманітними побажаннями',
  buttonText: 'Замовити',
};

export const stats = [
  {
    value: '14',
    text: 'Років досвіду',
  },
  {
    value: '2',
    text: 'Роки гарантії',
  },
  {
    value: '5k+',
    text: 'Продано одиниць',
  },
  {
    value: '100+',
    text: 'Варіантів кольорів',
  },
];

export const features = {
  image: <Features1Img />,
  title: 'Ми створимо дуже приємну атмосферу у Вашій оселі',
  subtitle: 'Ми пропонуємо:',
  buttonText: 'Замовити',
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Професійний замір приміщення',
      subtitle:
        'Перед замовленням меблів, наш майстер професійно зробить заміри приміщення та місце, де будуть встановлені меблі.',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Вибір матеріалів',
      subtitle:
        'Ми допоможемо підібрати матеріали та проконсультувати по якості та вартості.',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Індивідуальний проект',
      subtitle:
        'Розробка індивідуального проекту, з урахуванням всіх побажань замовника.',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Виготовлення та встановлення',
      subtitle:
        'Виготовлення в найкоротші строки та професійна сборка та монтаж.',
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: 'Професійна фурнітура',
    subtitle:
      "Ми використовуємо якісну меблеву фурнітуру відомих брендів, тому що це запорука тривалої експлуатації виробів, а також неперевершений зовнішній вигляд меблів. Також необхідно пам'ятати, що зручніть користування залежить від якості механізму.",
  },
};

export const materialFurniture = {
  title: 'Матеріали виробництва',
  subtitle: 'Ми працюємо з більшістю матеріалів, які є на ринку ',
  link: 'Дивитись всі',
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: 'МДФ плівковий',
      image: <ChairImg />,
    },
    {
      name: 'МДФ фарба',
      image: <MdfFarba />,
    },
    {
      name: 'ДСП',
      image: <BedImg />,
    },
    {
      name: 'Шпон',
      image: <CupboardImg />,
    },
    {
      name: 'Акрил',
      image: <LightingImg />,
    },
  ],
};

export const products = {
  title: "Галерея інтер'єрних рішень",
  subtitle:
    'Ми завжди прислуховуємось до побажань наших клієнтів та стараємось враховувати всі дрібні нюанси.',
  pages: [
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Ceiling Light',
          price: 75,

        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Wood Chair',
          price: 50,

        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
          price: 105,

        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: 75,

        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Treos Seroes 911',
          price: 200,

        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Multi bilderman slibber',
          price: 45,

        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'XORA corner desk',
          price: 320,

        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Black Forest Series Wood',
          price: 225,

        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
          price: 105,

        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: 75,

        },
      ],
    },
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Ceiling Light',
          price: 75,

        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Wood Chair',
          price: 50,

        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
          price: 105,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: 75,

        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Treos Seroes 911',
          price: 200,

        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Multi bilderman slibber',
          price: 45,

        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'XORA corner desk',
          price: 320,

        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Black Forest Series Wood',
          price: 225,

        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
          price: 105,

        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: 75,

        },
      ],
    },
  ],
};

export const testimonial = {
  title: 'Що люди говорять про нас',
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: 'Олег',
      occupation: 'ІТ фахівець',
      message:
        '“Ми з дружиною раді, що вибрали Вас, як виробника меблів на замовлення. Виконали наше замовлення точно до деталей. Меблі відмінної якості.”',
    },
    {
      avatar: <Avatar2Img />,
      name: 'Іванна',
      occupation: 'Журналіст',
      message:
        '“Дякую компании за кухню моєї мрії. Я щаслива, що замовила кухню саме у Вас. Все точно так, як хтіла. Якістю дуже задоволена. Зробили без затримань та встановили швидко. Рекомендую цю компанію та буду звертатись ще! .”',
    },
    {
      avatar: <Avatar3Img />,
      name: 'Катерина',
      occupation: 'Лікар',
      message:
        '“Дякую компанії за виконання мого бажання. Гардеробна моєї мрії була зроблена якісно і в строки. Замовляла за рекомендацією друзів і Вам раджу!”',
    },
  ],
};

export const newsletter = {
  title: 'Get more discount Off your order',
  subtitle: 'Join our mailing list',
  placeholder: 'Your email address',
  buttonText: 'Shop Now',
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: '#',
    },
    {
      icon: <IoLogoInstagram />,
      href: '#',
    },
    {
      icon: <IoLogoGithub />,
      href: '#',
    },
    {
      icon: <IoLogoFacebook />,
      href: '#',
    },
  ],
  copyright: 'FurniShop 2022 - All Rights Reserved.',
};
