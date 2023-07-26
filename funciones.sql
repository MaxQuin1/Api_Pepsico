
-- FUNCIONES DE AGREGACION

-- COUNT: Cuenta el numero de filas o valores no nulos en una columna.

SELECT COUNT(*) AS Total_users FROM users;

-- SUM: Calcula la suma de los valores en una columna.

SELECT SUM(quantity) AS total_quantity FROM sales;

-- AVG: Calcula el promedio de los valores de una columna.

SELECT AVG(price) AS average_price FROM products;

-- MIN: Devuelve el valor minimo de una columna.

SELECT MIN(price) AS min_price FROM products;

-- MAX: Devuelve el valor maimo de una columna.

SELECT MAX(price) AS max_price FROM products;

---------------------------------------------

-- FUNCIONES DE CADENA

-- CONCAT: Concatena dos o mas cadenas de texto.

SELECT CONCAT(first_name,' ',last_Name) AS full_name FROM customers;

-- SUBSTRING: Extraer una parte de una cadena de texto.

SELECT SUBSTRING(title,1,10) AS shotened_title FROM books;

-- LENGTH: Devuelve la longitud de la cadena de texto.

SELECT LENGTH(description) AS description_length FROM products;

-- UPPER: Convierte una cedena de texto a mayusculas.

SELECT UPPER(name) AS uppercase_name FROM users;

-- LOWER: Convierte la cadena de texto a minusculas.

SELECT LOWER(email) AS lowercase_email FROM users;

--------------------------------------------------

-- FUNCIONES DE FECHA Y HORA

-- NOW: Devulve la fecha y hora actual.

SELECT NOW() AS current_datatime;

-- DATE_FORMAT: Formatea una fecha en un formato especifico.

SELECT DATE_FORMAT(birth_date,'%d-%m-%Y') AS formatted_date FROM customers;

-- DATEDIFF: Calcular la diferencia en dias entre dos fechas.

SELECT DATEDIFF(end_date,start_date) AS days_passed FROM products;

