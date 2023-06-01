import { product } from "../../../mock/product";
export default function handler(req, res) {
  const { id } = req.query;

  const filteredProduct = product.filter((item) => item.category == id);

  res.status(200).json(filteredProduct);
}
