import lodash from 'lodash';
import models from '../database/models';
import { encryptPassword, decryptPassword } from '../helper/hashedPassword';
import generateToken from '../helper/generateAuthToken';

const signup =async(req, res) => {
  let { password } = req.body;

  let pass =  encryptPassword(password);
  const user = {
    names:req.body.names,
    email: req.body.email,
    password:pass,
    pharmacyName:req.body.pharmacyName,
    PhoneNumber:req.body.PhoneNumber,
    role: req.body.role,
    pharmacyId: req.body.pharmacyId
  };

  try {
    const existUser = await models.User.findOne(
      { where: { email: req.body.email} }
    );

    if (existUser) {
      return res.status(409).json(
        { status: 409, message: 'User Already exist' }
      );
    }

    const createdUser = await models.User.create(user);
      return res.status(201).json(
        { status: 201, message: 'User created successfully', createdUser }
      );
    
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
    

      // models.User.findOne({ where: { email: req.body.email } })
      //   .then((emailFound) => {
      //     if (emailFound) {
      //       return res.status(409).json(
      //         { status: 409, message: 'Email address already taken' }
      //       );
      //     }

      //     models.User.create(user)
      //       .then((data) => {
      //         const token = generateToken(data.id, data.role, data.email);
      //         const userData = {
      //           token,
      //           userInfo: lodash.pick(data, 'pharmacyId', 'email', 'role'),
      //         };
      //         res.status(201).json({
      //           status: 201, message: 'User created successfully', userData
      //         });
      //       })
      //       .catch(() => res.status(500).json(
      //         { status: 500, message: 'server error!' }
      //       ));
      //   })
      //   .catch(() => res.status(500).json(
      //       { status: 500, message: 'server error!' }
      //     ));
    };


const login = (req, res) => {
  const { email, password } = req.body;
  models.User.findOne({ where: { email } })
    .then((emailFound) => {
      if (!emailFound) {
        return res.status(404).send(
          { status: 404, message: 'No associated account with this email' }
        );
      }

      const isPasswordValid = decryptPassword(password, emailFound.password);
      if (!isPasswordValid) {
        return res.status(404).json(
          { status: 404, message: 'Incorrect password!' }
        );
      }

      const token = generateToken(
        emailFound.id, emailFound.role, emailFound.email
      );
      const role= emailFound.role;

      res.status(200).json(
        { status: 200, message: 'login successfull',email, role, token}
      );
    })
    .catch(() => res.status(500).json(
      { status: 500, message: 'server error!' }
    ));
};

const getAllUsers = (req, res) => {
  models.User.findAll()
    .then((user) => {
      const allusers = user.sort((a, b) => (new Date(b.updatedAt)).getTime()
        - (new Date(a.updatedAt).getTime()));

      const userInfo = lodash.map(allusers, lodash.partialRight(lodash.pick,
        ['id', 'names', 'email', 'pharmacyName','PhoneNumber', 'role', 'pharmacyId', 'createdAt', 'updatedAt']));

      res.status(200).json(userInfo );
    })
    .catch(() => res.status(500).json(
      { status: 500, message: 'server error!' }
    ));
};
const getSpecificUser = (req, res) => {
  const { id } = req.params;

  models.User.findByPk(id)
    .then((user) => {
      if (!user) {
        return res.status(404).json(
          { status: 404, message: 'There is no available user!' }
        );
      }
      const userInfo = lodash.pick(user, 'id', 'pharmacyId','names', 'email', 'pharmacyName','phoneNumber','role');

      res.status(200).json({ status: 200, userInfo });
    })
    .catch(() => res.status(500).json(
      { status: 500, message: 'server error, check whether id is string!' }
    ));
};
const updateSpecificUser = (req, res) => {
  const { id } = req.params;

  models.User.findByPk(id)
    .then((availableUser) => {
      if (!availableUser) {
        return res.status(404).json(
          { status: 404, message: 'There is no available user!' }
        );
      }

      let { email } = req.body;

      if (!email) {
        email = availableUser.email;
      }

      let { password } = req.body;

      if (!password) {
        password = availableUser.password;
      }

      let { role } = req.body;

      if (!role) {
        role = availableUser.role;
      }

      let { pharmacyId } = req.body;

      if (!pharmacyId) {
        pharmacyId = availableUser.pharmacyId;
      }

      password = encryptPassword(password);
      const updateUser = {
        email,
        password,
        role,
        pharmacyId
      };

      models.User.findOne({ where: { email: req.body.email || 'no email' } })
        .then((emailFound) => {
          if (emailFound) {
            return res.status(409).json(
              { status: 409, message: 'Email address already taken' }
            );
          }

          models.User.update(updateUser, {
            where: { id }
          })
            .then((user) => {
              if (user == 1) {
                return res.status(200).json(
                  { status: 200, message: 'User was updated successfully.' }
                );
              }
            })

            .catch(() => res.status(500).json(
              { status: 500, message: 'server error!' }
            ));
        });
    });
};
const deleteSpecificUser = (req, res) => {
  const { id } = req.params;

  models.User.destroy({
    where: { id }
  })
    .then((user) => {
      if (user == 1) {
        return res.status(200).json(
          { status: 200, message: 'User was deleted successfully.' }
        );
      }

      res.status(404).json(
        {
          status: 404,
          message: `Cannot delete User with id = ${id}, who is not found!`
        }
      );
    })
    .catch(() => res.status(500).json(
      { status: 500, message: 'server error, check whether id is string!' }
    ));
};

export {
  getAllUsers,
  signup, login, getSpecificUser, updateSpecificUser, deleteSpecificUser
};
