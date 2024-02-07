const voucherService = require("../services/voucherService");

const fs = require("fs");
const Voucher = require("../models/voucherModel");

class VoucherController {
  async getAllVouchers(req, res) {
    try {
      const vouchers = await voucherService.getAllVouchers();
      res.json(vouchers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getVoucherById(req, res) {
    try {
      const voucherId = req.params.id;
      const voucher = await voucherService.getVoucherById(voucherId);
      if (voucher) {
        res.json(voucher);
      } else {
        res.status(404).json({ error: "Voucher not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createVoucher(req, res) {
    try {
      const { code, type } = req.body;
      const newVoucher = await voucherService.createVoucher({ code, type });
      res.json(newVoucher);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateVoucher(req, res) {
    try {
      const voucherId = req.params.id;
      const { code, type } = req.body;
      const updatedVoucher = await voucherService.updateVoucher(voucherId, {
        code,
        type,
      });
      if (updatedVoucher) {
        res.json(updatedVoucher);
      } else {
        res.status(404).json({ error: "Voucher not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteVoucher(req, res) {
    try {
      const voucherId = req.params.id;
      const deletedVoucher = await voucherService.deleteVoucher(voucherId);
      if (deletedVoucher) {
        res.json({ message: "Voucher deleted successfully" });
      } else {
        res.status(404).json({ error: "Voucher not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

exports.createVouchersFromFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Process uploaded file and create vouchers
    const filePath = req.file.path;
    const fileData = fs.readFileSync(filePath, "utf-8");
    const voucherCodes = fileData.split("\n");

    // Assuming each line in the file contains a voucher code
    for (let code of voucherCodes) {
      await Voucher.create({ code });
    }

    // Delete the temporary file
    fs.unlinkSync(filePath);

    res.status(201).json({ message: "Vouchers created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create vouchers from file" });
  }
};

module.exports = new VoucherController();
