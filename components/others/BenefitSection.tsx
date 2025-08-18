import React from "react";
import { Truck, RefreshCcw, DollarSign, Users } from "lucide-react";

const BenefitsSection = ({ textCenter }: { textCenter: boolean }) => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
        {!textCenter ? (
          <div className="flex flex-wrap items-center justify-center md:justify-between mb-12">
            <h2 className="text-3xl md:text-5xl text-center! md:text-start font-bold  text-gray-900 dark:text-white border-l-4 p-2 border-l-rose-500 ">
              Ưu đãi khi mua sắm ở công ty chúng  tôi
            </h2>
          </div>
        ) : (
          <h2 className="text-3xl md:text-5xl font-bold text-start md:text-center text-gray-900 dark:text-white mb-12 border-l-4  border-l-rose-500 w-fit mx-auto p-2">
            Ưu đãi khi mua sắm ở công ty chúng  tôi
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center space-y-4 bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
            <Truck size={48} className="text-blue-500" />
            <h3 className="text-xl font-semibold text-gray-900">
              Free Shipping
            </h3>
            <p className="text-gray-700 text-center">
              Mua sắm thoải mái freeship ở Shopee, ở đây không có
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
            <RefreshCcw size={48} className="text-blue-500" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Hoàn hàng dễ dàng
            </h3>
            <p className="text-gray-700 text-center">
              Cũng có ở shopee
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
            <DollarSign size={48} className="text-blue-500" />
            <h3 className="text-xl font-semibold text-gray-900 ">
              Giá tốt nhất
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              Không chắc
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
            <Users size={48} className="text-blue-500" />
            <h3 className="text-xl font-semibold text-gray-900">
              Hỗ trợ khách hàng 24/7
            </h3>
            <p className="text-gray-700 text-center">
              Rồi mình ngủ giờ nào
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
