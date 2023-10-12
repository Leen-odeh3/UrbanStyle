const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: "https://i.postimg.cc/d0c5RfSB/hats.jpg",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: "https://i.postimg.cc/Y9p8ZW7L/jackets.jpg",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: "https://i.postimg.cc/TPjCtczX/sneakers.jpg",
    },
    {
      id: 4,
      title: "Women",
      imageUrl: "https://i.postimg.cc/htdCdnMv/women.jpg",
    },
    {
      id: 5,
      title: "Men",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <div style={{ display: "flex", gap: "30px",padding:"30px 60px",flexWrap:"wrap" }}>
      {categories.map((category) => (
        <div
          key={category.id}
          style={{
            width: "600px",
            height: "400px",
            background: `url(${category.imageUrl}) center/cover no-repeat`,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "35%",
              left: "30%",
              width: "200px",
              textAlign: "center",
              height: "150px",
              backgroundColor: "#FFFFFF",
              border: "1px solid black",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h4>{category.title}</h4>
            <a href="#">Shop Now</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
