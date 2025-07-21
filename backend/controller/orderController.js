const orders = [];


const generateProductId = () => {
  const prefix = "PRD";
  const randomNum = Math.floor(100000 + Math.random() * 900000); // 6-digit number
  return `${prefix}-${randomNum}`;
};

export const placeOrder = (req, res) => {
  const { name, address, quantity } = req.body;

  if (!name || !address || !quantity) {
    return res.status(400).json({ status: "error", message: "All fields are required" });
  }

  const newOrder = {
    id: orders.length + 1,
    name,
    address,
    quantity,
    productId: generateProductId(), // auto-generated
    orderedAt: new Date().toISOString()
  };

  orders.push(newOrder);

  res.status(201).json({name : name, address : address, quantity: quantity,status: "success", data: newOrder });
};


export const getAllOrders = (req, res) => {
  res.status(200).json({
    message: "Orders fetched successfully!",
    orders: orders,
  });


};