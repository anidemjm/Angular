## Modelos

        -- crear el modelo empleado
        -- crear el modelo Departamento.

## Servicio

        -- crear el servicio ng g s services/empleados
        -- tenemos que crear dentro del servicio un array de empleados siguiendo el modelo.
        -- getAllEmployes() que me ha devolver todos los empledos
        -- getEmployeeById(pId) y devuelve un empleado.

        //despues del descanso

        -- addEmployee(pEmpleado) añade un empleado a mi array

## Componente

        -- crear componente FormsEmpleados, listaEmpleados y VistaEmpleado

## Rutas

        - /home cargará listaEmpleados y pedirá todos los empleado
        - localhost:4200 redirigirá a /home al igual que todas las rutas que no existan tb redireccionarán a home.
        - /register cargar componente FormEmpleados
        - /departamento/:departamento cargará listaEmpleados pero solo los empleados de cada departamento.
        - /empleado/:empleadoId cargará VistaEmpleado donde se visualiza un unico empleado.

## Funcionalidad

        - dentro de componente lista Empleado tenemos que cargar un grid de boostrap de 3 columnas para añadir CARD
        - propiedad arrEmpleados y lo lleneis usando el servicio. El resultado deberá ser que el home se carguen todos los empleados. SOLO FOTO y nombre del empleado

        //tarea para hoy por la tarde

         - teneis que cargar en app.component.html un menu nav con dos HOME - REGISTER 
         - dentro app.component.html y debajo del nav teneis que poner un select (dropdown), que despliegue todas las categorias
                - direccion, marketing, cuentas, contabilidad, desarrollo.
        cuando pinche en una de ellas cargar listaEmpleados ccon los empleados de dicho departamento.


        //BOLA EXTRA - crear un array en el servicio de departamentos incializarlo con los valores anteriores. Y crear un metodo que me devuelva todo el array de departamentos.








