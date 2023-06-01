export default function handler(req, res) {
  if (req.method === "POST") {
    const { phoneNumber, fullName, email, address, products } = req.body;

    if (phoneNumber) {
      // Verileri kullanarak gerekli işlemleri gerçekleştirin

      res.status(200).json({ message: "Siparişiniz alındı, teşekkürler!" });
    } else {
      res.status(400).json({ message: "Eksik veya hatalı veri gönderildi." });
    }
  } else {
    res.status(405).json({ message: "Bir hata oluştu." });
  }
}
