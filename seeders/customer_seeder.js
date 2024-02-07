const { Customer } = require("../models");

const customersData = [
  { name: "Arshad Nazmi", email: "arshad@example.com" },
  { name: "Akash Dixit", email: "akash@example.com" },
];

const seedCustomers = async () => {
  try {
    await Customer.bulkCreate(customersData);
    console.log("Customers seeded successfully");
  } catch (error) {
    console.error("Error seeding customers:", error);
  }
};

seedCustomers();
