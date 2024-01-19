import admin from "./admin.model.js";
import packages from "./package.model.js"
import User from "./user.model.js"
import pdetailsModel from "./pdetails.model.js";
import bcrypt from "bcrypt";
import pkg from "jsonwebtoken";
const { sign } = pkg;
// -------------------Userlogin-------------------
export async function Userlogin(req, res) {
  try {
    // console.log(req.body);
    const { username, password } = req.body;
    // console.log(username);
    const user = await User.findOne({ username: username });
    // console.log(user);

    if (user === null) return res.status(404).send("user does not exist");
    const success = await bcrypt.compare(password, user.password);
    // console.log(success);
    if (success !== true)
      return res.status(404).send("username or password not exist");
    const usertoken = await sign({ username }, process.env.JWT_KEY, {
      expiresIn: "24h",
    });
    // console.log(usertoken);
    return res.status(200).send({ msg: "successfully logged in", usertoken });
  } catch (error) {
    console.log(error);
  }
}
// -------------------UserRegister-------------------
export async function userRegister(req, res) {
  // console.log(req.body);

  const { fname,lname,username, email, password,address,mob } = req.body;
  if (!(fname && lname && username && email && password && address && mob))
    return res.status(404).send("Fileds are empty");
  bcrypt
    .hash(password, 10)
    .then((hashedPwd) => {
      User.create({fname,lname, username, email, password: hashedPwd ,address,mob});
    })
    .then(() => {
      res.status(201).send("Successfully registered");
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

// -------------------home-------------------
export async function home(req, res) {
  try {
    // console.log(req.user.username);
    const user = req.user.username;
     console.log("user is",req.user);
    return res.status(200).send({user});
  } catch (error) {
    return res.status(403).send(error);
  }
}


// -------------------adminRegister-------------------
export async function adminRegister(req, res) {
  try {
    // console.log(req.body);
    const { username, email, password ,fname,lname} = req.body;
    if (!(username && email && password) && fname && lname)
      return res.status(404).send("Fileds are empty");
    bcrypt
      .hash(password, 10)
      .then((hashedPwd) => {
        admin.create({ username, email, password: hashedPwd ,fname,lname});
      })
      .then(() => {
        res.status(201).send("Successfully registered");
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  } catch (error) {
    console.log(error);
  }
}
// -----------------adminlogin--------------------
export async function adminLogin(req, res) {
    try {
      // console.log(req.body);
      const { username, password } = req.body;
      // console.log(username);
      const user = await admin.findOne({ username: username });
      // console.log(user);
  
      if (user === null) return res.status(404).send("user does not exist");
      const success = await bcrypt.compare(password, user.password);
      // console.log(success);
      if (success !== true)
        return res.status(404).send("username or password not exist");
      const admintoken = await sign({ username }, process.env.JWT_KEY, {
        expiresIn: "10m",
      });
      // console.log(admintoken);
      return res.status(200).send({ msg: "successfully logged in", admintoken });
    } catch (error) {
      // console.log(error);
    }
  }

  // -------------------addpackage-------------------
export async function addPackage(req, res) {
  //    console.log(req.body);
  let { place_name,days,nights,image } =
    req.body;
  try {
    res.status(201).send(
      packages.create({
        place_name,
        days,
        nights,
        image
      })
    );
    console.log("data added succesfully");
  } catch (error) {
    res.status(404).send(error);
    // console.log(error);
    
  }
}


// -------------------displayProduct-------------------
export async function displayPackage(req, res) {
  try {
    packages
      .find()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(404).send(error);
      });
  } catch (error) {
    res.status(404).send(error);
  }
}

// ----------------PackageSUb---------
export async function getPackage(req, res) {
  try {
    
    const {username}=req.user
    const { id } = req.params;
  
    packages
      .findOne({ _id: id })
      .then((data) => {
        // console.log(data);
        res.status(200).send({data,username:username});
      })
      .catch((error) => {
        res.status(404).send(error);
      });
  } catch (error) {
    res.status(404).send(error);
  }
}


// -------------------pkgdetails-------------------
export async function pkgDetails(req, res) {
  //    console.log(req.body);
  let { duration,description } =
    req.body;
  try {
    res.status(201).send(
      pdetailsModel.create({
        duration,
        description
      })
    );
    console.log("data added succesfully");
  } catch (error) {
    res.status(404).send(error);
    // console.log(error);
    
  }
}

// -------------------displaydetail-------------------
export async function displayDetails(req, res) {
  try {
    pdetailsModel
      .find()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(404).send(error);
      });
  } catch (error) {
    res.status(404).send(error);
  }
}
