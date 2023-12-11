import  Customer  from "../models/exempl"

const customers: Customer[] = []

const getCustomer = async (id: number): Promise<Customer | undefined> => {
    return new Promise((resolve, reject) => {
        return resolve(customers.find(c => c.id === id))
    })
}

const getCustomers = async (): Promise<Customer[]> => {
    return new Promise((resolve, reject) => {
        return resolve(customers)
    })
}

const addCustomer = async (customer: Customer): Promise<Customer> => {
    return new Promise((resolve, reject) => {
        if (!customer.name || !customer.cpf)
        return reject(new Error(`Invalid customer.`));

        const newCustomer = new Customer(customer.name, customer.cpf);
        customers.push(newCustomer);

        return resolve(newCustomer);
    })
}