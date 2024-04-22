import AboutImg from '../../assets/about/about.png'

import { FaStar, FaTruckFast } from "react-icons/fa6";
import { SiGmail, SiGooglemaps } from "react-icons/si";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GiFoodTruck } from "react-icons/gi";
import { MdAddCall } from "react-icons/md";

import food1 from '../../assets/menu/food1.jpg'
import food2 from '../../assets/menu/food2.jpg'
import food3 from '../../assets/menu/food3.jpg'
import food4 from '../../assets/menu/food4.jpg'
import drink1 from '../../assets/menu/drink1.jpg'
import drink2 from '../../assets/menu/drink2.jpg'
import drink3 from '../../assets/menu/drink3.jpg'
import drink4 from '../../assets/menu/drink4.jpg'
import coffe1 from '../../assets/menu/coffe1.jpg'
import coffe2 from '../../assets/menu/coffe2.jpg'
import coffe3 from '../../assets/menu/coffe3.jpeg'
import coffe4 from '../../assets/menu/coffe4.jpeg'

import testi1 from '../../assets/testi/testi1.jpg'
import testi2 from '../../assets/testi/testi2.jpg'
import testi3 from '../../assets/testi/testi3.jpg'
import testi4 from '../../assets/testi/testi4.jpg'
import testi5 from '../../assets/testi/testi5.jpg'

import boys1 from '../../assets/team/boy1.jpg'
import boys2 from '../../assets/team/boy2.jpg'
import girl from '../../assets/team/girl.jpg'

export const navbar = [
  {
    id: 1,
    path: '#home',
    title: 'Home',
    active: 'home'
  },

  {
    id: 2,
    path: '#about',
    title: 'Tentang Kami',
    active: 'about'
  },

  {
    id: 3,
    path: '#services',
    title: 'Services',
    active: 'services'
  },

  {
    id: 4,
    path: '#menu',
    title: 'Menu',
    active: 'menu'
  },

  {
    id: 5,
    path: '#team',
    title: 'Team',
    active: 'team'
  },

  {
    id: 6,
    path: '#testimonials',
    title: 'Testimonials',
    active: 'testimonials'
  },

  {
    id: 7,
    path: '#kontak',
    title: 'Kontak',
    active: 'kontak'
  }
]

export const home = [
  {
    title: 'Sentuhan Modern',
    span: 'dalam Tradisi Kuliner',
    text: 'Restoran kami menyatukan kekayaan tradisi kuliner dengan sentuhan modern yang mengagumkan, menciptakan pengalaman makan yang tak terlupakan bagi setiap tamu. Dengan menu yang dirancang dengan cermat oleh koki kami yang berbakat dan pelayanan yang hangat dari staf kami yang ramah, kami mengundang Anda untuk merasakan kelezatan dan keanggunan dalam setiap hidangan yang disajikan.',
    button: 'Tentang Kami',
    path: '#about'
  }
]

export const about = [
  {
    title: 'Rasa Dunia: Jelajahi Kekayaan Kuliner di Satu Tempat',
    text: ' Destinasi utama bagi pecinta makanan yang ingin menjelajahi beragam masakan dari berbagai belahan dunia. Dari resep tradisional hingga tren kuliner terbaru, kami menyajikan informasi, inspirasi, dan panduan untuk memuaskan lidah Anda dalam satu tempat yang nyaman.',
    button: 'Menu Kami',
    path: '#menu',
    img: AboutImg,
  }
]

export const headingServices = [
  {
    title: 'Pelayanan Dari Kami',
    text: 'Pelayanan kami ramah, efisien, dan profesional. Kami berkomitmen untuk memberikan pengalaman terbaik kepada setiap pelanggan.'
  }
]

export const dataServices = [
  {
    id: 1,
    icons: <FaTruckFast />,
    title: "Pengiriman cepat",
    text: "Jelajahi dinamika pengiriman cepat makanan, dari teknologi pesanan online hingga logistik pengantaran yang efisien. Buku ini membahas strategi untuk memenuhi ekspektasi pelanggan akan pengiriman yang cepat dan tepat waktu, serta tantangan dalam menjaga kualitas makanan selama proses pengantaran."
  },

  {
    id: 2,
    icons: <RiSecurePaymentFill />,
    title: "Pembayaran Aman",
    text: "Pentingnya pembayaran aman dalam industri makanan. Buku ini mengulas teknik dan sistem pembayaran yang dapat dipercaya, serta cara melindungi data keuangan pelanggan. Temukan langkah-langkah praktis untuk memastikan transaksi pembayaran tetap aman dalam bisnis makanan Anda."
  },

  {
    id: 3,
    icons: <GiFoodTruck />,
    title: "Kepuasan Pelanggan",
    text: "Pentingnya kepuasan pelanggan dalam industri makanan. Melalui strategi pelayanan yang efektif dan penyajian makanan yang berkualitas, Anda akan menemukan cara memastikan pengalaman yang memuaskan bagi setiap pelanggan."
  }
]

export const menuHeading = [
  {
    title: 'Menu Kami',
    text: 'Nikmati beragam hidangan lezat dari menu kami, mulai dari makanan pembuka hingga pencuci mulut, semua dibuat dengan bahan segar dan berkualitas tinggi.'
  }
]

export const menuData = [
  {
    id: 1,
    img: food1,
    category: 'food',
    title: 'Hamburger',
    price: "$10.00",
    path: 'https://api.whatsapp.com/send?phone=6285219807430',
    button: 'Order Now',
  },

  {
    id: 2,
    img: food2,
    category: 'food',
    title: 'Pasta',
    price: "$10.00",
    path: 'https://api.whatsapp.com/send?phone=6285219807430',
    button: 'Order Now',
  },

  {
    id: 3,
    img: food3,
    category: 'food',
    title: 'Sayuran',
    price: "$10.00",
    path: 'https://api.whatsapp.com/send?phone=6285219807430',
    button: 'Order Now',
  },

  {
    id: 4,
    img: food4,
    category: 'food',
    title: 'Pancake Strawberry',
    price: "$10.00",
    path: 'https://api.whatsapp.com/send?phone=6285219807430',
    button: 'Order Now',
  },

  {
    id: 5,
    img: drink1,
    category: 'drink',
    title: 'Negroni Cocktail',
    price: "$10.00",
    path: 'https://api.whatsapp.com/send?phone=6285219807430',
    button: 'Order Now',
  },

  {
    id: 6,
    img: drink2,
    category: 'drink',
    title: ' Jus Jeruk',
    price: "$10.00",
    path: 'https://api.whatsapp.com/send?phone=6285219807430',
    button: 'Order Now',
  },

  {
    id: 7,
    img: drink3,
    category: 'drink',
    title: 'Jus Raspberry',
    price: "$10.00",
    path: 'https://api.whatsapp.com/send?phone=6285219807430',
    button: 'Order Now',
  },

  {
    id: 8,
    img: drink4,
    category: 'drink',
    title: 'Jus Lemon',
    price: "$10.00",
    path: 'https://api.whatsapp.com/send?phone=6285219807430',
    button: 'Order Now',
  },

  {
    id: 9,
    img: coffe1,
    category: 'coffe',
    title: 'Latte',
    price: "$10.00",
    path: 'https://api.whatsapp.com/send?phone=6285219807430',
    button: 'Order Now',
  },

  {
    id: 10,
    img: coffe4,
    category: 'coffe',
    title: 'Americano',
    price: "$10.00",
    path: 'https://api.whatsapp.com/send?phone=6285219807430',
    button: 'Order Now',
  },

  {
    id: 11,
    img: coffe3,
    category: 'coffe',
    title: 'Moccachino',
    price: "$10.00",
    path: 'https://api.whatsapp.com/send?phone=6285219807430',
    button: 'Order Now',
  },

  {
    id: 12,
    img: coffe2,
    category: 'coffe',
    title: 'Espresso',
    price: "$10.00",
    path: 'https://api.whatsapp.com/send?phone=6285219807430',
    button: 'Order Now',
  },
]

export const teamHeading = [
  {
    title: 'Tim Profesional Kami',
    text: 'Tim kami ahli dalam menciptakan pengalaman kuliner yang luar biasa. Dengan keahlian yang luas, mereka siap memberikan makanan berkualitas tinggi dan pelayanan prima.'
  }
]

export const teamData = [
  {
    id: 1,
    img: boys1,
    name: 'John Doe',
    position: 'Chef'
  },

  {
    id: 2,
    img: girl,
    name: 'Jane Doe',
    position: 'Waiter'
  },

  {
    id: 3,
    img: boys2,
    name: 'Steve Doe',
    position: 'Cook'
  },
]

export const testimonialsHeading = [
  {
    title: 'Testimonial',
    text: 'Testimonial kami adalah bukti kepuasan pelanggan atas layanan dan produk kami. Mereka mencerminkan pengalaman positif yang kami tawarkan.'
  }
]

export const testimonialsData = [
  {
    id: 1,
    img: testi1,
    name: 'John Doe',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus.',
    icons1: <FaStar />,
    icons2: <FaStar />,
    icons3: <FaStar />,
    icons4: <FaStar />,
    icons5: <FaStar />,
  },

  {
    id: 2,
    img: testi2,
    name: 'Dion Doe',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus.',
    icons1: <FaStar />,
    icons2: <FaStar />,
    icons3: <FaStar />,
    icons4: <FaStar />,
    icons5: <FaStar />,
  },

  {
    id: 3,
    img: testi3,
    name: 'Rian Doe',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus.',
    icons1: <FaStar />,
    icons2: <FaStar />,
    icons3: <FaStar />,
    icons4: <FaStar />,
    icons5: <FaStar />,
  },

  {
    id: 4,
    img: testi4,
    name: 'Angga Doe',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus.',
    icons1: <FaStar />,
    icons2: <FaStar />,
    icons3: <FaStar />,
    icons4: <FaStar />,
    icons5: <FaStar />,
  },

  {
    id: 5,
    img: testi5,
    name: 'Putra Doe',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus.',
    icons1: <FaStar />,
    icons2: <FaStar />,
    icons3: <FaStar />,
    icons4: <FaStar />,
    icons5: <FaStar />,
  },
]

export const kontakHeading = [
  {
    title: 'Kontak',
    text: 'Hubungi kami untuk pertanyaan atau reservasi. Informasi kontak kami tersedia di halaman Kontak.'
  }
]

export const kontakData = [
  {
    id: 1,
    icons: <SiGmail />,
    title: 'Hubungi Kami Melalui Gmail',
    text: 'Apakah Anda memiliki pertanyaan?',
    button: 'Hubungi Kami',
    path: 'mailto:rinetastore@gmail.com'
  },

  {
    id: 2,
    icons: <FaWhatsapp />,
    title: 'Hubungi Kami Melalui Whatsapp',
    text: 'Apakah Anda memiliki pertanyaan?',
    button: 'Hubungi Kami',
    path: 'https://api.whatsapp.com/send?phone=6285219807430'
  }
]

export const info = [
  {
    id: 1,
    title: 'Alamat Kami',
    icons: <SiGooglemaps />,
    text: 'Jl. Pahlawan No. 1, Bandung, Jawa Barat',
    button: 'Lokasi Kami',
    arrow: <FaArrowRight />,
    path: 'https://maps.app.goo.gl/DLnFWLTFikuGHGhr8'
  },

  {
    id: 2,
    title: 'Nomber Kontak Kami',
    icons: <MdAddCall />,
    text: '+6285219807430',
    arrow: <FaArrowRight />,
    button: 'Telepon Kami',
    path: 'callto:6285219807430'
  },
]