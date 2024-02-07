const { Voucher } = require("../models");

const vouchersData = [
  { code: "ABC123", type: "Discount" },
  { code: "XYZ456", type: "Gift Card" },
];

const seedVouchers = async () => {
  try {
    await Voucher.bulkCreate(vouchersData);
    console.log("Vouchers seeded successfully");
  } catch (error) {
    console.error("Error seeding vouchers:", error);
  }
};

seedVouchers();
