import React from "react";

const Error = () => {
  return (
    <div className="flex flex-col  justify-between p-20">
      <div className="flex gap-20 mt-20 items-center justify-center">
        <div>
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "400",
              lineHeight: "72px",
            }}
          >
            404
          </h1>
        </div>
        <div>
          <h1 style={{ fontSize: "24px" }}>Page not found</h1>
          <p>
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </p>
          <button className="bg-[#D03737] rounded text-white p-3 mt-3">
            <ul>
              <li>
                <a href="/">Back To home</a>
              </li>
            </ul>
          </button>
        </div>
      </div>
      <div className="mt-20"></div>
    </div>
  );
};

export default Error;
