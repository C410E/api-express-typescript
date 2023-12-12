import { Request, Response, NextFunction } from "express"
import Customer from "src/models/exempl"
import customerRepository from "../repositores/repository"

const getCustomer = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const customer = await customerRepository.getCustomer(parseInt(id))
    if (customer) {
        res.json(customer)
    }
    if (!customer) {
        res.sendStatus(404)
    }
}

const getCustomers = async (req: Request, res: Response, next: NextFunction) => {
    const customers = await customerRepository.getCustomers()
    res.json(customers)
}

const postCustomer = async (req: Request, res: Response, next: NextFunction) => {
    const customer = req.body as Customer
    const result = await customerRepository.addCustomer(customer)
    if (result) {
        res.status(201).json(result)
    }
    if (!result) {
        res.sendStatus(400)
    }
}

const patchCustomer = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const customer = req.body as Customer
    const result = await customerRepository.updateCustomer(parseInt(id), customer)
    if (result) {
        res.json(result)
    }
    if (!result) {
        res.sendStatus(404)
    }
}

const deleteCustomer = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const sucess = await customerRepository.deleteCustomer(parseInt(id))
    if (sucess) {
        res.sendStatus(204)
    } else {
        res.sendStatus(404)
    }
}

export default {
    getCustomer,
    getCustomers,
    postCustomer,
    patchCustomer,
    deleteCustomer
}