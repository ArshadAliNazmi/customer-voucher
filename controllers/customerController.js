const customerService = require("../services/customerService");

class CustomerController {
  async getAllCustomers(req, res) {
    try {
      const customers = await customerService.getAllCustomers();
      res.json(customers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCustomerById(req, res) {
    try {
      const customerId = req.params.id;
      const customer = await customerService.getCustomerById(customerId);
      if (customer) {
        res.json(customer);
      } else {
        res.status(404).json({ error: "Customer not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createCustomer(req, res) {
    try {
      const { name, email } = req.body;
      const newCustomer = await customerService.createCustomer({ name, email });
      res.json(newCustomer);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateCustomer(req, res) {
    try {
      const customerId = req.params.id;
      const { name, email } = req.body;
      const updatedCustomer = await customerService.updateCustomer(customerId, {
        name,
        email,
      });
      if (updatedCustomer) {
        res.json(updatedCustomer);
      } else {
        res.status(404).json({ error: "Customer not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteCustomer(req, res) {
    try {
      const customerId = req.params.id;
      const deletedCustomer = await customerService.deleteCustomer(customerId);
      if (deletedCustomer) {
        res.json({ message: "Customer deleted successfully" });
      } else {
        res.status(404).json({ error: "Customer not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new CustomerController();
