<template lang="pug">
.curso-main-container.introduccion
  BannerInterno.text-uppercase(:titulo="'unidad 1. Introducción a la Lógica y el Pensamiento Lógico'" :subTitulo="'INTRODUCCIÓN'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .row.mb-5.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.pb-md-3
        .row.mx-0.mb-5
          .col-12.col-xl-7.col-xxl-8
            p.p-4.p-md-0 Las matemáticas, como ciencia formal, han evolucionado considerablemente desde el siglo XVII, suscitando tanto controversias como importantes avances en la lógica y el razonamiento. Gracias a este desarrollo, se han descubierto procesos y leyes fundamentales del mundo real, tales como el movimiento de los planetas, la gravedad y patrones de distribución en series numéricas, entre otros temas de alta relevancia.
          .d-none.d-xl-block.col-xl-5.col-xxl-4
            img.h-100(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')  
        .row.mb-5.justify-content-center.align-items-stretch
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-2.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Teoría de conjuntos de Georg Cantor
              p.px-1.text-small.mb-0.d-flex.text-center Georg Cantor propuso la teoría de conjuntos, que permite agrupar elementos en conjuntos específicos. Ejemplos notables de estos conjuntos incluyen los números naturales, puntos en un círculo, números primos y puntos en un plano.
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-3.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Importancia de las matemáticas en la vida cotidiana
              p.px-1.text-small.mb-0.d-flex.text-center Las matemáticas son fundamentales en las  actividades diarias, desde operaciones básicas hasta teorías avanzadas. Esta unidad aborda la lógica matemática, introduciendo pensamiento lógico, inducción y deducción aplicables a una variedad de problemas. 
          .col-10.col-md-8.col-lg-6.col-xl-4
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-4.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Lógica matemática
              p.px-1.text-small.mb-0.d-flex.text-center La lógica matemática se centra en las leyes de inferencia para establecer un razonamiento riguroso. Mediante la formalización del lenguaje y sus reglas, es útil en diversas áreas científicas y en la resolución de problemas complejos.


</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
