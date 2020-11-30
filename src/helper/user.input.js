import Joi from '@hapi/joi';

const signupInput = (req) => {
  const schema = Joi.object().keys({
    names: Joi.string(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6).max(15),
    role: Joi.string().required().valid('admin', 'standard'),
    pharmacyName: Joi.string(),
    PhoneNumber: Joi.string(),
    pharmacyId: Joi.number().integer()
  });

  return schema.validate(req.body);
};

const UpdateInput = (req) => {
  const schema = Joi.object().keys({
    names: Joi.string(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6).max(15),
    role: Joi.string().required().valid('admin', 'standard'),
    pharmacyName: Joi.string(),
    PhoneNumber: Joi.string(),
    pharmacyId: Joi.number().integer()
  });

  return schema.validate(req.body);
};

const loginInput = (req) => {
  const schema = Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6).max(15)
  });

  return schema.validate(req.body);
};
export { signupInput, UpdateInput, loginInput };
