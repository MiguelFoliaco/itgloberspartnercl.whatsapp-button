store-discussion).

# whatsapp-button


<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

Boton de Whatsapp para redirigir al chat de tu tienda en whatsapp


<img src='./image.png' width='100' height='100' />

## Configuration 

1. Añade a tu `manifest.json` la dependencia `itgloberspartnercl.whatsapp-button`;
2. Para declarar este componente depes configurar las siguientes propiedades.



### `whatsapp-button` props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `phone`      | `string`       | Debes pasar el numero con su codigo<br/>postal deberas omitir los ceros a la derecha<br/>de este y el signo +, por ejemplo: <br/>`573112233455`    | `573111111111`        |
|`bgcolor` | `string` | El codigo de color, este puede ser `hex`, `rgba`, `rgb`<br/>o `hsl` | `#0cdc4d`
|`message` | `string` | El mesaje que se desea enviar | `Hola mundo`
|`radius`  | `number` | Cuan tan redondo deseas el border | `50`
|`icon` | `string` | El link del icono de whatsapp que se desea<br/> mostrar por defecto este ya cuenta con un <br/> icono| `url`


## CSS Handlers 

`No CSS Handles are available yet for the app customization.`

<!-- DOCS-IGNORE:start -->

