<template lang="pug">
.curso-main-container.introduccion
  BannerInterno.text-uppercase(:titulo="'unidad 2: Razonamiento y demostraciones lógicas'" :subTitulo="'INTRODUCCIÓN'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .bg-fondo-1.bg-full-width
      div.px-5.pb-md-3.py-4

        .row.mb-4.pb-2
          .col-12.col-lg-5
            p.mb-0 Esta unidad temática introduce los conceptos fundamentales del razonamiento lógico y las herramientas formales para demostrar proposiciones matemáticas. A través de tres temas centrales, se exploran los tipos de razonamientos, las técnicas de demostración, y el uso de cuantificadores lógicos para formular y probar enunciados. 
          .col-7.d-none.d-lg-block
            img.img-a.img-t(src='@/assets/curso/unidad/img-1.png', alt='')

        .row.mb-5.justify-content-center 
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-2.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Tipos de razonamientos 
              p.px-1.text-small.mb-0.d-flex.text-center El razonamiento inductivo, deductivo y abductivo son fundamentales en el pensamiento lógico. El razonamiento inductivo generaliza patrones observados, el deductivo deriva conclusiones específicas a partir de premisas generales, y el abductivo busca la explicación más plausible ante ciertas observaciones. Comprender estos tipos es clave para resolver problemas en lógica y matemáticas.
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-3.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Técnicas de demostración 
              p.px-1.text-small.mb-0.d-flex.text-center Las técnicas de demostración (directa, indirecta, por contraposición y reducción al absurdo) permiten validar la veracidad de proposiciones. Cada método sigue una estructura lógica rigurosa que fortalece el rigor de las matemáticas.
          .col-10.col-md-8.col-lg-6.col-xl-4
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-4.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Cuantificadores lógicos 
              p.px-1.text-small.mb-0.d-flex.text-center Los cuantificadores universales y existenciales ayudan a expresar la generalidad o existencia de una propiedad en un conjunto. Estos símbolos son esenciales en la formulación precisa de enunciados y en la realización de demostraciones matemáticas.



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
