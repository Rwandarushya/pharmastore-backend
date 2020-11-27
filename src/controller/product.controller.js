import Sequelize from 'sequelize';
import model from '../database/models'

export const createProduct = async (req, res) => {
    try {
      const existProduct = await model.Product.findOne(
        { where: { productName: req.body.productName} }
      );
      if (existProduct) {
        return res.status(409).json(
          { status: 409, message: 'The Product already exist' }
        );
      }
      const product = await model.Product.create(req.body);
      return res.status(201).json(
        { status: 201, message: 'Product created successfully', product }
      );
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

export const getAllProducts = (req, res) => {
  const email= req.params.email;
    model.Product.findAll()
      .then((product) => {
        // if (product.length < 1) {
        //   return res.status(404).json(
        //     { status: 404, message: 'There are no available Product' }
        //   );
        // }
        const allProduct = product.sort((a, b) => (new Date(b.updatedAt)).getTime()
            - (new Date(a.updatedAt).getTime()));
        res.status(200).json(allProduct);
      })
      .catch();
  };

  export const getProductById = (req, res) => {
    const { id } = req.params;
    model.Product.findByPk(id)
      .then((pro) => {
        if (!pro) return res.status(404).json({ message: 'Product Not found!' });
        res.status(200).json({ status: 200, pro });
      })
      .catch((err) => res.status(500).json({ message: err }));
  };
  
  export const deleteProductById = (req, res) => {
    const { id } = req.params;
    model.Product.destroy({
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
  export const updateProductById = (req, res) => {
    const { id } = req.params;
    model.Product.update(req.body, {
      where: { id }
    })
      .then((pro) => {
        if (pro == 1) {
          return res.status(200).json(
            { message: 'Product updated successfully.' }
          );
        }
        res.status(404).json(
          { status: 404, message: `Cannot update Product with id = ${id}` }
        );
      })
      .catch((err) => res.status(500).json({ message: err }));
  };

