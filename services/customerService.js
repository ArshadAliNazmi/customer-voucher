const Customer = require("../models/customerModel");

class CustomerService {
  async getAllCustomers() {
    return await Customer.findAll();
  }

  async getCustomerById(customerId) {
    return await Customer.findByPk(customerId);
  }

  async createCustomer({ name, email }) {
    return await Customer.create({ name, email });
  }

  async updateCustomer(customerId, { name, email }) {
    const customer = await Customer.findByPk(customerId);
    if (customer) {
      await customer.update({ name, email });
      return customer;
    } else {
      return null;
    }
  }

  async deleteCustomer(customerId) {
    const customer = await Customer.findByPk(customerId);
    if (customer) {
      await customer.destroy();
      return customer;
    } else {
      return null;
    }
  }
}

module.exports = new CustomerService();
