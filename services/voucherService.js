const Voucher = require("../models/voucherModel");

class VoucherService {
  async getAllVouchers() {
    return await Voucher.findAll();
  }

  async getVoucherById(voucherId) {
    return await Voucher.findByPk(voucherId);
  }

  async createVoucher({ code, type }) {
    return await Voucher.create({ code, type });
  }

  async updateVoucher(voucherId, { code, type }) {
    const voucher = await Voucher.findByPk(voucherId);
    if (voucher) {
      await voucher.update({ code, type });
      return voucher;
    } else {
      return null;
    }
  }

  async deleteVoucher(voucherId) {
    const voucher = await Voucher.findByPk(voucherId);
    if (voucher) {
      await voucher.destroy();
      return voucher;
    } else {
      return null;
    }
  }
}

module.exports = new VoucherService();
