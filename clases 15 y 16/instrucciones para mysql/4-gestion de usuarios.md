# Crear usuario con su correspondiente contraseña
    CREATE USER '<nombre_del_usuario>'@'localhost' IDENTIFIED BY '<contraseña>';

## Ejemplo
    CREATE USER 'coder'@'localhost' IDENTIFIED BY 'house';

# Asignar privilegios de administracion a un usuario sobre todas las tablas de una base
    GRANT ALL PRIVILEGES ON <nombre_de_las_base>.* TO '<nombre_del_usuario>'@'localhost' WITH GRANT OPTION;
    FLUSH PRIVILEGES;

## Ejemplo
    GRANT ALL PRIVILEGES ON coderhouse.* TO 'coder'@'localhost' WITH GRANT OPTION;
    FLUSH PRIVILEGES;

# Borrar usuario
    DROP USER '<nombre_del_usuario>'@'localhost';

## Ejemplo
    DROP USER 'coder'@'localhost';
