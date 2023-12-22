import React from "react";

const Payouts = () => {
  const rows = new Array(8).fill(0);
  return (
    <table className="w-full bg-white">
      <thead className="bg-[#F2F2F2] text-[#4D4D4D]">
        <th>Order ID</th>
        <th>Status</th>
        <th>Transaction ID</th>
        <th>Order amount</th>
        <th>Transaction fees</th>
        <th>Total</th>
      </thead>

      <tbody>
        {rows.map((el) => (
          <tr className="text-[#4D4D4D]">
            <td className="text-[#146EB4] font-['Inter'] text-center text-sm font-[500] leading-snug">
              #281209
            </td>
            <td className="flex justify-center items-center space-x-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                >
                  <circle cx="5.66406" cy="5" r="5" fill="#17B31B" />
                </svg>
              </div>

              <div className="font-['Inter'] text-center text-sm font-[400] leading-snug">
                Successfull
              </div>
            </td>
            <td className="font-['Inter'] text-center text-sm font-[400] leading-snug">
              131634495747
            </td>
            <td className="font-['Inter'] text-center text-sm font-[400] leading-snug">
              ₹10,125.00
            </td>
            <td className="font-['Inter'] text-center text-sm font-[400] leading-snug">
              ₹1,125.00
            </td>
            <td className="font-['Inter'] text-center text-sm font-[400] leading-snug">
              ₹9,312
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Payouts;
