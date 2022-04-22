SELECT name AS Employee 
FROM Employee AS emp
WHERE salary > (SELECT salary 
               FROM Employee AS man
               WHERE emp.managerId = man.id)