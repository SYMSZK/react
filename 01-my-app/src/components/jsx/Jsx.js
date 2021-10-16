const Jsx = () => {
  const kullanici = {
    ad: "by",
    soyad: "fibonacci",
    email: "by@fibonacci.com",
    telefon: "55555555",
  };

  return (
    <div>
      <div>Merhaba {kullanici.ad + " " + kullanici.soyad}</div>
      <div>Eposta: {kullanici.email}</div>
    </div>
  );
};

export default Jsx;
