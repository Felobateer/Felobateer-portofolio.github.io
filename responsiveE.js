const { useState, useEffect } = React;

const ShowItems = () => {
  const [products, setProducts] = useState([
    {
      Name: "Milka white chocolate",
      img: "./pic/white-choco.jpg",
      id: "wc",
      price: 1.99,
      actualPrice: 3.99,
      discount: true,
      type: "chocolate",
      size: "single",
    },
    {
      Name: "Milka milk chocolate",
      img: "./pic/milk-choco.jpg",
      id: "mc",
      price: 1.99,
      actualPrice: 3.99,
      discount: true,
      type: "chocolate",
      size: "single",
    },
    {
      Name: "Milka dark chocolate",
      img: "./pic/dark-choco.jpg",
      id: "dc",
      price: 1.99,
      actualPrice: 3.99,
      discount: true,
      type: "chocolate",
      size: "single",
    },
    {
      Name: "Milka hazelnut chocolate",
      img: "./pic/nut-choco.jpg",
      id: "hc",
      price: 3.99,
      discount: false,
      type: "chocolate",
      size: "single",
    },
    {
      Name: "Milka Oreo chocolate",
      img: "./pic/oreo-choco.jpg",
      id: "oc",
      price: 3.99,
      discount: false,
      type: "chocolate",
      size: "single",
    },
    {
      Name: "Milka biscuit chocolate",
      img: "./pic/biscuit-choco.jpg",
      id: "bic",
      price: 3.99,
      dicount: false,
      type: "chocolate",
      size: "single",
    },
    {
      Name: "Milka bubble chocolate",
      img: "./pic/bubble-choco.jpg",
      id: "buc",
      price: 3.99,
      discount: false,
      type: "chocolate",
      size: "single",
    },
    {
      Name: "Milka chocolate Jar",
      img: "./pic/jar-choco.jpg",
      id: "jc",
      price: 4.99,
      discount: false,
      type: "chocolate",
      size: "family",
    },
    {
      Name: "Ja vanilla ice-cream cone",
      img: "./pic/vanilla-cone.jpg",
      id: "vc",
      price: 1.49,
      actualPrice: 2.99,
      discount: true,
      type: "ice-cream-cone",
      size: "single",
    },
    {
      Name: "Ja chocolate ice-cream cone",
      img: "./pic/choco-cone.jpg",
      id: "cc",
      price: 1.49,
      actualPrice: 2.99,
      discount: true,
      type: "ice-cream-cone",
      size: "single",
    },
    {
      Name: "Ja 3 flavor ice-cream bucket (vanilla, chocolate, and strawberry)",
      img: "./pic/3flavor-bucket.jpg",
      id: "3b",
      price: 4.99,
      discount: false,
      type: "ice-cream-bucket",
      size: "family",
    },
    {
      Name: "Piece of chocolate cake (250g)",
      img: "./pic/pcake.jpg",
      id: "Cc",
      price: 1.99,
      actualPrice: 3.99,
      discount: true,
      type: "cake",
      size: "single",
    },
    {
      Name: "Piece of fruit cake (250g)",
      img: "./pic/fruitcake.jpg",
      id: "fc",
      price: 1.99,
      actualPrice: 3.99,
      discount: true,
      type: "cake",
      size: "single",
    },
    {
      Name: "Birthday Cake (1120g)",
      img: "./pic/birthday.jpg",
      id: "bc",
      price: 9.99,
      actualPrice: 19.99,
      discount: true,
      type: "cake",
      size: "family",
    },
    {
      Name: "Chocolate cake (1500g)",
      img: "./pic/pcake.jpg",
      id: "PC",
      price: 19.99,
      discount: false,
      type: "cake",
      size: "family",
    },
    {
      Name: "Fruit cake (1500g)",
      img: "./pic/fruitcake.jpg",
      id: "FC",
      price: 19.99,
      discount: false,
      type: "cake",
      size: "family",
    },
    {
      Name: "Small weekend snack mix",
      img: "./pic/weekend-snack0.jpg",
      id: "w0",
      price: 12.49,
      discount: false,
      type: "offer",
      size: "single",
    },
    {
      Name: "Medium weekend snack mix",
      img: "./pic/weekend-snack.jpg",
      id: "w1",
      price: 24.99,
      discount: false,
      type: "offer",
      size: "family",
    },
    {
      Name: "Big weekend snack mix",
      img: "./pic/weekend-snack2.jpg",
      id: "w2",
      price: 39.99,
      discount: false,
      type: "offer",
      size: "family",
    },
    {
      Name: "The 2 in 1 deal",
      img: "./pic/2in1.jpg",
      id: "2in1",
      price: 14.99,
      discount: false,
      type: "offer",
      size: "single",
    },
    {
      Name: "The 3 chocolate deal",
      img: "./pic/3choco.jpg",
      id: "ccc",
      price: 14.99,
      discount: false,
      type: "offer",
      size: "single",
    },
    {
      Name: "Haloween",
      img: "./pic/haloween.jpg",
      id: "haloween",
      price: 59.99,
      discount: false,
      type: "offer",
      size: "family",
    },
    {
      Name: "Summer Bundle",
      img: "./pic/summer-bundle.jpg",
      id: "sb",
      price: 54.99,
      discount: false,
      type: "offer",
      size: "family",
    },
    {
      Name: "The birthday offer",
      img: "./pic/birthday.jpg",
      id: "birthday",
      price: 34.99,
      discount: false,
      type: "offer",
      size: "family",
    },
    {
      Name: "Party Sweets",
      img: "./pic/party-sweets.jpg",
      id: "ps",
      price: 49.99,
      discount: false,
      type: "offer",
      size: "family",
    },
  ]);

  const handleReset = () => {
    return setProducts([
      {
        Name: "Milka white chocolate",
        img: "./pic/white-choco.jpg",
        id: "wc",
        price: 1.99,
        actualPrice: 3.99,
        discount: true,
        type: "chocolate",
        size: "single",
      },
      {
        Name: "Milka milk chocolate",
        img: "./pic/milk-choco.jpg",
        id: "mc",
        price: 1.99,
        actualPrice: 3.99,
        discount: true,
        type: "chocolate",
        size: "single",
      },
      {
        Name: "Milka dark chocolate",
        img: "./pic/dark-choco.jpg",
        id: "dc",
        price: 1.99,
        actualPrice: 3.99,
        discount: true,
        type: "chocolate",
        size: "single",
      },
      {
        Name: "Milka hazelnut chocolate",
        img: "./pic/nut-choco.jpg",
        id: "hc",
        price: 3.99,
        discount: false,
        type: "chocolate",
        size: "single",
      },
      {
        Name: "Milka Oreo chocolate",
        img: "./pic/oreo-choco.jpg",
        id: "oc",
        price: 3.99,
        discount: false,
        type: "chocolate",
        size: "single",
      },
      {
        Name: "Milka biscuit chocolate",
        img: "./pic/biscuit-choco.jpg",
        id: "bic",
        price: 3.99,
        dicount: false,
        type: "chocolate",
        size: "single",
      },
      {
        Name: "Milka bubble chocolate",
        img: "./pic/bubble-choco.jpg",
        id: "buc",
        price: 3.99,
        discount: false,
        type: "chocolate",
        size: "single",
      },
      {
        Name: "Milka chocolate Jar",
        img: "./pic/jar-choco.jpg",
        id: "jc",
        price: 4.99,
        discount: false,
        type: "chocolate",
        size: "family",
      },
      {
        Name: "Ja vanilla ice-cream cone",
        img: "./pic/vanilla-cone.jpg",
        id: "vc",
        price: 1.49,
        actualPrice: 2.99,
        discount: true,
        type: "ice-cream-cone",
        size: "single",
      },
      {
        Name: "Ja chocolate ice-cream cone",
        img: "./pic/choco-cone.jpg",
        id: "cc",
        price: 1.49,
        actualPrice: 2.99,
        discount: true,
        type: "ice-cream-cone",
        size: "single",
      },
      {
        Name: "Ja 3 flavor ice-cream bucket (vanilla, chocolate, and strawberry)",
        img: "./pic/3flavor-bucket.jpg",
        id: "3b",
        price: 4.99,
        discount: false,
        type: "ice-cream-cone",
        size: "family",
      },
      {
        Name: "Piece of chocolate cake (250g)",
        img: "./pic/pcake.jpg",
        id: "Cc",
        price: 1.99,
        actualPrice: 3.99,
        discount: true,
        type: "cake",
        size: "single",
      },
      {
        Name: "Piece of fruit cake (250g)",
        img: "./pic/fruitcake.jpg",
        id: "fc",
        price: 1.99,
        actualPrice: 3.99,
        discount: true,
        type: "cake",
        size: "single",
      },
      {
        Name: "Birthday Cake (1120g)",
        img: "./pic/birthday.jpg",
        id: "bc",
        price: 9.99,
        actualPrice: 19.99,
        discount: true,
        type: "cake",
        size: "family",
      },
      {
        Name: "Chocolate cake (1500g)",
        img: "./pic/pcake.jpg",
        id: "PC",
        price: 19.99,
        discount: false,
        type: "cake",
        size: "family",
      },
      {
        Name: "Fruit cake (1500g)",
        img: "./pic/fruitcake.jpg",
        id: "FC",
        price: 19.99,
        discount: false,
        type: "cake",
        size: "family",
      },
      {
        Name: "Small weekend snack mix",
        img: "./pic/weekend-snack0.jpg",
        id: "w0",
        price: 12.49,
        discount: false,
        type: "offer",
        size: "single",
      },
      {
        Name: "Medium weekend snack mix",
        img: "./pic/weekend-snack.jpg",
        id: "w1",
        price: 24.99,
        discount: false,
        type: "offer",
        size: "family",
      },
      {
        Name: "Big weekend snack mix",
        img: "./pic/weekend-snack2.jpg",
        id: "w2",
        price: 39.99,
        discount: false,
        type: "offer",
        size: "family",
      },
      {
        Name: "The 2 in 1 deal",
        img: "./pic/2in1.jpg",
        id: "2in1",
        price: 14.99,
        discount: false,
        type: "offer",
        size: "single",
      },
      {
        Name: "The 3 chocolate deal",
        img: "./pic/3choco.jpg",
        id: "ccc",
        price: 14.99,
        discount: false,
        type: "offer",
        size: "single",
      },
      {
        Name: "Haloween",
        img: "./pic/haloween.jpg",
        id: "haloween",
        price: 59.99,
        discount: false,
        type: "offer",
        size: "family",
      },
      {
        Name: "Summer Bundle",
        img: "./pic/summer-bundle.jpg",
        id: "sb",
        price: 54.99,
        discount: false,
        type: "offer",
        size: "family",
      },
      {
        Name: "The birthday offer",
        img: "./pic/birthday.jpg",
        id: "birthday",
        price: 34.99,
        discount: false,
        type: "offer",
        size: "family",
      },
      {
        Name: "Party Sweets",
        img: "./pic/party-sweets.jpg",
        id: "ps",
        price: 49.99,
        discount: false,
        type: "offer",
        size: "family",
      },
    ]);
  };

  const handleChocolate = (event) => {
    if (event === "chocolate") {
      const excuteChocolate = products.filter(
        (product) => product.type === "chocolate"
      );
      setProducts(excuteChocolate);
    } else {
      handleReset();
    }
  };

  useEffect(() => {
    const checkbox = document.getElementById("flChoco");

    const handleChange = () => {
      if (checkbox.checked) {
        handleChocolate("chocolate");
      } else {
        handleReset();
      }
    };

    checkbox.addEventListener("change", handleChange);

    return () => {
      checkbox.removeEventListener("change", handleChange);
    };
  }, []);

  const handleCones = (event) => {
    if (event === "ice-cream-cone") {
      const excuteCone = products.filter(
        (product) => product.type === "ice-cream-cone"
      );
      setProducts(excuteCone);
    } else {
      handleReset();
    }
  };

  useEffect(() => {
    const checkbox = document.getElementById("flCone");

    const handleChange = () => {
      if (checkbox.checked) {
        handleCones("ice-cream-cone");
      } else {
        handleReset();
      }
    };

    checkbox.addEventListener("change", handleChange);

    return () => {
      checkbox.removeEventListener("change", handleChange);
    };
  });

  const handleBucket = (event) => {
    if (event === "ice-cream-bucket") {
      const excuteBucket = products.filter(
        (product) => product.type === "ice-cream-bucket"
      );
      setProducts(excuteBucket);
    } else {
      handleReset();
    }
  };

  useEffect(() => {
    const checkbox = document.getElementById("flbucket");

    const handleChange = () => {
      if (checkbox.checked) {
        handleBucket("ice-cream-bucket");
      } else {
        handleReset();
      }
    };

    checkbox.addEventListener("change", handleChange);

    return () => {
      checkbox.removeEventListener("change", handleChange);
    };
  });

  const handleCake = (event) => {
    if (event === "cake") {
      const excuteCake = products.filter((product) => product.type === "cake");
      setProducts(excuteCake);
    } else {
      handleReset();
    }
  };

  useEffect(() => {
    const checkbox = document.getElementById("flcake");

    const handleChange = () => {
      if (checkbox.checked) {
        handleCake("cake");
      } else {
        handleReset();
      }
    };

    checkbox.addEventListener("change", handleChange);

    return () => {
      checkbox.removeEventListener("change", handleChange);
    };
  });

  const handleOffers = (event) => {
    if (event === "offer") {
      const excuteOffers = products.filter(
        (product) => product.type === "offer"
      );
      setProducts(excuteOffers);
    } else {
      handleReset();
    }
  };

  useEffect(() => {
    const checkbox = document.getElementById("floffers");

    const handleChange = () => {
      if (checkbox.checked) {
        handleOffers("offer");
      } else {
        handleReset();
      }
    };

    checkbox.addEventListener("change", handleChange);

    return () => {
      checkbox.removeEventListener("change", handleChange);
    };
  });

  const handleSingle = (event) => {
    if (event === "single") {
      const excuteSingle = products.filter(
        (product) => product.size === "single"
      );
      setProducts(excuteSingle);
    } else {
      handleReset();
    }
  };

  useEffect(() => {
    const checkbox = document.getElementById("flsingle");

    const handleChange = () => {
      if (checkbox.checked) {
        handleSingle("single");
      } else {
        handleReset();
      }
    };

    checkbox.addEventListener("change", handleChange);

    return () => {
      checkbox.removeEventListener("change", handleChange);
    };
  });

  const handleFamily = (event) => {
    if (event === "family") {
      const excuteFamily = products.filter(
        (product) => product.size === "family"
      );
      setProducts(excuteFamily);
    } else {
      handleReset();
    }
  };

  useEffect(() => {
    const checkbox = document.getElementById("flfamily");

    const handleChange = () => {
      if (checkbox.checked) {
        handleFamily("family");
      } else {
        handleReset();
      }
    };

    checkbox.addEventListener("change", handleChange);

    return () => {
      checkbox.removeEventListener("change", handleChange);
    };
  });

  const handleNew = (event) => {
    if (event === "Milka bubble chocolate") {
      const excuteNew = products.filter(
        (product) => product.Name === "Milka bubble chocolate"
      );
      setProducts(excuteNew);
    } else {
      handleReset();
    }
  };

  useEffect(() => {
    const checkbox = document.getElementById("flnew");

    const handleChange = () => {
      if (checkbox.checked) {
        handleNew("Milka bubble chocolate");
      } else {
        handleReset();
      }
    };

    checkbox.addEventListener("change", handleChange);

    return () => {
      checkbox.removeEventListener("change", handleChange);
    };
  });

  const handleDiscount = (event) => {
    if (event === true) {
      const excuteDiscount = products.filter(
        (product) => product.discount === true
      );
      setProducts(excuteDiscount);
    } else {
      handleReset();
    }
  };

  useEffect(() => {
    const checkbox = document.getElementById("discount");

    const handleChange = () => {
      if (checkbox.checked) {
        handleDiscount(true);
      } else {
        handleReset();
      }
    };

    checkbox.addEventListener("change", handleChange);

    return () => {
      checkbox.removeEventListener("change", handleChange);
    };
  });

  useEffect(() => {
    const checkbox = document.getElementById("count");

    const handleChange = () => {
      if (checkbox.checked) {
        handleReset();
      }
    };

    checkbox.addEventListener("change", handleChange);

    return () => {
      checkbox.removeEventListener("change", handleChange);
    };
  });

  const processPurchase = (product) => {
    const item = product;
  };

  return (
    <div>
      {products.map((product) => (
        <div
          className="item"
          style={{ backgroundImage: `url(${product.img})` }}
          key={product.id}
        >
          {product.discount && <span className="Discount">50%</span>}
          <div className="itemDescription">
            <h5>{product.Name}</h5>
            <span className="price">&euro; {product.price}</span>
            {product.discount && (
              <span className="actual-price">&euro; {product.actualPrice}</span>
            )}
            <button
              type="button"
              className="btn btn-default btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#shoppingCart"
              key={product.id}
              onClick={() => processPurchase(product)}
            >
              Buy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const Main = () => {
  const handleSelection = (item) => {
    console.log(item);
  };

  return (
    <div>
      <ShowItems
        style="display: none;"
        handleSelection={processPurchase(product)}
      />
    </div>
  );
};

ReactDOM.render(<ShowItems />, document.querySelector(".items"));
ReactDOM.render(<Cart />, document.getElementById("cartList"));
