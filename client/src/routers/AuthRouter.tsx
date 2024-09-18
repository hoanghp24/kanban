import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn, SignUp } from "../pages";
import { Typography } from "antd";

const { Title } = Typography;

const AuthRouter = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col d-none d-lg-block text-center"
          style={{ marginTop: "15%" }}
        >
          <div className="mb-4">
            <img
              style={{
                width: 256,
                objectFit: "cover",
              }}
              src="https://firebasestorage.googleapis.com/v0/b/kanban-a3404.appspot.com/o/kanban-logo.png?alt=media&token=3fa9daf1-4629-454c-a8e4-1d4970f903b1"
              alt=""
            />
          </div>
          <div>
            <Title style={{ color: "#009ED8" }}>KANBAN</Title>
          </div>
        </div>
        <div className="col content-center">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default AuthRouter;
