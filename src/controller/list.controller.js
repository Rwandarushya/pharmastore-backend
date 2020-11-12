import Sequelize from 'sequelize';
import model from '../database/models'

export const saveProduct = async (req, res) => {
    try {
      const existProduct = await model.List.findOne(
        { where: { productName: req.body.productName} }
      );
      if (existProduct) {
        return res.status(409).json(
          { status: 409, message: 'The Product already exist' }
        );
      }
      const product = await model.List.create(req.body);
      return res.status(201).json(
        { status: 201, message: 'Product created successfully', product }
      );
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  export const getAllProducts = (req, res) => {
    model.List.findAll()
      .then((product) => {
        const allProduct = product.sort((a, b) => (new Date(b.updatedAt)).getTime()
            - (new Date(a.updatedAt).getTime()));
        res.status(200).json(allProduct);
      })
      .catch();
  };

  export const getProductById = (req, res) => {
    const { id } = req.params;
    model.List.findByPk(id)
      .then((pro) => {
        if (!pro) return res.status(404).json({ message: 'Product Not found!' });
        res.status(200).json({ status: 200, pro });
      })
      .catch((err) => res.status(500).json({ message: err }));
  };

  export const deleteProductById = (req, res) => {
    const { id } = req.params;
    model.List.destroy({
      where: { id }
    })
      .then((pro) => {
        if (pro == 1) {
          return res.status(200).json(
            { message: 'Product has been deleted successfully.' }
          );
        }
        res.status(404).json(
          { status: 404, message: `Cannot delete Product with id = ${id}` }
        );
      })
      .catch((err) => res.status(500).json({ message: err }));
  };