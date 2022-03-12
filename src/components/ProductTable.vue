<template>
    <section>
        <div>
            <strong>Nombre</strong>
            <div>{{producto | formatProduct}}</div>
        </div>
          <div>
            <strong>Precio</strong>
            <div>{{precio | formatPrecio}}</div>
        </div>
          <div>
            <strong>Vencimiento</strong>
            <div>{{vencimiento | formatVencimiento}}</div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ProductTable',
    data(){
        return{
            producto: 'PAQUETE_DE_GALLETAS',
            precio: 100,
            vencimiento: new Date
        }
    },
    // Filtros para darle formato al contenido
    filters: {
        formatProduct(producto){
            return producto.split('_').map(palabra => palabra.charAt(0).toUpperCase() + 
            palabra.slice(1).toLowerCase()).join(' ');
        },
        formatVencimiento(vencimiento){
            return vencimiento.toLocaleDateString('ES-es')
        }
    }
}
</script>

<style>

</style>