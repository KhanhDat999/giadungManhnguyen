import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { AiOutlinePhone ,AiOutlineMenu } from 'react-icons/ai';
import "tailwindcss/tailwind.css";

function Header() {


    return (
        <>
            <div className="w-full h-[160px] bg-[#EF2E48] flex text-white">
                <div className="m-auto w-[100%] flex">
                    <div className="w-[30%] m-auto text-center">Gia Dụng Mạnh Nguyễn</div>
                    <div className="w-[50%] h-[50px] flex">
                        <input placeholder="Tìm kiếm..." className="pl-3 w-[90%] rounded-sm outline-none text-black" />
                        <button className="w-[10%] h-[100%] flex bg-black">
                            <FiSearch className='w-[60%] h-[60%] m-auto ' />
                        </button>
                    </div>
                    <div className="w-[20%] ml-8 sm:hidden md:flex ">
                        <div className='w-[20%] h-[100%] rounded-full bg-[#FFFD38] flex'>
                            <AiOutlinePhone className='m-auto text-black' />
                        </div>
                        <div className='w-[80%] ml-3'>
                            <p>Hỗ trợ khách hàng</p>
                            <p>23895325235</p>
                        </div>
                    </div>
                    <div className="w-[20%] ml-5"><FiShoppingCart /> <p>Giỏ hàng</p></div>
                </div>
            </div>
            <div className='w-full bg-slate-300 h-[50px] flex mb-[30px]'>
                <div className='sm:hidden w-[80%] md:flex m-auto justify-around'>
                    <div>Trang chủ</div>
                    <div>Trang chủ</div>
                    <div>Trang chủ</div>
                    <div>Trang chủ</div>
                    <div>Trang chủ</div>
                    <div>Trang chủ</div>
                </div>
                    <div className='md:hidden w-[50px] h-[50px] ' ><AiOutlineMenu/></div>
            </div>
        </>
    );
}

export default Header;