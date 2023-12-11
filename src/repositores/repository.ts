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

const updateCustomer = async (id: number, newCustomer: Customer): Promise<Customer | undefined> => {
    return new Promise((resolve, reject) => {
        const index = customers.findIndex(c => c.id === id);
        if (index >= 0) {
            if (newCustomer.name && customers[index].name !== newCustomer.name)
                customers[index].name = newCustomer.name;
 
            if (newCustomer.cpf && customers[index].cpf !== newCustomer.cpf)
                customers[index].cpf = newCustomer.cpf;
 
            return resolve(customers[index]);
        }
 
        return resolve(undefined);
    })
}

const deleteCustomer = async (id: number): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        const index = customers.findIndex(c => c.id === id)
        if (index >= 0) {
            customers.splice(index, 1);
            return resolve(true);
        }
        return resolve(false)
    })
}

export default {
    getCustomer,
    getCustomers,
    deleteCustomer,
    addCustomer,
    updateCustomer
}