const resto = [
  {
    id: "1",
    name: "Rumah Sate GO-HANN",
    lokasi: "Jln bulustalan 1 no 27",
    image:
      "https://lh3.googleusercontent.com/mjb_rNFLZvy05QBUYGasx-xS-mPfDorUn8VvZFcuHN5lHVGKns7ciXB9HekG_CBsb_UmHaiD=w328-h233-no",
    food: [
      {
        id: 1,
        number: 0,
        harga: 10000,
        nama: "Sate Sapi",
        gambar:
          "http://www.dapurkobe.co.id/wp-content/uploads/sate-ayam-ponorogo.jpg"
      },
      {
        id: 2,
        harga: 15000,
        number: 0,
        nama: "Sate Kambing",
        gambar: "http://www.dapurkobe.co.id/wp-content/uploads/sate-ayam.jpg"
      },
      {
        id: 3,
        harga: 11000,
        number: 0,
        nama: "Sate Babat",
        gambar:
          "https://4.bp.blogspot.com/-jPyG91e7Kis/T90hn9wZSuI/AAAAAAAAAwE/omKQ6msB7oA/s1600/sate_maranggi.jpg"
      },
      {
        id: 4,
        harga: 20000,
        number: 0,
        nama: "Sate Ayam Hutan",
        gambar:
          "https://img-global.cpcdn.com/003_recipes/0ad338be1e2bd498/400x400cq70/photo.jpg"
      }
    ]
  },
  {
    id: "2",
    name: "Mie Ayam GO-HANN",
    lokasi: "Jln palu arit",
    image:
      "https://lh3.googleusercontent.com/OrjQboEgLMJkdt0lpaDd-K393me8bglgLemQT_f62V8dX7SYzlJ9wqsrtnVz0CqlvjGRjSGlR3gWbrsPdz1yd1am9_0eB-_r8OhmlQ1djphgpPjQX6mYSxWyOXYxIkgvYySYy3RC2TvZcVaygphw9tXtyZ90kjlnCMJJbIglVoMmE-nbE0hBumo8c23C4h9BVntRqPa-mcMOj4vGxDvRpWnDcx535uaQygDsfiQpnJnorbVP2maxxH9rNORdRl-hKYV4h_qpFjzx0lCL25w2AGMm6qQdpihY6K80rNLjJxoXOM2QC7qMuGu0ZbIHvMKaTMZ2bQNkVehxC6b300b3jAHQEuUyDzTNqOupaoNQeNE9jZzCtgG1wIFQR104JDXg8C_3dtFIuJtBsO_uY0siMv8SqNBgVOOqm-ihNwTyUiVQhjDpA4D9HK-HrlDt95SIbUlsATjj01I7PjsD0e0Nr7k3jKzBqKaHlpMEA1eKNmj1qM32oapUGnkGP-K7gp6dFTkGGpYCpnBPVVBEPiCUyRtkBwmOZpdeV8e6iulOYGczhBYvioVBtH9IRJ3L2--P6eRJzFVC2rMq2rz7LrSKcngyGIENptqhWqGSJ7kdzbaxNxyPLivelj-TMNpch6tArb47W3kd2KHdT1Wi5uCsJbzw9hu65A=w652-h461-no",
    food: [
      {
        id: 1,
        number: 0,
        harga: 10000,
        nama: "Mie Ayam GO-HANN",
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8d0jU35d8hj1p06Lg8_FPXeyZCpjTWrFaY1JnSVD5e5nyHbH"
      },
      {
        id: 2,
        harga: 15000,
        number: 0,
        nama: "Mie Ayam Ijo",
        gambar:
          "https://selerasa.com/wp-content/uploads/2015/05/images_mie_Mie_ayam_09-mie-ayam-hijau.jpg"
      },
      {
        id: 3,
        harga: 11000,
        number: 0,
        nama: "Mie Ayam Rendang",
        gambar:
          "https://jatenglive.com/images/news/Mie-Ayam-Tumini-Adalah-Mie-Ayam-Bercita-Rasa-Layaknya-Mie-Udon-Khas-Jepang-news20190308-Mi-ayam-Tumini-Giwangan.jpg"
      },
      {
        id: 4,
        harga: 20000,
        number: 0,
        nama: "Mie ayam Bango",
        gambar:
          "https://d12man5gwydfvl.cloudfront.net/wp-content/uploads/2018/06/Mie-Ayam-Jamur-Royco-compressor.jpg"
      }
    ]
  },
  {
    id: "3",
    name: "Dapur GO-HANN",
    lokasi: "Jln kalibanteng",
    image:
      "https://lh3.googleusercontent.com/ZptwU4fbSSJey8JTUF7l1zOAINnCKmvJb-FNof3UAaAqaQMk6Nubz9wOz2cmu0CVIieS2dMT4wv65U77FGDBXpwUIE_wE1W-7bRWYk9z75mZxiJbil81IepQ585-4bqmz7fNvK7CyPLUmyHNo3CxoNJnBqpKmvPBsttL3mYNB2zlC4OO83rgfQf3KOxLCeGluPotUbVyHJGT2LXNXMDRqWO0WHjprHmL2H3uhMwXvwuCgNRFvXTtfHwL_nFbKV1v9zau_AIDNtz1r0tjns1G2c9FjgHBAYcyuEZx9PzfstXEnpSsXisL0Fsm6hJ8eYh98dRgeOfO7pHKUZZpkNF2Jea9Y3L2ecGzIxh7TnmN3PwNTjlikj6tnol_g7ygICCVvHghIAhQhgobukmo1i5_BYfztt6ucFH4bhbUvh9LYsb9BMqMWLFrNy02hE2qqPkH9Iiug3rLvJhhnp8Sl7TSOAau0Rxmd3X8-tBq9BqnTRe91nMqJ2DQ0luWNU0quCJ7pQ4Oxs599Gu8-UtdAxHnmryMJwgYUgw9SdwejpBkUjuV2jgf_5z3uC0Ywu0WvyW9v_g2Q6Z77R_k9eyqhB3MWVinHnJ06SLMlJjnDf96kC7hM1sVDaQbyDLWKKZ5QdzZ8BAEQ35DN6vwAWIiAntelY4V6jwlDw=w645-h459-no",
    food: [
      {
        id: 1,
        number: 0,
        harga: 10000,
        nama: "Soto Banjar",
        gambar:
          "https://www.kepogaul.com/wp-content/uploads/2018/11/000334-00_resep-soto-banjar-asli_soto-banjar_800x450_ccpdm-min.jpg"
      },
      {
        id: 2,
        harga: 15000,
        number: 0,
        nama: "Rawon",
        gambar:
          "http://3.bp.blogspot.com/-VVJ8DogqfxE/VQOfS5gJ8HI/AAAAAAAAAfY/--fcVHFaimM/s1600/rawon-_01.jpg"
      },
      {
        id: 3,
        harga: 11000,
        number: 0,
        nama: "Iwak Pari Panggang",
        gambar:
          "https://resepnusantara.id/wp-content/uploads/2018/04/6.-ikan-pari-panggang.jpg"
      },
      {
        id: 4,
        harga: 20000,
        number: 0,
        nama: "Asam Padeh",
        gambar:
          "https://www.saribundo.biz/wp-content/uploads/2014/08/asam-padeh.jpg"
      }
    ]
  },
  {
    id: "4",
    name: "Hann Coffe",
    lokasi: "Jln raya semarang",
    image:
      "https://lh3.googleusercontent.com/wpoaSOZp1w5S_8tpObGLm8OG0Q3gxDVTxUgBmMUgk5NKaIOAGQSnIkR7gu2wYXUN8vzaP8HZzkEIwqpiZSO3tlrniDltC7RvIhlhZTk2EH-kzF07mPspIEm9467kPGjcEfDhQsXIhW3wo4fwwgfQYCGAQ12X8o_73CPDXB9MGnxoOCkWG6kdHhGTB4TVt4N9FXbrgV5HG7CuZop731QJbBjn42JsZ0sIJL3na1J3Hqe8mCKHdSDwFYiM-I33MKC8ZcGmCK_Y-E0sixGtxnVQg6zwVxHdMcxCQxi3RHT4_VwtF6q_d4UKg10-7CX0KQyHDyA862UA_LY_yZ4o2aBjvf5V5vuVIDTulDidb_vgaxfRwR7RExQVxLK1-wOU1la3F37jeuh-1dBzSyVNGv3XXT3HYDoiP4aquNDGwEEAXXnqPHgLDs1t5ecg7n-SvEpe-i1f_WT4-6Axckv6B-97s-0XNiyppxmiqRa5bQN3GGAKPNuXFRyiBpdaKAPdibSodO_NQkiF0k7InENENzqBeixTdEg-bTc5R2zDge-G4X1fGIZr4jv9d5Ot_hqZmHJohJZGX9wcjpIczjAcjy7tKDm3_mLNUQhSOHSdDQQUv4usnvKCxbobw5ci5T1hsgbcuaZv5kuKyVpTb6TuANX-i4EshdGbxA=w646-h460-no",
    food: [
      {
        id: "1",
        nama: "Coffe Latte",
        harga: 12000,
        price: 0,
        gambar:
          "https://4.bp.blogspot.com/-ftlZkpL9N1s/V2zacBBLeoI/AAAAAAAAJw4/xsu6g6zab2E4tqUTMr6G3j2AF3Y2QHemQCLcB/s1600/coffe%2Blatte.jpg"
      },
      {
        id: "2",
        nama: "Coffe Hitam",
        harga: 14000,
        price: 0,
        gambar:
          "data:image/jpeg;base64,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"
      },
      {
        id: "3",
        nama: "Coffe Susu",
        harga: 28000,
        price: 0,
        gambar: "https://cupsealer.me/wp-content/uploads/2017/06/kopsus.jpg"
      },
      {
        id: "4",
        nama: "Coffe Cappuccino",
        harga: 12000,
        price: 0,
        gambar:
          "http://www.dropofcoffee.com/wp-content/uploads/2014/03/Cappuccino-coffee-300x199.jpg"
      }
    ]
  }
];

export default resto;
