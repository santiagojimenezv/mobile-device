const express = require("express");
const Address = require("../models/address");

const queryDepartments = async (req, res) => {
  try {
    const url = 'https://www.datos.gov.co/resource/xdk5-pm3f.json'
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { queryDepartments };