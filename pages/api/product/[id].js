export default function handler(req, res) {
  res.status(200).json({
    data: {
      id: 1,
      name: "hamburger",
      desc: "lorem lroem lorem testv test testr",
      url: "",
      price: 10,
    },
  });
}
