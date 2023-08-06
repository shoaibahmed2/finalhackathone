import paypal from "../../src/checkout/paypal.png";
import ae from "../../src/checkout/americanexpress.png";
import visa from "../../src/checkout/visa.png";
import mastercard from "../../src/checkout/master.png";
// import teacher from "../../src/checkout/confidentteacher.png";
// import zoom from "../../src/images/checkout/zoom.png";
// import kid from "../../src/images/checkout/kid.png";
// import cat from "../../src/images/checkout/cat.png";
import Footer from "./footer";
const Checkout = () => {
  return (
    <div>
      <div className="flex flex-wrap  justify-center items-center gap-[52px] ">
        <div className=" flex flex-col  justify-center pt-[4.6%] rounded-[20px] border-spacing-1  max-sm:ml-[10%]  ">
          <p className="font-poppins font-[600] text-[36px] pt-[50px] ">
            Checkout
          </p>
          <p className="font-poppins font-[600] text-[18px] text-[#5B5B5B] pt-[9px]">
            Cart Type
          </p>

          <div className="flex flex-wrap gap-[20px] pt-[38px]">
            <img src={paypal} alt="" />
            <img src={ae} alt="" />
            <img src={visa} alt="" />
            <img src={mastercard} alt="" />
          </div>

          <div className="flex flex-col w-[100%]  gap-[10px] pt-[30px]">
            <p className="font-poppins font-[600] text-[18px] text-[#5B5B5B]   ">
              Name on Card
            </p>
            <input
              className="font-poppins text-[18px] text-[#9D9B9B] py-[16px] pl-[21px] rounded-[10px] border-[1px] "
              type="text"
              placeholder="Enter name on Card"
            />
            <p className="font-poppins font-[600] pt-[20px] text-[18px] text-[#5B5B5B]">
              Card Number{" "}
            </p>
            <input
              className="font-poppins text-[18px] text-[#9D9B9B] py-[16px] pl-[21px] rounded-[10px] border-[1px]     "
              type="text"
              placeholder="Enter Card Number"
            />
          </div>
          <>
            <div className="flex gap-[36px] justify-start flex-wrap  items-center pt-[30px] ">
              <div className="flex flex-col ">
                <p className="font-poppins font-[600] text-[18px] text-[#5B5B5B]  ">
                  Enter Expiration Date
                </p>
                <input
                  className="py-[17px]  pl-[21px]  rounded-[10px] border-[1px]  "
                  type="text"
                  placeholder="Enter Expiration Date"
                />
              </div>

              <div className="flex flex-col ">
                <p className="font-poppins font-[600] text-[18px] text-[#5B5B5B]  ">
                  CVC
                </p>

                <input
                  className="py-[17px]  pl-[21px]  rounded-[10px] border-[1px]  "
                  type="text"
                  placeholder="Enter CVC"
                />
              </div>
            </div>
          </>
          <div className="flex max-sm:justify-center  justify-start items-center  gap-[7px] pt-[17px]">
            <input
              className="rounded-[4px] w-[14px] h-[14px] border-[#D9D9D9] border-[1px]"
              type="radio"
            />
            <p className="font-poppins text-[18px] text-[#9D9B9B] ">
              Save my information for faster checkout
            </p>
          </div>
          <div className="pt-[50px]  ">
            <button className="bg-[blue] rounded-[12px] max-sm:px-[10%] max-sm:py-[10px] max-lg:px-[10%] font-poppins text-[26px] text-white px-[298px] py-[18px]  text-center ">
              Confirm Payment
            </button>
          </div>
        </div>
      </div>

      <div className="pt-[20px]">{/* <Footer /> */}</div>
    </div>
  );
};

export default Checkout;
