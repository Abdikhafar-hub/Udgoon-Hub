import { useEffect, useState } from "react";
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";

const PaymentsPage = () => {
  const [payments, setPayments] = useState([]);  // Ensure initial state is an array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get("/api/user/payments", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });

        if (Array.isArray(response.data)) {
          setPayments(response.data);
        } else {
          setPayments([]); // Fallback to an empty array
        }
      } catch (error) {
        console.error("Error fetching payments:", error);
        setPayments([]); // Set empty array on error
      }

      // Simulate a delay of 3 seconds before removing loading state
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    fetchPayments();
  }, []);

  return (
    <Box w="90%" m="auto" py={10}>
      <Heading mb={5}>Payment History</Heading>

      {loading ? (
        <Spinner />
      ) : payments.length > 0 ? (
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Amount (KSH)</Th>
              <Th>Payment Method</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {payments.map((payment) => (
              <Tr key={payment.id}>
                <Td>{new Date(payment.date).toLocaleDateString()}</Td>
                <Td>{payment.amount.toFixed(2)}</Td>
                <Td>{payment.method}</Td>
                <Td>{payment.status}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      ) : (
        <Text>No payment history found.</Text>
      )}
    </Box>
  );
};

export default PaymentsPage;
