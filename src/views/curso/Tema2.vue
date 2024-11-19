<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'Unidad 1. Introducción a la Lógica y el Pensamiento Lógico'" :subTitulo="'2. Pensamiento lógico'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
