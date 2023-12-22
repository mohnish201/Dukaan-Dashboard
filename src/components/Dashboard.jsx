import React from "react";
import Overview from "./Overview";
import SideBar from "./SideBar";
import Transactions from "./Transactions";

const Dashboard = () => {
  return (
    <div className="flex overflow-auto bg-[#FAFAFA]">
      {/* Sidebar */}
      <div>
        <SideBar />
      </div>

      {/* Main component */}
      <div className="w-screen pl-56">
        {/* Navbar */}
        <div class="w-full h-16 px-8 bg-white border-b border-zinc-300 justify-start items-center gap-4 inline-flex">
          <div class="grow shrink basis-0 h-7 justify-start items-center gap-4 flex">
            <div class="justify-start items-center gap-4 flex">
              <div class="text-zinc-900 text-xl font-medium font-['Galano Grotesque'] leading-7">
                Payouts
              </div>
            </div>
            <div class="justify-start items-center gap-1.5 flex">
              <div class="w-3.5 h-3.5 relative"></div>
              <div class="text-neutral-600 text-xs font-normal font-['Galano Grotesque'] leading-none">
                How it works
              </div>
            </div>
          </div>
          <div class="w-96 h-10 px-4 py-2 bg-zinc-100 rounded-md justify-start items-center gap-2 inline-flex">
            <div class="w-4 h-4 relative"></div>
            <div class="text-zinc-500 text-base font-normal font-['Galano Grotesque'] leading-snug">
              Search features, tutorials, etc.
            </div>
          </div>
          <div class="grow shrink basis-0 h-10 justify-end items-start gap-2 flex">
            <div class="justify-start items-start gap-3 flex">
              <div class="w-10 h-10 relative">
                <div class="w-10 h-10 left-0 top-0 absolute flex items-center justify-center bg-neutral-200 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M18.4211 0.0237288L1.11579 3.38234C0.463158 3.49896 0 4.1287 0 4.85174V12.5019C0 13.225 0.463158 13.8547 1.11579 13.9713L2.88421 14.3212C3.6 15.6273 4.94737 17.8897 6.75789 19.7323C7.36842 20.362 8.37895 19.8022 8.25263 18.8693C8.08421 17.6331 8.12632 16.3037 8.18947 15.3707L18.4211 17.3766C19.2421 17.5398 20 16.8401 20 15.9072V1.49312C20 0.560174 19.2421 -0.139537 18.4211 0.0237288ZM6.46316 9.6331C6.46316 9.88966 6.27368 10.0996 6.04211 10.0996H4.31579C4.08421 10.0996 3.89474 9.88966 3.89474 9.6331V7.72056C3.89474 7.464 4.08421 7.25408 4.31579 7.25408H6.04211C6.27368 7.25408 6.46316 7.464 6.46316 7.72056V9.6331ZM11.2842 9.6331C11.2842 9.88966 11.0947 10.0996 10.8632 10.0996H9.13684C8.90526 10.0996 8.71579 9.88966 8.71579 9.6331V7.72056C8.71579 7.464 8.90526 7.25408 9.13684 7.25408H10.8632C11.0947 7.25408 11.2842 7.464 11.2842 7.72056V9.6331ZM16.1263 9.6331C16.1263 9.88966 15.9368 10.0996 15.7053 10.0996H13.9789C13.7474 10.0996 13.5579 9.88966 13.5579 9.6331V7.72056C13.5579 7.464 13.7474 7.25408 13.9789 7.25408H15.6842C15.9158 7.25408 16.1053 7.464 16.1053 7.72056V9.6331H16.1263Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </div>
              </div>
              <div class="w-10 h-10 relative">
                <div class="w-10 h-10 left-0 top-0 absolute flex justify-center items-center bg-neutral-200 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_84565_6209)">
                      <circle cx="20" cy="20" r="20" fill="#E6E6E6" />
                      <path
                        d="M21.1109 25.5021C20.5156 26.1582 19.4844 26.1582 18.8891 25.5021L13.6151 19.689C12.7406 18.7251 13.4245 17.1811 14.726 17.1811L25.274 17.1811C26.5755 17.1811 27.2594 18.7251 26.3849 19.689L21.1109 25.5021Z"
                        fill="#4D4D4D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_84565_6209">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* navbar 2 */}
        <div class="w-full h-9 px-8 my-8 justify-between items-center inline-flex">
          <div class="text-zinc-900 text-xl font-medium font-['Galano Grotesque'] leading-7">
            Overview
          </div>
          <div class="justify-start items-center gap-4 flex">
            <div class="w-36 h-9 relative">
              <div class="w-36 h-9 left-0 top-0 absolute bg-white rounded border border-zinc-300"></div>
              <div class="left-[14px] top-[6px] absolute text-neutral-600 text-base font-normal font-['Galano Grotesque'] leading-normal">
                This Month
              </div>
              <div class="w-4 h-4 left-[107px] top-[10px] absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M2.27748 5.77748C2.61381 5.44114 3.14013 5.41057 3.511 5.68575L3.61726 5.77748L8 10.1598L12.3827 5.77748C12.7191 5.44114 13.2454 5.41057 13.6163 5.68575L13.7225 5.77748C14.0589 6.11381 14.0894 6.64013 13.8142 7.011L13.7225 7.11726L8.66989 12.1699C8.33355 12.5062 7.80724 12.5368 7.43636 12.2616L7.33011 12.1699L2.27748 7.11726C1.90751 6.74729 1.90751 6.14745 2.27748 5.77748Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Overview />
        <Transactions />
      </div>
    </div>
  );
};

export default Dashboard;
