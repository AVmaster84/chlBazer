import React from "react";
import { Separator } from "../ui/separator";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import Link from 'next/link'
import { dummyCategories } from "@/data/category/categoryData";
import Logo from "../logo/Logo";


const Footer = () => {
  return (
    <footer className=" bg-gray-700 text-white py-8 px-4 md:px-8">
      <div className="max-w-(--breakpoint-xl) mx-auto p-4 md:p-8 flex md:flex-row  flex-wrap gap-4 md:gap-2 justify-between">
        <div className="flex flex-col space-y-4 mb-8 md:mb-0">
          <Logo />
          <p>Tư vấn cung cấp thiết bị công nghệ.</p>
          <div className="flex space-x-4">
            <Link
              href="www.facebook.com/camhieplonglk"
              className=""
            >
              <FaFacebook size={30}/>
            </Link>
            <Link
              href="www.x.com"
              className=""
            >
              <FaTwitter size={30}/>
            </Link>
            <Link
              href="www.instagram.com"
              className=""
            >
              <FaInstagramSquare size={30}/>
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold">Danh mục</h3>
          <ul className="space-y-2">
            {dummyCategories.map(category => (
              <li key={category.name}>
              <Link
                href={`/shop?category=${category.name}`}
                className=""
              >
                {category.name}
              </Link>
            </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold">Điều hướng</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className=""
              >
                Trang chủ
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className=""
              >
                Về chúng tôi
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className=""
              >
                Liên hệ
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className=""
              >
                Hàng hóa
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/help"
                className=""
              >
                Trung tâm trợ giúp
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=""
              >
                Trả hàng & hoàn tiền
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=""
              >
                Điều khoản & dịch vụ
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=""
              >
                Điều khoản bảo mật
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-[2px] bg-white" />
      <div className="text-center mt-8">
        <p>&copy; 2025 Công ty TNHH TMDV Cam Hiệp Long.</p>
      </div>
    </footer>
  );
};

export default Footer;
