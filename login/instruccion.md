## Componentes
- vamos crear dos componentes 
          - FormLogin
          - Info
          - c404

## Rutas

   - crear las rutas a cada componente
          - FormLogin va a carga en localhost:4200
          - Info va a carga en la ruta /info
          - si la ruta no es valida cargará el c404Component

## Maquetación

   - vamos maquetando en FormLogin 
          input user 
          input pass
          button evento
          -Revoger los datos de los inputs

## Modelos
    - modelo usuario
                     id: number
                     user: string
                     password: string


## Servicio
    - Como crear un servicio: 
        -- ** ng generate service services/user **
    - crear un servicio user.service
    - comprobarUser(user, password) return true/ false
    - construir un array de usuarios con dos usuarios

## Form login
    -- si es true quiero navegar a infoComponent.
    -- si es false, que me salte un alert con usuario no existe