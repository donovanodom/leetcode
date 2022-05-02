SELECT name AS Customers FROM Customers WHERE NOT id = any (
    SELECT customerId FROM Orders
)