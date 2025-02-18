import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Text, Badge, Spinner } from "@chakra-ui/react";
import axios from "axios";

const TrackOrderPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get(`/api/user/orders/${orderId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });
        setOrder(response.data);
      } catch (error) {
        console.error("Error fetching order details", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  return (
    <Box w="90%" m="auto" py={10}>
      <Heading mb={5}>Order Tracking</Heading>
      {loading ? <Spinner /> : order ? (
        <Box p={5} border="1px solid #ddd" borderRadius="md">
          <Text fontSize="lg"><strong>Order ID:</strong> {order.id}</Text>
          <Text><strong>Status:</strong> <Badge colorScheme={order.status === "Delivered" ? "green" : "yellow"}>{order.status}</Badge></Text>
          <Text><strong>Estimated Delivery:</strong> {order.estimatedDelivery}</Text>
          <Text><strong>Tracking Number:</strong> {order.trackingNumber || "N/A"}</Text>
        </Box>
      ) : <Text>No order details available.</Text>}
    </Box>
  );
};

export default TrackOrderPage;
