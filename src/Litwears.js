import './Litwears.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';  
import { useState } from 'react';
import gucciBag from '../src/gucciBag.jpg'
import { faCaretDown  } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faFaceAngry } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFlagUsa } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEmail } from './EmailContext';
import Wears from './Wears';


import { 
    faCcMastercard, 
    faCcVisa, 
    faCcPaypal, 
    faCcApplePay, 
    faCcAmazonPay, 
    faCcDiscover, 
    faWizardsOfTheCoast 
} from '@fortawesome/free-brands-svg-icons';









   
   const Litwears = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [show, setShow] = useState(false);
    const [review, setReview] = useState(true);
    const [mark, setMark] =useState(false)
    const [inputValue, setInputValue] = useState('');
    const [insta, setInsta] = useState(false);
    const [customer, setCustomer]  = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [p2p, setP2p] = useState(true)
    const [welcome, setWelcome] = useState(false)



    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };

      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
  

      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
      
    
      
    const toggleFixBar = () => {
      setIsVisible(!isVisible);}
      const toggleFixBar2 = () => {
        setIsVisible(!isVisible);}
        const showContent = () => {
            setShow(!show);}
        const sendReview = () => {
            
            if(inputValue.trim() === '') {
                
            }else{
                setMark(!mark)
                setReview(!review)
            }
        }

        const justDo = () => {
            if(email.trim() === '' && password.trim() === '') {

            }else {
             setP2p(!p2p)
             setWelcome(!welcome)
            }
        }

        const contact = () => {
            setInsta(!insta);}

            const customerAcc = () => {
                   setCustomer(!customer)
            }
            const scrollToContact = () => {
                const section = document.getElementById('toContact');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              };

              const scrollToCreate = () => {
                const section = document.getElementById('toCreate');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              };
        
    return ( 
        <div className="lit-wear">
            <div className="cLogo">
            <h1 className='logo'> LIT--WEARS.Com</h1>
            </div>
            <FontAwesomeIcon icon={faBars} className='faBars' onClick={toggleFixBar}/>
            <div className={`fixBar ${isVisible ? 'visible' : ''}`}>  
           <div className="centerBar">
         
           <p className='line'>HOME</p>
        
           <p className='lineUp'></p>

           <Link to="/wears" className="no-underline">
           <p className='line2'>NEW ARRIVALS</p>
           </Link>
           <p className='lineUp'></p>

           <Link to="/wears" className="no-underline">
           <p className='line3'>SHOP ALL</p>
           </Link>
           <p className='lineUp'></p>

           <Link to="/wears" className="no-underline">
           <p className='line4'>GIFT CARDS</p>
           </Link>
           <p className='lineUp'></p>

           <Link to="/wears" className="no-underline">
           <p className='line5'>GUCCI STORE</p>
           </Link>
           <p className='lineUp'></p>


           <p className='line6' onClick={scrollToContact}>CONTACT</p>
           <p className='lineUp'></p>

           <p className='line7' onClick={scrollToCreate}>CREATE ACCOUNT</p>


           </div>
           
 </div>


 <div className="play">
    <div className="backSales">
     <div className="block1">
      <img src="jog.jpg" alt="gucci bag"  className='one'/>
        {/* <p className='two'>
            <p>Gucci Top</p>
        </p> */}
     </div>
     <div className="block1">
     <img src="mask.jpg" alt="gucci bag"  className='one'/>

     </div>
     <div className="block1">
     <img src="nike.jpg" alt="gucci bag"  className='one'/>

     </div>
     <div className="block1">
     <img src="updown.jpg" alt="gucci bag"  className='one'/>

     </div>
     <div className="block1">
     <img src="shoe1.jpg" alt="gucci bag"  className='one'/>

     </div>
    
     <div className="block1">
     <img src="shoe2.jpg" alt="gucci bag"  className='one'/>

     </div>
     <div className="block1">
     <img src="shoe3.jpg" alt="gucci bag"  className='one'/>

     </div>
     <div className="block1">
     <img src="watch1.jpg" alt="gucci bag"  className='one'/>

     </div>
     <div className="block1">
     <img src="suite.jpg" alt="gucci bag"  className='one'/>

     </div>
     <div className="block1">
     <img src="bl.jpg" alt="gucci bag"  className='one'/>
     </div>
    </div>
 </div>
<div className="bet">
<p className='summer'>THE SUMMER COLLECTION</p>
    <div className="collections">
      <div className="c1">
      <img src="s1.jpg" alt="gucci bag"  className='none'/>
    <p>Blue Cropped Bikini</p>
        </div>       

              <div className="c1">
              <img src="s2.jpg" alt="gucci bag"  className='none'/>
    <p>Rainbow Bikini</p>
        </div>      

        <div className="c1">
        <img src="s3.jpg" alt="gucci bag"  className='none'/>
    <p>Blue Scarf Bikini </p>
        </div>    

                <div className="c1">
        <img src="s4.jpg" alt="gucci bag"  className='none'/>
    <p>Rainbow Arm Bikini</p>
        </div>    
    </div>
    <div className="bc">
    <Link to="/wears">
    <button className='view'>VIEW ALL</button>
    </Link>
    </div>
</div>
<div className="off">
<p className='summer'>-50% COLLECTION</p>
<div className="collections">
      <div className="c1">
      <img src="hang.jpg" alt="gucci bag"  className='none'/>
      <div className='lin'>
        <p className='op1'>$120.00</p>
        <p>$80.00</p>
        </div>
        </div>       

              <div className="c1">
              <img src="h1.jpg" alt="gucci bag"  className='none'/>
              <div className='lin'>
        <p className='op1'>$150.00</p>
        <p>$130.00</p>
        </div>
        </div>      

        <div className="c1">
        <img src="h2.jpg" alt="gucci bag"  className='none'/>
        <div className='lin'>
        <p className='op1'>$250.00</p>
        <p>$230.00</p>
        </div>

        </div>    

                <div className="c1">
        <img src="h3.jpg" alt="gucci bag"  className='none'/>
        <div className='lin'>
        <p className='op1'>$110.00</p>
        <p>$90.00</p>
        </div>
        </div>    
    </div>
    <div className="bc">
    <Link to="/wears">
    <button className='view'>VIEW ALL</button>
    </Link>
    </div>
</div>


  <div className="remaining">
  <div className="collections">
      <div className="c1">
      <img src="k1.jpg" alt="gucci bag"  className='none'/>
    <p>Net Singlet</p>
        </div>       

              <div className="c1">
              <img src="k2.jpg" alt="gucci bag"  className='none'/>
    <p>Hurt SweatShirt</p>
        </div>      

        <div className="c1">
        <img src="k3.jpg" alt="gucci bag"  className='none'/>
    <p>Heart Hoodie</p>
        </div>    

                <div className="c1">
        <img src="k4.jpg" alt="gucci bag"  className='none'/>
    <p>Space Bags</p>
        </div>    
    </div>

    <div className="collections">
      <div className="c1">
      <img src="k5.jpg" alt="gucci bag"  className='none'/>
    <p>Brown Fendi Bag</p>
        </div>       

              <div className="c1">
              <img src="k6.jpg" alt="gucci bag"  className='none'/>
    <p>White Fendi Bag</p>
        </div>      

        <div className="c1">
        <img src="k7.jpg" alt="gucci bag"  className='none'/>
    <p>Channel Shoe</p>
        </div>    

                <div className="c1">
        <img src="k8.jpg" alt="gucci bag"  className='none'/>
    <p>Naked Singlet</p>
        </div>    
    </div>
  </div>

  <div className="bc">
    <Link to="/wears">
    <button className='view'>VIEW ALL</button>
    </Link>
    </div>

     {/* THE LAST PART */}
     {/* THE LAST PART */}
     {/* THE LAST PART */}

   <div className="black">
       <div className="lastPart">
        <div className="customerCare">
            <h1 className='care' onClick={toggleFixBar2}>CUSTOMER CARE <FontAwesomeIcon icon={faCaretDown } className="icon" /></h1>
            {isVisible && (
        <div className="firstRow">
          <p className='contact' onClick={contact} id='toContact'>Contact</p>
          {insta && (
          <div className="ig">     
           <FontAwesomeIcon icon={faInstagram} />
           <FontAwesomeIcon icon={faFacebook}  />
           <FontAwesomeIcon icon={faTwitter} />
           <FontAwesomeIcon icon={faYoutube} />
          </div>
          )}
          <p className='feedBack' onClick={showContent}>Send FeedBack</p>
          
        </div>
      )}
</div>
<div className="trackOrder">
    <h1 className='care' onClick={customerAcc}>CUSTOMER ACCOUNTS <FontAwesomeIcon icon={faCaretDown } className="icon" /></h1>
    {customer && (
    <div className="firstRow">
    <p className='contact'>Order History</p>
    <p className='contact'>Track Order</p>
 </div>
    )}

</div>

<div className="trackOrder">
    <h1 className='care' id='toCreate'>CREATE ACCOUNT</h1>
    {p2p && (

    
    <div className="enter" >
    <p className='enterMail'>Enter e-mail</p>
    <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
        className="emailInput"
      />

<p className='enterMail'>Enter Password</p>
    <input
        type="Password"
        id="email"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your email"
        className="emailInput"
      />
            <div className="confirm2">
      <button className='confir44m' onClick={justDo}>Confirm</button>
      </div>
      </div>
      )}
 {welcome && (
  <div className="congrats">
  <h1>WELCOME</h1>
  <p> `{email}`</p>
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
       <p className='lit2'>Designed by LITCODES_1</p>
        </div>
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
}
 
export default Litwears;