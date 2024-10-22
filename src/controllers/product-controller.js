import Product from '../models/product-model.js';

export const store = async (req, res) => {
    try {
        const products = await Product.create(req.body);
        return res.status(201).json(products);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

export const index = async (req, res) => {
    try {
        const products = await Product.find().exec();
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

export const update = async (req, res) => {
    try {
        const products = await Product.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

export const destroy = async (req, res) => {
    try {
        const products = await Product.findByIdAndDelete(req.params.id).exec();
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};