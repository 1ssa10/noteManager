"use client";
import React, { useState } from "react";

function NotesList() {
  return (
    <div className="grid grid-cols-1 w-full gap-4  items-start justify-center mx-auto p-2  md:grid-cols-3 overflow-auto  ">
      {/* note Container */}
      <div className=" flex flex-col  rounded-lg p-4 bg-black text-white ">
        {/* note elements*/}
        <div className=" relative overflow-hidden">
          <input
            type="checkbox"
            className=" peer absolute top-0 inset-x-0 w-full h-12 z-10 opacity-0 cursor-pointer"
          />
          {/* note Title */}
          <div className="h-12 w-full pl-5 flex items-center">
            <h1 className="text-lg font-semibold text-white">Note 1</h1>
          </div>
          {/* arrow icon  */}
          <div className=" absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          {/* Note Content */}
          <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-screen ">
            <div className="p-4 text-xs tracking-normal leading-4  ">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
                asperiores at, adipisci libero dolorem obcaecati dolore maxime,
                repudiandae modi harum voluptatem? Enim velit non porro rerum
                voluptas. Quis nostrum earum excepturi eaque quas, placeat,
                vitae unde natus ex similique voluptate minus animi quae
                eligendi ut vel, aperiam dignissimos iusto. Dolorum? Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Minima asperiores
                at, adipisci libero dolorem obcaecati dolore maxime, repudiandae
                modi harum voluptatem? Enim velit non porro rerum voluptas. Quis
                nostrum earum excepturi eaque quas, placeat, vitae unde natus ex
                similique voluptate minus animi quae eligendi ut vel, aperiam
                dignissimos iusto. Dolorum? Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Minima asperiores at, adipisci
                libero dolorem obcaecati dolore maxime, repudiandae modi harum
                voluptatem? Enim velit non porro rerum voluptas. Quis nostrum
                earum excepturi eaque quas, placeat, vitae unde natus ex
                similique voluptate minus animi quae eligendi ut vel, aperiam
                dignissimos iusto. Dolorum? Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Minima asperiores at, adipisci
                libero dolorem obcaecati dolore maxime, repudiandae modi harum
                voluptatem? Enim velit non porro rerum voluptas. Quis nostrum
                earum excepturi eaque quas, placeat, vitae unde natus ex
                similique voluptate minus animi quae eligendi ut vel, aperiam
                dignissimos iusto. Dolorum?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col  rounded-lg p-4 bg-black text-white ">
        {/* note elements*/}
        <div className=" relative overflow-hidden">
          <input
            type="checkbox"
            className=" peer absolute top-0 inset-x-0 w-full h-12 z-10 opacity-0 cursor-pointer"
          />
          {/* note Title */}
          <div className="h-12 w-full pl-5 flex items-center">
            <h1 className="text-lg font-semibold text-white">Note 1</h1>
          </div>
          {/* arrow icon  */}
          <div className=" absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          {/* Note Content */}
          <div className="overflow-auto transition-all duration-500 max-h-0 peer-checked:max-h-96 ">
            <div className="p-4 text-xs tracking-normal leading-4   ">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
                asperiores at, adipisci libero dolorem obcaecati dolore maxime,
                repudiandae modi harum voluptatem? Enim velit non porro rerum
                voluptas. Quis nostrum earum excepturi eaque quas, placeat,
                vitae unde natus ex similique voluptate minus animi quae
                eligendi ut vel, aperiam dignissimos iusto. Dolorum? Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Minima asperiores
                at, adipisci libero dolorem obcaecati dolore maxime, repudiandae
                modi harum voluptatem? Enim velit non porro rerum voluptas. Quis
                nostrum earum excepturi eaque quas, placeat, vitae unde natus ex
                similique voluptate minus animi quae eligendi ut vel, aperiam
                dignissimos iusto. Dolorum?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col  rounded-lg p-4 bg-black text-white ">
        {/* note elements*/}
        <div className=" relative overflow-hidden">
          <input
            type="checkbox"
            className=" peer absolute top-0 inset-x-0 w-full h-12 z-10 opacity-0 cursor-pointer"
          />
          {/* note Title */}
          <div className="h-12 w-full pl-5 flex items-center">
            <h1 className="text-lg font-semibold text-white">Note 1</h1>
          </div>
          {/* arrow icon  */}
          <div className=" absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          {/* Note Content */}
          <div className="overflow-auto transition-all duration-500 max-h-0 peer-checked:max-h-96 ">
            <div className="p-4 text-xs tracking-normal leading-4  ">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
                a similique voluptate minus animi quae eligendi ut vel, aperiam
                dignissimos iusto. Dolorum?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col  rounded-lg p-4 bg-black text-white ">
        {/* note elements*/}
        <div className=" relative overflow-hidden">
          <input
            type="checkbox"
            className=" peer absolute top-0 inset-x-0 w-full h-12 z-10 opacity-0 cursor-pointer"
          />
          {/* note Title */}
          <div className="h-12 w-full pl-5 flex items-center">
            <h1 className="text-lg font-semibold text-white">Note 1</h1>
          </div>
          {/* arrow icon  */}
          <div className=" absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          {/* Note Content */}
          <div className="overflow-auto transition-all duration-500 max-h-0 peer-checked:max-h-96 ">
            <div className="p-4 text-xs tracking-normal leading-4   ">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
                asperiores at, adipisci libero dolorem obcaecati dolore maxime,
                repudiandae modi harum voluptatem? Enim velit non porro rerum
                voluptas. Quis nostrum earum excepturi eaque quas, placeat,
                vitae unde natus ex similique voluptate minus animi quae
                eligendi ut vel, aperiam dignissimos iusto. Dolorum? Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Minima asperiores
                at, adipisci libero dolorem obcaecati dolore maxime, repudiandae
                modi harum voluptatem? Enim velit non porro rerum voluptas. Quis
                nostrum earum excepturi eaque quas, placeat, vitae unde natus ex
                similique voluptate minus animi quae eligendi ut vel, aperiam
                dignissimos iusto. Dolorum?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col  rounded-lg p-4 bg-black text-white ">
        {/* note elements*/}
        <div className=" relative overflow-hidden">
          <input
            type="checkbox"
            className=" peer absolute top-0 inset-x-0 w-full h-12 z-10 opacity-0 cursor-pointer"
          />
          {/* note Title */}
          <div className="h-12 w-full pl-5 flex items-center">
            <h1 className="text-lg font-semibold text-white">Note 1</h1>
          </div>
          {/* arrow icon  */}
          <div className=" absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          {/* Note Content */}
          <div className="overflow-auto transition-all duration-500 max-h-0 peer-checked:max-h-96 ">
            <div className="p-4 text-xs tracking-normal leading-4   ">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
                asperiores at, adipisci libero dolorem obcaecati dolore maxime,
                repudiandae modi harum voluptatem? Enim velit non porro rerum
                voluptas. Quis nostrum earum excepturi eaque quas, placeat,
                vitae unde natus ex similique voluptate minus animi quae
                eligendi ut vel, aperiam dignissimos iusto. Dolorum? Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Minima asperiores
                at, adipisci libero dolorem obcaecati dolore maxime, repudiandae
                modi harum voluptatem? Enim velit non porro rerum voluptas. Quis
                nostrum earum excepturi eaque quas, placeat, vitae unde natus ex
                similique voluptate minus animi quae eligendi ut vel, aperiam
                dignissimos iusto. Dolorum?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col  rounded-lg p-4 bg-black text-white ">
        {/* note elements*/}
        <div className=" relative overflow-hidden">
          <input
            type="checkbox"
            className=" peer absolute top-0 inset-x-0 w-full h-12 z-10 opacity-0 cursor-pointer"
          />
          {/* note Title */}
          <div className="h-12 w-full pl-5 flex items-center">
            <h1 className="text-lg font-semibold text-white">Note 1</h1>
          </div>
          {/* arrow icon  */}
          <div className=" absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          {/* Note Content */}
          <div className="overflow-auto transition-all duration-500 max-h-0 peer-checked:max-h-96 ">
            <div className="p-4 text-xs tracking-normal leading-4   ">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
                asperiores at, adipisci libero dolorem obcaecati dolore maxime,
                repudiandae modi harum voluptatem? Enim velit non porro rerum
                voluptas. Quis nostrum earum excepturi eaque quas, placeat,
                vitae unde natus ex similique voluptate minus animi quae
                eligendi ut vel, aperiam dignissimos iusto. Dolorum? Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Minima asperiores
                at, adipisci l#
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotesList;
