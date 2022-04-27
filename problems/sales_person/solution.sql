SELECT name FROM SalesPerson WHERE NOT sales_id = any (
    SELECT sales_id FROM Orders WHERE com_id = (
        SELECT com_id FROM Company WHERE name = 'RED'
    ) GROUP BY name
)
