import React from "react";

import AddUser from "./AddUser";
import Class from "./Class";
import Class2 from "./Class2";

import Home from "./Home";
import About from "./About";
import Blog from "./Blog";


import Phone from "./Phone";
import Trash from "./Trash";
import Message from "./Message";
import Email from "./Email";

import CheckboxChecked from "./CheckboxChecked";

import Facebook from "./Facebook";
import Instagram from "./Instagram";
import Whatsapp from "./Whatsapp";

import Cog from "./Cog";
import User from "./User";
import Users from "./Users";
import CreditCard from "./CreditCard";
import Books from "./Books";
import FileText2 from "./FileText2";
import Eye from "./eye";
import Mug from "./Mug";
import Menu from "./Menu";
import Cellphone from "./Cellphone";

import Calendar from "./Calendar";
import Certificate from "./Certificate";
import TimeDuration from "./TimeDuration";
import MoedaReal from "./MoedaReal";






const Icon = (props) => {
  switch (props.name) {
    case "cellphone":
      return <Cellphone {...props} />;
    case "facebook":
      return <Facebook {...props} />;
    case "instagram":
      return <Instagram {...props} />;
    case "whatsapp":
      return <Whatsapp {...props} />;
    case "checkbox-checked":
      return <CheckboxChecked {...props} />;

    case "menu":
      return <Menu {...props} />;
    case "mug":
      return <Mug {...props} />;
    case "cog":
      return <Cog {...props} />;
    case "eye":
      return <Eye {...props} />;
    case "class":
      return <Class {...props} />;
    case "class2":
      return <Class2 {...props} />;

    case "home":
      return <Home {...props} />;
    case "about":
      return <About {...props} />;
    case "blog":
      return <Blog {...props} />;

    case "phone":
      return <Phone {...props} />;
    case "trash":
      return <Trash {...props} />;
    case "message":
      return <Message {...props} />;
    case "email":
      return <Email {...props} />;
    case "add-user":
      return <AddUser {...props} />;
    case "user":
      return <User {...props} />;
    case "users":
      return <Users {...props} />;
    case "credit-card":
      return <CreditCard {...props} />;
    case "books":
      return <Books {...props} />;
    case "file-text2":
      return <FileText2 {...props} />;
    case "calendar":
      return <Calendar {...props} />;

    case "certificate":
      return <Certificate {...props} />;

    case "time-duration":
      return <TimeDuration {...props} />;
    case "moeda-real":
      return <MoedaReal {...props} />;

    default:
      return "";
  }
};

export default Icon;
