const express = require("express");
const router = express.Router();
const voucherController = require("../controllers/voucherController");

// Voucher Routes
router.get("/", voucherController.getAllVouchers);
router.get("/:id", voucherController.getVoucherById);
// router.post(
//   "/",
//   upload.single("file"),
//   voucherController.createVouchersFromFile
// );
router.post("/", voucherController.createVoucher);
router.put("/:id", voucherController.updateVoucher);
router.delete("/:id", voucherController.deleteVoucher);

module.exports = router;
