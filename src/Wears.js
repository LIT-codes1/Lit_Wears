import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCircleXmark, faFaceSmile, faFaceAngry, faCheck, faMotorcycle, faFlagUsa, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter, faYoutube, faCcMastercard, faCcVisa, faCcPaypal, faCcApplePay, faCcAmazonPay, faCcDiscover, faWizardsOfTheCoast } from '@fortawesome/free-brands-svg-icons';
import { faRightLong, faLeftLong , faPlane } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { faSpinner, faArrowLeftLong, faAngleRight, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const Wears = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [review, setReview] = useState(true);
  const [mark, setMark] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [insta, setInsta] = useState(false);
  const [customer, setCustomer] = useState(false);
  const [password, setPassword] = useState('');
  const [p2p, setP2p] = useState(true);
  const [welcome, setWelcome] = useState(false);
  const [cartItem, setCartItem] = useState(false);
  const [addNewClass, setAddNewClass] = useState(false);
  const [isAdded4, setIsAdded4] = useState(false);
  const [addedNames, setAddedNames] = useState([]); 
  const [newTexted, setNewTexted] = useState('ADD TO CART');
  const [selectedText, setSelectedText] = useState({ name: '', price: '' });
  const [prizeTag, setPrizeTag] = useState(false);
  const [selectedNames, setSelectedNames] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [color, setColor] = useState('')
  const [lit , setLit] = useState(true)

  const deleteThem5 = () => setCartItem(!cartItem);
  const handleInputChange = (event) => setInputValue(event.target.value);
  const clickItems = () => setCartItem(!cartItem);
  const [selectedItems, setSelectedItems] = useState(selectedNames); // State for the selected items
  const [animateKey, setAnimateKey] = useState(0);
  const [bank, setBank] = useState(false);
  const [bank2, setBank2] = useState(false);
  const [bank23, setBank23] = useState(true);
   const [loader, setLoader] = useState(false);
   const [transfer, setTransfer] = useState(true);
   const [loader2, setLoader2] = useState(false);
   const [transfer2, setTransfer2] = useState(true);
   const [loader3, setLoader3] = useState(false);
   const [transfer3, setTransfer3] = useState(true);
   const [debit, setDebit] = useState(false)

   const [cardNumber, setCardNumber] = useState('');
   const [cardNumber2, setCardNumber2] = useState('');
   const [cardNumber22, setCardNumber22] = useState('');
   const [betterAddress, setBetterAddress] = useState(false)
  const [secondBank, setSecondBank] = useState(false)
   const [spinall , setSpinall] = useState(false)
   const [saved, setSaved] = useState(false)
   const [saved2, setSaved2] = useState(true)
   const [first, setFirst] = useState('')
   const [first2, setFirst2] = useState('')
   const [first3, setFirst3] = useState('')
   const [first4, setFirst4] = useState('')
   const [first5, setFirst5] = useState('')
   const [first6, setFirst6] = useState('')
   const [first7, setFirst7] = useState('')
   const [first8, setFirst8] = useState('')

  const[deleteThem22, setDeleteThem22] = useState(true)
  const [tick, setTick] = useState(false)
  const [proceedSection, setProceedSection] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [proceed1 , setProceed1] = useState(false)
const [other , setOther] = useState(false)
const [tick75, setTick75] = useState(false)
  const proc = () => {
if(!tick7 || !tick) {
  alert('Information Not Completed ')
}else{
  setTick75(true)
  setTimeout(()=> {
    setTick75(!false)
  },3900)
  setTimeout(() => {
    setProceedSection(!proceedSection)
    setBank23(!bank23)
    setLit(!lit)

  },4000)

}

  }
   const aboutTo = () => {
    if(first=== '' || first2=== '' || first3=== '' || first4=== '' || first5=== '' || first6=== '' || first7=== '' || first8=== '' ) {
 alert('cant go through')
    }else{
      setSpinall(!spinall)
      setTimeout(() => {
        setSpinall(false)
        setBetterAddress(!betterAddress)
        setBank23(!bank23)
      },3000)
      setTimeout(() => {
  setSaved2(false)
  setSaved(true)
      },2500)
      setTick(true)
    setProceed1(true)

    }
   }

   const aboutTo2 = () => {
    setSaved2(!saved2)
    setSaved(!saved)
    setTick(!tick)
    setProceed1(false)

   }

  const address = () => {
    setBetterAddress(!betterAddress)
    setBank23(!bank23)

  }
  const bankTransfer2 = () => {
    setSecondBank(!secondBank)
    setBank2(!bank2)

  }



   const formatCardNumber = (value) => {
     // Remove all non-digit characters
     const cleaned = value.replace(/\D/g, '');
 
     // Add space after every 4 digits
     const formatted = cleaned.replace(/(.{4})/g, '$1 ').trim();
 
     return formatted;
   };
 
   const handleInputChange22 = (e) => {
     const formattedValue = formatCardNumber(e.target.value);
     setCardNumber(formattedValue);

   };

   const formatCardNumber2 = (value) => {
    const cleaned = value.replace(/\D/g, '');

    const formatted = cleaned.replace(/(.{2})/g, '$1 ').trim();

    return formatted;
  };
   const handleInputChange44 = (e) => {
    const formattedValue = formatCardNumber2(e.target.value);
    setCardNumber2(formattedValue);
  };


  const formatCardNumber23 = (value) => {
    const cleaned = value.replace(/\D/g, '');

    return cleaned;
  };
   const handleInputChange444 = (e) => {
    const formattedValue = formatCardNumber23(e.target.value);
    setCardNumber22(formattedValue);
  };

  //  const bank23 
  const payment = () => {
    setBank23(!bank23)
    setBank2(!bank2)
  }
  const backArrow122 = () => {
    setBank23(!bank23)
    setBank2(!bank2)
  }
  const backFromAddress = () => {
    setBetterAddress(!betterAddress)
    setBank23(!bank23)
  }

const backArrow1 = () => {
  setBank(!bank)
  setBank2(!bank2)
}
const backPoint = () => {
  setBank2(!bank2)
setSecondBank(!secondBank)
}
const backFromCard = () => {
  setDebit(!debit)
  setBank2(!bank2)
}
const backArrow12 = () => {
  setBank(!bank)
  setBank2(!bank2)
  setLoader(false)
  setTransfer(true)
  setConfirm(false)
  setTickBank2(false)
  setTick7(false)
}

const cancelSecondBank = () => {
  setSecondBank(!secondBank)
  setBank2(!bank2)
  setLoader3(false)
  setTransfer3(true)
  setConfirm2(false)
  setTickBank3(false)
  setTick7(false)
  setProceed1(false)

}
const backArrow12yeah = () => {
  setBank2(!bank2)
  setLoader2(false)
  setTransfer2(true)
  setConfirm5(false)
  setDebit(!debit)
  setTickBank5(false)
  setTick7(false)
}
 const [confirm, setConfirm] =useState(false)
 const [tickBank2, setTickBank2] = useState(false)
 const [tickBank5, setTickBank5] = useState(false)
 const [tick7, setTick7] = useState(false)

  const clLoader = () => {
    setLoader(true)
    // setTransfer(!transfer)
    setTimeout(() => {
      setBank(!bank)
      setBank2(!bank2)
      setPaymentMethod('Bank Transfer')
      console.log('yes')
    
    }, 3000)
  setTimeout(() => {
setConfirm(true)
setTransfer(false)
setLoader(false)
setTickBank2(true)
setTick7(true)
setProceed1(true)
  },2500)
  }
  
  const clickConfirm = () => {
    setConfirm(!confirm)
    setTransfer(!transfer)
setTick7(!tick7)
setTickBank2(!tickBank2)
setProceed1(false)


  }
  const [confirm5, setConfirm5] = useState(false)
  const clLoader2 = () => {
    if(cardNumber === '' || cardNumber2 === '' ||cardNumber22 === '') {
       alert('Card Information Not Completed')
    } else{
    setLoader2(true)
    setTransfer2(true)
    setTimeout(() => {
      setLoader2(false)
      setTransfer2(false)
      setConfirm5(true)
      setTickBank5(true)
      setTick7(true)
      setProceed1(true)
    },2500)
    setTimeout(() => {
      setDebit(!debit)
      setBank2(!bank2)
      setPaymentMethod('Debit Card ')
      console.log('yes')
    }, 3000)}
  }
  const clickConfirm5= () => {
    setTransfer2(!transfer2)
     setConfirm5(!confirm5)
     setTickBank5(!tickBank5)
     setTick7(false)
     setProceed1(false)
  }
  const [tickBank3, setTickBank3] = useState(false)
  const [confirm2, setConfirm2] = useState(false)
  const clLoader3 = () => {
    setLoader3(true)
    setTransfer3(true)

    setTimeout(() => {
    setLoader3(false)
    setConfirm2(true)
    setTransfer3(false)
    setTickBank3(true)
    setTick7(true)
    setProceed1(true)
    }, 2500)

   setTimeout(() => {
    setSecondBank(!secondBank)
    setBank2(!bank2)
    setPaymentMethod('Bank Transfer(2)')
    console.log('yes')
   }, 3000)
  }
  const clickConfirm2 = () => {
    setConfirm2(!confirm2)
    setTransfer3(!transfer3)
    setTick7(false)
    setTickBank3(!tickBank3)
    setProceed1(false)

  }

  const bankFf = () => {
    setBank(!bank)
    setBank2(!bank2)
  }

  const debitCard = () => {
    setDebit(!debit)
    setBank2(!bank2)

  }
    // Array of images
    const images = [
      'swin.jpg',
      'bikini2.jpg',
      'bikini3.jpg',
    ];
  const color2 = [
    'orange',
    'blue',
    'white'
  ]
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index
    const [currentColor, setCurrentColor] = useState(0)
    useEffect(() => {
      const interval = setInterval(() => {
        // Change the image every 3 seconds (3000ms)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000)
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images.length]
  );

  useEffect(() => {
    // Change the color every 3 seconds
    const interval2 = setInterval(() => {
      setCurrentColor((prevColor) => (prevColor + 1) % color2.length); // Move to the next color
    }, 3000);

    // Cleanup interval when the component unmounts
    return () => clearInterval(interval2);
  }, [color2.length]);

  useEffect(() => {
    // Change the animateKey whenever the image changes to restart the animation
    setAnimateKey((prevKey) => prevKey + 1);
  }, [currentIndex]);



  const addedAlready = (indexToRemove, itemToRemove) => {
    // Remove the exact item based on the index
    setSelectedNames((prevNames) => prevNames.filter((_, index) => index !== indexToRemove));
  
    setAddNewClass(true);
    setIsAdded4(true);
  
    // Ensure the item and price are valid before proceeding
    if (itemToRemove && itemToRemove.price && typeof itemToRemove.price === 'string') {
      const priceValue = parseFloat(itemToRemove.price.replace(/[^0-9.-]+/g, ''));
  
      // Deduct the total price based on the item's count (if tracked)
      const itemCount = itemToRemove.count || 1; // Default to 1 if no count is tracked
      const totalDeduction = priceValue * itemCount;
  
      // Update the total price by deducting the price of the item to remove
      setTotalPrice((prevTotal) => prevTotal - totalDeduction);
    } else {
      console.error('Invalid price or item is undefined:', itemToRemove);
    }
  };
  
  // const addedAlready = (nameToRemove, itemToRemove) => {
  //   // Filter out the item to remove from selectedNames state
  //   setSelectedNames((prevNames) =>
  //     prevNames.filter((item) => item.name !== nameToRemove)
  //   );
  
  //   setAddNewClass(true);
  //   setIsAdded4(true);
  
  //   // Ensure the item and price are valid before proceeding
  //   if (itemToRemove && itemToRemove.price && typeof itemToRemove.price === 'string') {
  //     const priceValue = parseFloat(itemToRemove.price.replace(/[^0-9.-]+/g, ''));
  
  //     // Deduct the total price based on the item's count (if tracked)
  //     const itemCount = itemToRemove.count || 1; // Default to 1 if no count is tracked
  //     const totalDeduction = priceValue * itemCount;
  
  //     // Update the total price by deducting the price of the item to remove
  //     setTotalPrice((prevTotal) => prevTotal - totalDeduction);
  //   } else {
  //     console.error('Invalid price or item is undefined:', itemToRemove);
  //   }
  // };
  
  

  // const addedAlready = (nameToRemove, itemToRemove) => {
  //   setSelectedNames((prevNames) =>
  //     prevNames.filter((item) => item.name !== nameToRemove)
  //   );
  //   setAddNewClass(true);
  //   setIsAdded4(true);
  
  //   if (itemToRemove && itemToRemove.price && typeof itemToRemove.price === 'string') {
  //     const priceValue = parseFloat(itemToRemove.price.replace(/[^0-9.-]+/g, ''));
  
  //     // Deduct the total price by multiplying the price by the item count
  //     const itemCount = itemToRemove.count || 1; // Default to 1 if no count is tracked
  //     const totalDeduction = priceValue * itemCount;
  
  //     // Deduct the price
  //     setTotalPrice((prevTotal) => prevTotal - totalDeduction);
  
  //     // Remove the item from selectedItems
  //     const updatedItems = selectedItems.filter((item) => item !== itemToRemove);
  //     setSelectedItems(updatedItems);
  //   } else {
  //     console.error('Invalid price or item is undefined:', itemToRemove);
  //   }
  // };
  
  const scrollToSection = () => {
    const section = document.getElementById('targetSection');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setColor('Contact')

  };
  const scrollToSection2 = () => {
    const section = document.getElementById('newArrival');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setColor('New Arrivals')

    }
  };
 
  const scrollToSection3 = () => {
    const section = document.getElementById('summer');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setColor('Summer')

    }
  };

  // const sectionRef = useRef(null);

  // const scrollToSection4 = () => {
  //   if (sectionRef.current) {
  //     sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  const scrollToSection4 = () => {
    const section = document.getElementById('summerBikini');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setColor('Summer')

    }
  };


  const scrollToSection5 = () => {
    const section = document.getElementById('giftCard');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setColor('giftCard')

    }
  };

  const scrollToSection6 = () => {
    const section = document.getElementById('shopAll');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setColor('shopAll')

    }
  };


  const handleDivClick = (imageSrc, name, price, details1,details2, details3) => {
    setSelectedNames((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === name);
  
      if (existingItem) {
        // Increment the count if the item is already in the list
        return prevItems.map((item) =>
          item.name === name ? { ...item, count: (item.count || 1) + 1 } : item
        );
      } else {
        // Add the new item with count set to 1
        return [...prevItems, { imageSrc, name, price, details1, details2, details3, count: 1 }]
      }
    });
  
    // Handle price update and display
    const priceValue = parseFloat(price.replace(/[^0-9.-]+/g, ''));
    setTotalPrice((prevTotal) => prevTotal + priceValue);
    setPrizeTag(true);
  
    // Set the selected text for display without duplicating the names
    setSelectedText({ name, price, imageSrc, details1 , details2, details3});
  };
  
  useEffect(() => {
    console.log(`Total Price: ${totalPrice.toLocaleString()}`);
  }, [totalPrice]);


  const deleteThem = () => setPrizeTag(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const showContent = () => {
    setShow(!show);}
const sendReview = () => {
    
    if(inputValue.trim() === '') {
        
    }else{
        setMark(!mark)
        setReview(!review)
    }
}

const resetAll = () => {
  setSelectedNames([]); 
  setTotalPrice(0); 
  setOther(!other)
  setBank23(!bank23)
  setProceedSection(!proceedSection)
  setLit(true)
  setTick75(false)
};
const checkOut = () => {
  setOther(!other)
}
  return (
    <div className="wear-s" id='newArrival'>
      <div className="bigHead">
        <div className="head">
          <p>Kindly pick your orders specifically and enjoy!!</p>
        </div>
        <h1 className='log2'>LIT--WEARS.Com</h1>
        <div className="classes">
          <p
                    style={{ color: color === 'Summer' ? '#c40c46 ' : ' ' }}
                    onClick={scrollToSection3}
          >Summer </p>
          <p 
          style={{ color: color === 'New Arrivals' ? '#c40c46 ' : ' ' }}
          onClick={scrollToSection2}
          >New Arrivals</p>
          <p
                    style={{ color: color === 'shopAll' ? '#c40c46 ' : ' ' }}
                    onClick={scrollToSection6}
          >Shop All</p>
          <p
          style={{ color: color === 'giftCard' ? '#c40c46 ' : ' ' }}
          onClick={scrollToSection5} 
          >Gift Cards</p>
          <p
          onClick={scrollToSection}
          style={{ color: color === 'Contact' ? '#c40c46 ' : ' ' }}
          >Contact</p>
        </div>
      </div>

      <div className="carts">
        <h1 style={{ transform: 'rotate(90deg)' }} onClick={clickItems}>
          Cart Items
        </h1>
      </div>

      <div className={`beet ${cartItem ? 'visible' : ''}`}>
        <div className="cartItems5">
          <FontAwesomeIcon icon={faCircleXmark} className="faCircleXmark3" onClick={deleteThem5} />
          <h1 className='cpu22'>CARTS</h1>
          <div className="firstSection">
            {selectedNames.map(({ name, price }, index) => (
              <p key={index} className='selectedTextName22'>
                {name} <a className='pPrice'>{price}</a>
              </p>
            ))}
          </div>
         <div className="selectedTextNames">
         <p className='selectedTextNames22'>Total Price:
          <a className='pPrice'>${totalPrice.toLocaleString()}.00</a> </p>
         </div>
  
        </div>
        <h1 className='cfmBttn' onClick={checkOut}>Checkout ${totalPrice.toLocaleString()}.00</h1>
      </div>

      <div className="newArrivals">
        <h1 className='newA'>New Arrivals</h1>
        <div className="n2">
          <p className='product'>15 Product</p>
        </div>

        <div className="remaining">
    <div className="collections">
    <div className="classified" onClick={() => handleDivClick('k5.jpg','Gucci Bag', '$350.00' ,'Iconic and Legendary','Made of soft coloured Nappa leather', 'Removable inner hooks and gold-finish metalware.')}>
          <img src="k5.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Fendi Bag</p>
          <p className='prize'>$350.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
          </div> 
  
          <div className="classified" onClick={() => handleDivClick('k6.jpg', 'White Fendi Bag', '$145.00','Best Fashion Bag','Can be carried by hand as a clutch or worn on the shoulder', "Vintage Fendi classics")}>
          <img src="k6.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>White Fendi Bag</p>
          <p className='prize'>'#50,000'</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>
  
        <div className="classified" onClick={() => handleDivClick('m24.jpg', 'Drip SweatShirt', '$110.00','Thickened Warm Sweater', 'Keep employees warm and looking professional', 'Very Affordable')}>
          <img src="m24.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Drip SweatShirt</p>
          <p className='prize'>$110.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>
  
        <div className="classified" onClick={() => handleDivClick('nike1.jpg', 'Nike Shoe', '$185.00')}>
          <img src="nike1.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Nike Shoe</p>
          <p className='prize'>$185.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>
      </div>
  
      <div className="collections">
      <div className="classified" onClick={() => handleDivClick('npp2.jpg', 'Denim Short', '$85.00')}>
          <img src="npp2.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Denim Short</p>
          <p className='prize'>$85.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>
      
        <div className="classified" onClick={() => handleDivClick('npp1.jpg', 'Knitted Sweater', '$102.00')}>
          <img src="npp1.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Knitted Sweater</p>
          <p className='prize'>$102.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>     
  
        <div className="classified" onClick={() => handleDivClick('rude.jpg', 'Rude t-Shirt', '$52.00')}>
          <img src="rude.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Rude t-Shirt</p>
          <p className='prize'>$52.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>        
  
        <div className="classified" onClick={() => handleDivClick('k8.jpg', 'Naked Singlet', '$30.00')}>
          <img src="k8.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Naked Singlet</p>
          <p className='prize'>$30.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>  
      </div>
    </div>
    <div className="collections">
    <div className="classified" onClick={() => handleDivClick('k1.jpg', 'Net Singlet', '$85.00')}>
          <img src="k1.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Net Singlet</p>
          <p className='prize'>$85.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>     
  
        <div className="classified" onClick={() => handleDivClick('mask.jpg', 'White Mask', '$87.00')}>
          <img src="mask.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>White Mask</p>
          <p className='prize'>$87.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>       
  
        <div className="classified" onClick={() => handleDivClick('k3.jpg', 'Heart Hoodie', '$111.00')}>
          <img src="k3.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Heart Hoodie</p>
          <p className='prize'>$111.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>      
  
        <div className="classified" onClick={() => handleDivClick('jp1.jpg', 'Cartoon Vintage', '$98.00')}>
          <img src="jp1.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Cartoon Vintage </p>
          <p className='prize'>$98.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>         
      </div>
  
      <div className="collections">
      <div className="classified" onClick={() => handleDivClick('v3.jpg', 'Crochet Vintage', '$98.00')}>
          <img src="v3.jpg" alt="Gucci Bag" className='classifiedPic'  />
          <p className='gucciBag'>Crochet Vintage </p>
          <p className='prize'>$98.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>        
  
        <div className="classified" onClick={() => handleDivClick('cv1.jpg', 'Cotton t-Shirt', '$154.00')}>
          <img src="cv1.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Cotton t-Shirt </p>
          <p className='prize'>$154.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>         
  
        <div className="classified" onClick={() => handleDivClick('k7.jpg', 'Polaris shoe', '$174.00')}>
          <img src="k7.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Polaris shoe </p>
          <p className='prize' >$174.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>    
  
        <div className="classified" onClick={() => handleDivClick('aa1.jpg', 'Canvas Sneaker', '$224.00')}>
          <img src="aa1.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Canvas Sneaker </p>
          <p className='prize'  id='summer'>$224.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>  
      </div>
    </div>

<div className="betterWork"  >

    <div className="slideshow-container">
      {/* Display the current image */}
      {/* <img src='flower22.jpg' alt='coolImage ' className='betterPlace' /> */}

      <img
        src={images[currentIndex]}
        alt="Slideshow"
        className="slideshow-image"
        key={animateKey} 
      />
    <h1 className='wine1' style={{color:color2[currentColor]}} 
        key={animateKey} 
    >SummerTime</h1>
      <h1 className='wine2' style={{color:color2[currentColor]}}
        key={animateKey} 
      >FINE</h1>
      <h3 className='wine3' style={{color:color2[currentColor]}} 
        key={animateKey}
      >NEW ARRIVAL ARE IN</h3>
      <div className="wine4" style={{color:color2[currentColor]}} 
        key={animateKey} 
      >
      <p style={{backgroundColor:color2[currentColor]}} 
              onClick={scrollToSection4}

      >SHOP NOW</p>
      </div>
      <p><FontAwesomeIcon icon={faLeftLong} beat  className='beat1' style={{color:color2[currentColor]}} 
        key={animateKey} 
        /></p>
      <p> <FontAwesomeIcon icon={faRightLong} beat className='beat2' style={{color:color2[currentColor]}}
        key={animateKey} 
        /></p>
    </div>

    </div>   
    {/* <h1 className='wine1'>SummerTime</h1> */}


    <div className="newArrivals2" >
        <h1 className='newA' >Summer Collection</h1>
        <div className="n2">
          <p className='product'>8 Product</p>
        </div>

        <div className="remaining">
    <div className="collections">
    <div className="classified" onClick={() => handleDivClick('r1.jpg','Ditsy Flora Dress', '$350.00' )}>
          <img src="r1.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Ditsy Flora Dress </p>
          <p className='prize'>$350.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
          </div> 
  
          <div className="classified" onClick={() => handleDivClick('r2.jpg', 'SquareNeck Sundress', '$205.00',)}>
          <img src="r2.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>SquareNeck Sundress</p>
          <p className='prize'>$205.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>
  
        <div className="classified" onClick={() => handleDivClick('r3.jpg', 'Fairy Boho Dress', '$110.00')}>
          <img src="r3.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Fairy Boho Dress</p>
          <p className='prize'>$110.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>
  
        <div className="classified" onClick={() => handleDivClick('r4.jpg', 'BodyCon LongDress', '$185.00')}>
          <img src="r4.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>BodyCon LongDress </p>
          <p className='prize'>$185.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>
      </div>
  
      <div className="collections">
      <div className="classified" onClick={() => handleDivClick('r5.jpg', 'Flora Midi Dress ', '$85.00')}>
          <img src="r5.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Flora Midi Dress </p>
          <p className='prize'>$85.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>
      
        <div className="classified" onClick={() => handleDivClick('r6.jpg', 'Sleeveless Dress', '$102.00')}>
          <img src="r6.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Sleeveless Dress</p>
          <p className='prize'>$102.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>     
  
        <div className="classified" onClick={() => handleDivClick('r7.jpg', 'Rose SquareNeck', '$310.00')}>
          <img src="r7.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Rose SquareNeck</p>
          <p className='prize'>$310.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>        
  
        <div className="classified" onClick={() => handleDivClick('r8.jpg', 'Staps Mini Dress', '$30.00')}>
          <img src="r8.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Staps Mini Dress</p>
          <p className='prize'>$30.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>  
      </div>
    </div>
  

    </div>
  
      

    <div className="newArrivals2" >
        <h1 className='newA' >GUCCI Store</h1>
        <div className="n2">
          <p className='product'>10 Product</p>
        </div>

        <div className="remaining">
    <div className="collections">
    <div className="classified" onClick={() => handleDivClick('g1.jpg','Gucci Crop Pant', '$350.00' ,'Iconic and Legendary')}>
          <img src="g1.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Gucci Cropped Pant </p>
          <p className='prize'>$350.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
          </div> 
  
          <div className="classified" onClick={() => handleDivClick('g2.jpg', 'Jacquard Shorts', '$205.00')}>
          <img src="g2.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>  Jacquard Shorts</p>
          <p className='prize'>$205.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>
  
        <div className="classified" onClick={() => handleDivClick('g3.jpg', 'Belted Leather Jacket', '$110.00','Very Affordable')}>
          <img src="g3.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Belted Leather Jacket</p>
          <p className='prize'>$110.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>
  
        <div className="classified" onClick={() => handleDivClick('g4.jpg', 'Gucci Coat ', '$185.00')}>
          <img src="g4.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Gucci Coat  </p>
          <p className='prize'>$185.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>
      </div>
  
      <div className="collections">
      <div className="classified" onClick={() => handleDivClick('g5.jpg', 'Gucci T-Shirt', '$85.00')}>
          <img src="g5.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Gucci T-Shirt </p>
          <p className='prize'>$85.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>
      
        <div className="classified" onClick={() => handleDivClick('g6.jpg', 'Gucci MiniDress', '$102.00')}>
          <img src="g6.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Gucci MiniDress</p>
          <p className='prize'>$102.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>     
  
        <div className="classified" onClick={() => handleDivClick('g7.jpg', 'Gucci BackPack', '$310.00')}>
          <img src="g7.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Gucci BackPack</p>
          <p className='prize'>$310.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>        
  
        <div className="classified" onClick={() => handleDivClick('g8.jpg', 'Gucci SweatPant ', '$30.00')}>
          <img src="g8.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Gucci SweatPant </p>
          <p className='prize'>$30.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>  
      </div>
      <div className="collections">
      <div className="classified" onClick={() => handleDivClick('g9.jpg', 'Canvas Pouch', '$85.00')}>
          <img src="g9.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'  id='summerBikini'>Canvas Pouch</p>
          <p className='prize' >$85.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>

        <div className="classified" onClick={() => handleDivClick('g10.jpg', 'Gucci Black Shoe   ', '$85.00')}    >
          <img src="g10.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Gucci Black Shoe </p>
          <p className='prize'>$85.00</p>
          <h1 className='stressfull'    
          >ADD TO CART</h1>
        </div>
        </div>
    </div>
    </div>



    <div className="newArrivals2"             
    >
        <h1 className='newA'  >SUMMER Bikini</h1>
        <div className="n2">
          <p className='product' >8 Product</p>
        </div>

        <div className="remaining">
    <div className="collections">
    <div className="classified" onClick={() => handleDivClick('s1.jpg','Blue Cropped Bikini ', '$150.00' )}>
          <img src="s1.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Blue Cropped Bikini </p>
          <p className='prize'>$150.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
          </div> 
  
          <div className="classified" onClick={() => handleDivClick('s2.jpg', 'Rainbow Bikini', '$105.00', "Vintage Fendi classics")}>
          <img src="s2.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>  Rainbow Bikini</p>
          <p className='prize'>$105.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>
  
        <div className="classified" onClick={() => handleDivClick('s3.jpg', 'Blue Scarf Bikini', '$110.00','Very Affordable')}>
          <img src="s3.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Blue Scarf Bikini</p>
          <p className='prize'>$110.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>
  
        <div className="classified" onClick={() => handleDivClick('s4.jpg', 'Rainbow Arm Bikini  ', '$185.00')}>
          <img src="s4.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Rainbow Arm Bikini   </p>
          <p className='prize'>$185.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>
      </div>
  
      <div className="collections">
      <div className="classified" onClick={() => handleDivClick('s5.jpg', 'LongSleeve Summer Wear', '$85.00')}>
          <img src="s5.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>LongSleeve Summer Wear </p>
          <p className='prize'>$85.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>
      
        <div className="classified" onClick={() => handleDivClick('s6.jpg', 'One Arm Summer Wear ', '$102.00')}>
          <img src="s6.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>One Arm Summer Wear</p>
          <p className='prize'>$102.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>     
  
        <div className="classified" onClick={() => handleDivClick('s7.jpg', 'Grey Scarf Bikini ', '$310.00')}>
          <img src="s7.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Grey Scarf Bikini</p>
          <p className='prize'>$310.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>        
  
        <div className="classified" onClick={() => handleDivClick('s8.jpg', 'Black Strips Bikini   ', '$190.00')}>
          <img src="s8.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag' id='giftCard'>Black Strips Bikini </p>
          <p className='prize'>$190.00</p>
          <h1 className='stressfull' >ADD TO CART</h1>
        </div>  
      </div>

    </div>
    </div>
  


    <div className="newArrivals2" >
        <h1 className='newA' >GIFT CARDS</h1>
        <div className="n2">
          <p className='product'>Order Gift Cards for Family and Friends </p>
        </div>

        <div className="remaining">
    <div className="collections">
    <div className="classified" onClick={() => handleDivClick('i1.jpg','iTunes Gift Card', '$500.00' ,'Gaming','Subscription')}>
          <img src="i1.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>iTunes Gift Card </p>
          <p className='prize'>$500.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
          </div> 
  
          <div className="classified" onClick={() => handleDivClick('i2.jpg', 'iTunes Gift Card', '$50.00','Gaming','Subscription')}>
          <img src="i2.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>  iTunes Gift Card</p>
          <p className='prize'>$50.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>
  
        <div className="classified" onClick={() => handleDivClick('i3.jpg', 'Apple Gift Card', '$100.00','Gaming','Subscription')}>
          <img src="i3.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Apple Gift Card</p>
          <p className='prize'>$100.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>
  
        <div className="classified" onClick={() => handleDivClick('i4.jpg', 'Steam Gift Card  ', '$50.00', 'Gaming','Subscription')}>
          <img src="i4.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Steam Gift Card  </p>
          <p className='prize'>$50.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>
      </div>
  
      <div className="collections"  >
      <div className="classified" onClick={() => handleDivClick('i5.jpg', 'Apple Gift Card', '$100.00', 'Gaming','Subscription')}>
          <img src="i5.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'  id="shopAll">Apple Gift Card </p>
          <p className='prize'  >$100.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>
      


  

      </div>

    </div>
 </div>


 <div className="newArrivals2"             
    >
        <h1 className='newA'  >SHOP ALL</h1>
        <div className="n2">
          <p className='product' >8 Product</p>
        </div>

        <div className="remaining">
    <div className="collections">
    <div className="classified" onClick={() => handleDivClick('mask.jpg','White Mask  ', '$150.00' ,'Iconic and Legendary','Made of soft coloured Nappa leather', 'Removable inner hooks and gold-finish metalware.')}>
          <img src="mask.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>White Mask</p>
          <p className='prize'>$150.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
          </div> 
  
          <div className="classified" onClick={() => handleDivClick('nike.jpg', ' Nike Hoodie', '$205.00','Fashion Hoodie', "Vintage Fendi classics")}>
          <img src="nike.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>  Nike Hoodie</p>
          <p className='prize'>$205.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>
  
        <div className="classified" onClick={() => handleDivClick('watch1.jpg', 'Cartel', '$810.00','Classic  ', 'Keep employees warm and looking professional', 'Very Affordable')}>
          <img src="watch1.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Cartel</p>
          <p className='prize'>$810.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>
  
        <div className="classified" onClick={() => handleDivClick('bl.jpg', 'RoundNeck ', '$35.00')}>
          <img src="bl.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>RoundNeck </p>
          <p className='prize'>$35.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>
      </div>
  
      <div className="collections">
      <div className="classified" onClick={() => handleDivClick('shoe2.jpg', 'Channel Black Shoe<', '$385.00')}>
          <img src="shoe2.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Channel Black Shoe</p>
          <p className='prize'>$385.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>
      
        <div className="classified" onClick={() => handleDivClick('shoe1.jpg', 'SNP Sneaker ', '$102.00')}>
          <img src="shoe1.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>SNP Sneaker</p>
          <p className='prize'>$102.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>     
  
        <div className="classified" onClick={() => handleDivClick('h1.jpg', 'Fendi EyeGlass ', '$88.00')}>
          <img src="h1.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Fendi EyeGlass </p>
          <p className='prize'>$130.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>        
  
        <div className="classified" onClick={() => handleDivClick('hang.jpg', 'Up and Down ', '$130.00')}>
          <img src="hang.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag' id='giftCard'>Up and Down </p>
          <p className='prize'>$80.00</p>
          <h1 className='stressfull' >ADD TO CART</h1>
        </div>  
      </div>


      <div className="collections">
      <div className="classified" onClick={() => handleDivClick('h2.jpg', 'Rainbow Trouser', '$85.00')}>
          <img src="h2.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Rainbow Trouser</p>
          <p className='prize'>$230.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>
      
        <div className="classified" onClick={() => handleDivClick('k1.jpg', 'Gucci MiniDress', '$57.00')}>
          <img src="k1.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Armless NetShirt </p>
          <p className='prize'>$57.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>     
  
        <div className="classified" onClick={() => handleDivClick('k2.jpg', 'Hurt Sweatshirt', '$120.00')}>
          <img src="k2.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag'>Hurt Sweatshirt </p>
          <p className='prize'>$120.00</p>
          <h1 className='stressfull'>ADD TO CART</h1>
        </div>        
  
        <div className="classified" onClick={() => handleDivClick('k3.jpg', 'Heart Hoodie ', '$110.00')}>
          <img src="k3.jpg" alt="Gucci Bag" className='classifiedPic' />
          <p className='gucciBag' id='giftCard'>Heart Hoodie  </p>
          <p className='prize'>$110.00</p>
          <h1 className='stressfull' >ADD TO CART</h1>
        </div>  
      </div>

    </div>
    </div>
  
  {other && (

  
<div className="theB2">
  {lit && (
    <div className="b77">
      <h1 className='log3'>LIT--WEARS.Com</h1>

      </div>
  )}


      {bank23 && (
<div className="lol">
{tick75 && (
     <FontAwesomeIcon icon={faSpinner} spin  className='yoyoSpinner2'/>
    )}

<p className='payment'>Select an Option:</p>

      <div className="b778">
        <p className='bank1' onClick={payment}>Payment 
        {tick7 && (
          <FontAwesomeIcon icon={faCheck} />
         )}
         
          </p>
        <p className='bank1' onClick={address}>Address
        {tick && (
          <FontAwesomeIcon icon={faCheck} />
         )}
        </p>
        {/* <p className='bank1'>Bank Transfer</p> */}
        </div>
        {proceed1 && (
        <p className='proceed' onClick={proc}>Proceed <FontAwesomeIcon icon={faAngleRight} /></p>

        )}

      </div>
  )}
        {proceedSection && (
          <div className="theSection">
            <div className='theSectionA'>
            <FontAwesomeIcon icon={faCircleCheck}  className='circle'/>
            </div>
       <p className='theSectionB'>Payment Successful</p>
       <h1 className='theSectionC'>${totalPrice.toLocaleString()}.00</h1>
        <p className='theSectionCa'>Transaction Reference</p>
        <p className='theSectionC'>652477815429876432541</p>
        <p className='theSectionCa'>Payment Method</p>
        <p className='theSectionC'>{paymentMethod ? paymentMethod : 'Please select a payment method'}</p>
        <p className='proceed2' onClick={resetAll} >Done </p>
          </div>
        )}
  {betterAddress && (
    <div className="great">
      <FontAwesomeIcon icon={faArrowLeftLong}  className='leftArrow' onClick={backFromAddress}/>        
      <div className="point1">
        <div className="relate">
        <label className='z1'>First Name</label>
      <input
      type='text'
      placeholder='... '
      className='firstName'
      value={first}
      onChange={(e) => setFirst(e.target.value)}
      />
        </div>


        <div className="relate">
        <label className='z1'>Last Name</label>
      <input
      type='text'
      placeholder='... '
      className='firstName'
      value={first2}
      onChange={(e) => setFirst2(e.target.value)}


      />
        </div>
      
      </div>
      <div className="point2">
      <label className='z12'>Phone Number</label>

        <input 
        type='text'
      className='firstName2'
      placeholder='+234'
      value={first3}
      onChange={(e) => setFirst3(e.target.value)}
        />
      </div>

      <div className="point1">
        <div className="relate">
        <label className='z1'>Address</label>
      <input
      type='text'
      placeholder='... '
      className='firstName'
      value={first4}
      onChange={(e) => setFirst4(e.target.value)}
      />
        </div>


        <div className="relate">
        <label className='z1'>Confirm Address</label>
      <input
      type='text'
      placeholder='... '
      // placeholder='Last Name'
      className='firstName'
      value={first5}
      onChange={(e) => setFirst5(e.target.value)}
      />
        </div>
      
      </div>

      <div className="point2">
      <label className='z122'>Additional Information</label>

        <input 
        type='text'
      className='firstName22'
      placeholder='...'
      value={first6}
      onChange={(e) => setFirst6(e.target.value)}
        />
      </div>


      <div className="point1">
        <div className="relate">
        <label className='z1'>Region</label>
      <input
      type='text'
      placeholder='... '
      className='firstName'
      value={first7}
      onChange={(e) => setFirst7(e.target.value)}
      />
        </div>


        <div className="relate">
        <label className='z1'>City</label>
      <input
      type='text'
      placeholder='... '
      className='firstName'
      value={first8}
      onChange={(e) => setFirst8(e.target.value)}
      />
        </div>
      
      </div>
      {saved2 && (
      <div className="confirmNi">
      <p className='confirm' onClick={aboutTo}>Confirm</p>
      </div>
      )}

   {saved && (
      <div className="confirmNi">
      <p className='confirm' onClick={aboutTo2}>Saved</p>
      </div>
   )}

    {spinall && (
      <div className="theSpinner">
      <FontAwesomeIcon icon={faSpinner} spin  className='yoyoSpinner2'/>
      </div>
    )}

    </div>
  )}


  {bank2 && (
<div className="lol">
<FontAwesomeIcon icon={faArrowLeftLong}  className='leftArrow' onClick={backArrow122}/>        
<p className='payment'>Select a Payment Option:</p>

      <div className="b778">
        <p className='bank1' onClick={bankFf}>Bank Transfer 
        {tickBank2 && (
          <FontAwesomeIcon icon={faCheck} />
         )}
        </p>
        <p className='bank1' onClick={debitCard}>Debit Card
        {tickBank5 && (
          <FontAwesomeIcon icon={faCheck} />
         )}
        </p>
        <p className='bank1' onClick={bankTransfer2}>Bank Transfer(2)
        {tickBank3 && (
          <FontAwesomeIcon icon={faCheck} />
         )}
        </p>
        </div>
      </div>
  )}

  {bank && (
  <div className="bankTransfer" >
<FontAwesomeIcon icon={faArrowLeftLong}  className='leftArrow' onClick={backArrow1}/>        
      <p className='payment2'>Transfer to the bank account below:</p>
 <div className="forREal">
  <div className="incase">
    <p>Bank: Kuda MFB</p>
    <p>Account Number: 2049975022</p>
     <p>Account Name: Yunus Ayomide </p>
     {transfer && (
     <div className="click">
     <div className='ll' onClick={clLoader}>Click here after transfer</div>
     </div>
     )}

{confirm && (
     <div className="click">
     <div className='ll' onClick={clickConfirm}>Confirmed</div>
     </div>
     )}


     {loader && (
     <div className="loader">
     <FontAwesomeIcon icon={faSpinner} spin  className='yoyoSpinner2'/>
     </div>
     )}

  </div>
 </div>
 <p className='cancel' onClick={backArrow12}>Cancel</p>
        </div>
  )}

{secondBank && (
  <div className="bankTransfer" >
<FontAwesomeIcon icon={faArrowLeftLong}  className='leftArrow' onClick={backPoint}/>        
      <p className='payment2'>Transfer to the bank account below:</p>
 <div className="forREal">
  <div className="incase">
    <p>Bank: Access Bank</p>
    <p>Account Number: 1878149237</p>
     <p>Account Name: Yunus Ayomide </p>
     {transfer3 && (
     <div className="click">
     <div className='ll' onClick={clLoader3}>Click here after transfer</div>
     </div>
     )}

{confirm2 && (
     <div className="click">
     <div className='ll' onClick={clickConfirm2}>Confirmed</div>
     </div>
     )}

     {loader3 && (
     <div className="loader">
     <FontAwesomeIcon icon={faSpinner} spin  className='yoyoSpinner2'/>
     </div>
     )}

  </div>
 </div>
 <p className='cancel' onClick={cancelSecondBank}>Cancel</p>
        </div>
  )}


  {debit && (
      <div className="bankTransfer" >
      <FontAwesomeIcon icon={faArrowLeftLong}  className='leftArrow' onClick={backFromCard}/>        
            <p className='payment2'>Enter Debit Card Details:</p>
       <div className="forREal">
        <div className="incase">
        <div className='setThemAll'>
      <label htmlFor="cardNumber" className='classNUm'> Card Number:</label>
      <input
        id="cardNumber"
        type="text"
        value={cardNumber}
        onChange={handleInputChange22}
        maxLength="19" // Max length for a 16-digit card with spaces
        placeholder="1234 5678 9876 5432"
   
      />


      <div className="setThemBetter">
      <div className="lab1">
        <label htmlFor='MM/DD'>MM/YY</label>
        <input
        type='text'
        placeholder='MM/YY'
         maxLength="5"
         className='lab1a'
         value={cardNumber2}
        onChange={handleInputChange44}

         />
      </div>

      <div className="lab1">
        <label htmlFor='MM/DD'>CVV</label>
        <input
        type='text'
        placeholder='CVV'
         maxLength="3"
         className='lab1a'
         value={cardNumber22}
         onChange={handleInputChange444}
 

        />
      </div>
      </div>
    </div>
           {transfer2 && (
           <div className="click">
           <div className='ll' onClick={clLoader2}>Click here after transfer</div>
           </div>
           )}
      
           {loader2 && (
           <div className="loader">
           <FontAwesomeIcon icon={faSpinner} spin  className='yoyoSpinner2'/>
           </div>
           )}

           {confirm5 && (
     <div className="click">
     <div className='ll' onClick={clickConfirm5}>Confirmed</div>
     </div>
     )}

      
        </div>
       </div>
       <p className='cancel' onClick={backArrow12yeah}>Cancel</p>
              </div>
  )}
</div>
)}

{prizeTag && (
  <div className={`theB ${addNewClass ? 'newClass' : ''}`}>
    <div className="display1">
      {/* Display the image of the latest selected item */}
      {selectedText.imageSrc && (
        <img src={selectedText.imageSrc} alt="Selected" className='classifiedPic2' />
      )}
    </div>

    <div className="display2">
      <FontAwesomeIcon icon={faCircleXmark} className="faCircleXmark2" onClick={deleteThem} />
      
      {/* Display the name, description, and price of the selected item */}
      <p className='selectedTextName'>{selectedText.name}</p>
      <p className='descriptions'>Descriptions:
        <ul className='listA'>
          <li>{selectedText.details1}</li>
          <li>{selectedText.details2}</li>
          <li>{selectedText.details3}</li>
        </ul>
      </p>
      <p className='price'>Price: 
        <p className='selectedText22'>{selectedText.price}</p>
      </p>

      {/* Remove button for the selected item */}
      {/* {selectedNames.map((item, index) => (
              <p className='addToCart' key={index}onClick={() => addedAlready(item.name, item, index)}>REMOVE ITEM</p>

            ))} */}
            {selectedNames.map((item, index) => (
  <p 
    className='addToCart' 
    key={index} 
    onClick={() => addedAlready(index, item)}
  >
    REMOVE ITEM
  </p>
))}



    </div>
  </div>
)}



  {/* <div className="fli">
    <div className="loll">
    <FontAwesomeIcon icon={faPlane} className='plane1'/>
    <div className="about">
    <h1>ShotSpace</h1>
    <p>Home</p>
    <p>About Us</p>
    <p>Work</p>
    <p className='Book'>Book a Flight</p>

    </div>
    </div>
    <h1 className='s'>Search Flights</h1>
   <div className="ma">
    <div className="light">
    <label className='la'>FLYING FROM</label>
    <input 
    type='text'
     className='in'
    />

<label className='la2'>FLYING TO</label>
    <input 
    type='text'
    className='in'/>
    <p className='sar'>Searched</p>
   </div>
   </div>
   <p className=''>When planning an exciting journey from the United States to the United Kingdom, it's important to consider both the financial and logistical aspects of your trip. Typically, the cost of a flight for this transatlantic adventure hovers around 1,200 pounds, a price that reflects the convenience and comfort of air travel across such a considerable distance. By making your payment now, you not only secure your ticket but also guarantee availability for your desired travel dates, which is particularly advantageous given the high demand for flights between these two vibrant countries. Once your payment is processed, you can expect your flight to be scheduled within the next 2 to 3 weeks, providing you with ample time to finalize your travel plans, prepare for your adventure, and explore the rich cultural experiences that await you in the UK. This advance planning allows you to focus on the exciting details of your trip, such as researching landmarks, arranging accommodations, and even brushing up on local customs, ensuring that your journey is both memorable and hassle-free.</p>
  </div> */}


      <div className="black">
        <div className="lastPart" id="targetSection">
          <div className="customerCare">
            <h1 className='care' onClick={() => setIsVisible(!isVisible)}>
              CUSTOMER CARE <FontAwesomeIcon icon={faCaretDown} className="icon" />
            </h1>
            {isVisible && (
              <div className="firstRow"  >
                <p className='contact' onClick={() => setInsta(!insta)} >Contact</p>
                {insta && (
                  <div className="ig">
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                )}
                <p className='feedBack' onClick={() => setShow(!show)}>Send Feedback</p>
              </div>
            )}
          </div>

          <div className="trackOrder">
            <h1 className='care' onClick={() => setCustomer(!customer)}>
              CUSTOMER ACCOUNTS <FontAwesomeIcon icon={faCaretDown} className="icon" />
            </h1>
            {customer && (
              <div className="firstRow">
                <p className='contact' onClick={clickItems}>Order History</p>
                <p className='contact' onClick={checkOut}>Track Order</p>
              </div>
            )}
          </div>
        </div>
        <div className="usa">
       <p className='usd'><FontAwesomeIcon icon={faFlagUsa}  className='usaFlag' /> United States (USD $ )  </p>   
       </div>
       <div className="cards">
       <FontAwesomeIcon icon={faCcMastercard} />
       <FontAwesomeIcon icon={faCcVisa} />
       <FontAwesomeIcon icon={faCcPaypal} />
       <FontAwesomeIcon icon={faCcApplePay} />
       <FontAwesomeIcon icon={faCcAmazonPay} />
       <FontAwesomeIcon icon={faCcDiscover} />
       <FontAwesomeIcon icon={faWizardsOfTheCoast} />
       </div>
       <p className='lit1'><FontAwesomeIcon icon={faCopyright} className='copyRight'/>2024 Lit Wears</p>
       <p className='lit2'>Designed by LITCODES_1</p>      </div>

       {show && (
         <div className="bigBox">
         <FontAwesomeIcon icon={faCircleXmark} className="faCircleXmark" onClick={showContent}/>
        {review && (
<div className="relate" >
<h1 className='kindly'>Kindly Send Your Review..</h1>
   {/* <p className='send'>Send us a feedback or contact us if you got a problem</p> */}
   <div className="faces">
   <FontAwesomeIcon icon={faFaceSmile}  className='smile1'/>
   <FontAwesomeIcon icon={faFaceAngry}  className='smile1'/>
   </div>
   <div className="holdThem">
<input
type="text"
value={inputValue}
onChange={handleInputChange}
placeholder="Type something..."
className="textInput"
/>
<button className='send2' onClick={sendReview}>Send</button>
</div>

</div>

        )}

        {mark && (
            <div className="marka">
         <FontAwesomeIcon icon={faCheck} beatFade className="animated-icon" />
         <p className='your'>Your Review Is On Its Way <FontAwesomeIcon icon={faMotorcycle} bounce className="ic" /></p>
            </div>

        )}
 </div>
       )}
    </div>
  );
};

export default Wears;
