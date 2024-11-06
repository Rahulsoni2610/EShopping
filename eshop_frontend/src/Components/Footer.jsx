import { MdOutlineEmail } from "react-icons/md";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa6";
import visa from "../assets/images/payment-icons/visa.svg";
import gpay from "../assets/images/payment-icons/gpay.svg";
import mastercard from "../assets/images/payment-icons/mastercard.svg";
import paypal from "../assets/images/payment-icons/paypal.svg";
import apple_pay from "../assets/images/payment-icons/apple_pay.svg";

const Footer = () => {

  const socialIcons = [
    { Icon: FaTwitter, link: "#" },
    { Icon: FaFacebook, link: "#" },
    { Icon: FaInstagram, link: "#" },
    { Icon: FaGithub, link: "#" }
  ];

  const paymentIcons = [visa, mastercard, paypal, apple_pay, gpay];

  const footerSections = [
    { title: 'Company', items: ['About', 'Feature', 'Works', 'Career'] },
    { title: 'Help', items: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'] },
    { title: 'F A Q', items: ['Accounts', 'Manage Deliveries', 'Orders', 'Payments'] },
    { title: 'Resources', items: ['Free eBooks', 'Development Tutorial', 'Privacy Policy', 'Terms & Conditions'] }
  ];

  return (
    <div className="bg-[#F0F0F0] text-white">
      <div className="h-20 bg-white absolute w-full"></div>
      <div className="mx-4 md:mx-16 relative top-0">
        <div className="bg-[#5D1010] rounded-xl text-white font-bold text-lg md:text-4xl md:p-6 p-3 flex flex-col md:flex-row md:items-center">
          <div className="md:w-2/5 text-center md:text-left text-4xl font-extrabold">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </div>
          <div className="md:w-3/5 mt-4 md:mt-0 md:px-8">
            <form className="md:w-64 w-full md:float-right justify-center md:justify-end">
              <div className="relative flex items-center mb-3">
                <MdOutlineEmail className="absolute pl-3 size-7 text-[#313957] text-black opacity-25" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="pl-8 py-3 text-sm text-[#313957] bg-[#F3F9FA] rounded-3xl w-full"
                  required
                />
              </div>
              <button
                type="submit"
                className="py-3 text-sm text-[#313957] bg-[#F3F9FA] rounded-3xl w-full"
              >
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div>

        <div className="pt-6">
          <div className="md:flex md:justify-between">
            <div className="mb-4 md:mb-0">
              <span className="text-black text-2xl font-extrabold">SHOP.CO</span>
              <p className="mt-2 text-black opacity-70">
                We have clothes that suit your style and <br className="hidden md:block" /> which you’re proud to wear. From <br className="hidden md:block" /> women to men.
              </p>
              <div className="flex mt-4 space-x-3">
                {socialIcons.map(({ Icon, link }, index) => (
                  <a key={index} href={link} className="hover:scale-110 text-gray-900">
                    <Icon className="size-6" />
                  </a>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 mt-4 md:mt-0">
              {footerSections.map((section, index) => (
                <div key={index}>
                  <h2 className="mb-6 text-sm font-semibold text-black uppercase">{section.title}</h2>
                  <ul className="text-black opacity-75">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="mb-3">
                        <a href="#" className="hover:underline">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <hr className="mt-6 bg-white border-[#5B1DE2] opacity-15" />
          <div className="flex flex-col md:flex-row py-3 justify-between items-center">
            <div className="text-sm text-gray-400 mb-2">© 2023 Eshoop All Rights Reserved.</div>
            <div className="flex space-x-3 mt-2 md:mt-0">
              {paymentIcons.map((icon, index) => (
                <a key={index} href="#" className="hover:scale-110 text-gray-900">
                  <img src={icon} alt="payment" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
