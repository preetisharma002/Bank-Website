import styles from "../style"
import { discount, robot } from "../assets";
import GetStarted from './GetStarted'


const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingy}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-row items-center py-[6px] bg-discount-gradient rounded-[10px] mb-2 mt-6 p-1">

                <img src={discount} alt="discount"
                    className="w-[32px] h-[32px]" />

                <p className={`${styles.paragraph}ml-2 text-base sm:text-sm md:text-base lg:text-lg xl:text-xl`}>
                    <span className="text-white">20%</span> Discount For {" "}
                    <span className="text-white">New Account</span> Holder 
                </p>
            </div>

            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="text-white flex-1 font-poppins font-semibold ss:text-[70px] text-[50px] ss:leading-[100px] leading-[75px]">
                    The Next <br className="sm:block hidden" />{" "}
                    <span
                        className="text-gradient">Generation</span> {" "}

                </h1>

                <div className="ss:flex hidden md:mr-4 mr-0">
                    <GetStarted />

                </div>
            </div>
            <h1 className="text-white  font-poppins font-semibold ss:text-[66px] text-[52px] ss:leading-[100px] leading-[75px] w-full" > Payment Method.</h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>we specialize in seamless digital banking, competitive loan rates, and personalized investment strategies. Experience secure, customer-centric financial solutions designed to empower your future.</p>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5] mt-11" />
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient " />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 blue__gradient " />
        </div>
        <div className={`ss:hidden ${styles.flexCenter}`}>
            <GetStarted />
        </div>

    </section>
)


export default Hero