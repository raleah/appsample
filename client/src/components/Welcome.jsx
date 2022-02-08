import { AiFillPayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';


import { Loader } from './';

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[1px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) =>(
  <input placeholder={placeholder}
         type={type } 
         step="0.0001"
         value={value}
         onChange={(e) => {handleChange(e, name)}}
         className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {

  const connectWallet =() =>{

  }

  const handleSubmit = () =>{

  }

    return (
      <div className="flex w-full justify-center items-center">
        <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4"></div>
        <div className= "flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className= "text-3xl sm:text-5xl mt-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-300 via-purple-400 to-black">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left -mt-5 text-white md:w-9/12 w-11/12 text-base py-10">
            Easily buy and sell cryptocurrcies with minimum fees. Sign up bonuses now avaliable.
          </p>
          <button
          type="button"
          onClick={connectWallet}
          className="h-12 px-20 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800"
          >
            <p className="text-white text-base font-semibold">
              Connect Wallet
            </p>
          </button>

          <div className='grid sm:grid-cols-3 grid-cols-2w-full mt-10'>

            <div className={`rounded-tl-2xl ${commonStyles}`}>
              Safe
            </div>

            <div className={commonStyles}>
              Secure
            </div>

            <div className={`rounded-tr-2xl ${commonStyles}`}>
              Fast
            </div>

            <div className={`rounded-bl-2xl ${commonStyles}`}>
              Low Fees
            </div>

            <div className={commonStyles}>
              Accurate Prices
            </div>

            <div className={`rounded-br-2xl ${commonStyles}`}>
              Global Markets
            </div>
          </div>
          </div>

          <div className="flex flex-col flex-1 items-start justify-center w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="white"></SiEthereum>
                </div>

                <BsInfoCircle fontSize={17} color="white"></BsInfoCircle>
              </div>
              <div>
                <p className="text-white font-light text-sm">
                0x0000000...dEaD
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
              </div>
            </div>

            <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center white-glassmorphism">
              <Input placeholder="Address To" name="addressTo" type="text" handleChange={()=>{}}/>
              <Input placeholder="Amount ETH" name="amount" type="number" handleChange={()=>{}}/>
              <Input placeholder="Password" name="keyword" type="text" handleChange={()=>{}}/>
              <Input placeholder="Enter Message" name="message" type="text" handleChange={()=>{}}/>

              <div className="h-[1px] w-full bg-gray-400 my-2"></div>

              {false ?(
                <Loader />
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[white] rounded-full cursor-pointer">
                    Send Now
                </button>

              )
              }
            </div>


            </div>
        </div>
        
        );
}

export default Welcome;