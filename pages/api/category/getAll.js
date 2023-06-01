import { category } from "../../../mock/category";

export default function handler(req, res) {
  res.status(200).json({ data: category });
}
